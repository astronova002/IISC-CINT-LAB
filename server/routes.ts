import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage as memStorage } from "./storage";
import { Router, Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

// These two lines recreate __filename and __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prisma = new PrismaClient();
const router = Router();

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

// Extend Express Request type to include user
interface AuthRequest extends Request {
  user?: { userId: number; username: string };
}

// JWT Auth Middleware
function authenticateToken(req: AuthRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Multer setup for image uploads
const uploadDir = path.join(__dirname, "../client/public/uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
const storage = multer.diskStorage({
  destination: (req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) => cb(null, uploadDir),
  filename: (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
    const ext = path.extname(file.originalname);
    const name = `${Date.now()}-${Math.round(Math.random()*1e9)}${ext}`;
    cb(null, name);
  }
});
const upload = multer({ storage });

// Auth: Login
router.post("/api/auth/login", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await prisma.user.findUnique({ where: { username } });
  if (!user) return res.status(401).json({ message: "Invalid credentials" });
  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) return res.status(401).json({ message: "Invalid credentials" });
  const token = jwt.sign({ userId: user.id, username: user.username }, JWT_SECRET, { expiresIn: "1d" });
  res.json({ token });
});

// Auth: Me
router.get("/api/auth/me", authenticateToken, async (req: AuthRequest, res: Response) => {
  const user = await prisma.user.findUnique({ where: { id: req.user!.userId }, select: { id: true, username: true, createdAt: true } });
  res.json(user);
});

// News GET (public)
router.get("/api/news", async (req: Request, res: Response) => {
  const news = await prisma.news.findMany({ 
    where: { isPublished: true },
    orderBy: { publishedAt: "desc" } 
  });
  res.json(news);
});

// Team Members GET (public)
router.get("/api/team/public", async (req: Request, res: Response) => {
  const team = await prisma.teamMember.findMany({
    orderBy: { id: "desc" }
  });
  res.json(team);
});

// Publications GET (public)
router.get("/api/publications/public", async (req: Request, res: Response) => {
  const pubs = await prisma.publication.findMany({
    orderBy: { year: "desc" }
  });
  res.json(pubs);
});

// News CRUD (protected)
router.post("/api/news", authenticateToken, async (req: AuthRequest, res: Response) => {
  const { title, summary, content, imageUrl, type, externalLink, isPublished } = req.body;
  const news = await prisma.news.create({
    data: {
      title,
      summary,
      content,
      imageUrl,
      type: type || "news",
      externalLink,
      isPublished: isPublished !== undefined ? isPublished : true,
      authorId: req.user!.userId,
    },
  });
  res.json(news);
});

router.put("/api/news/:id", authenticateToken, async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const { title, summary, content, imageUrl, type, externalLink, isPublished } = req.body;
  const news = await prisma.news.update({
    where: { id: Number(id) },
    data: { 
      title, 
      summary, 
      content, 
      imageUrl, 
      type, 
      externalLink,
      isPublished
    },
  });
  res.json(news);
});

router.delete("/api/news/:id", authenticateToken, async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  await prisma.news.delete({ where: { id: Number(id) } });
  res.json({ success: true });
});

// Team Members CRUD (protected)
router.get("/api/team", authenticateToken, async (req: AuthRequest, res: Response) => {
  const team = await prisma.teamMember.findMany();
  res.json(team);
});

router.post("/api/team", authenticateToken, async (req: AuthRequest, res: Response) => {
  const { name, role, bio, photoUrl } = req.body;
  const member = await prisma.teamMember.create({ data: { name, role, bio, photoUrl } });
  res.json(member);
});

router.put("/api/team/:id", authenticateToken, async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const { name, role, bio, photoUrl } = req.body;
  const member = await prisma.teamMember.update({ where: { id: Number(id) }, data: { name, role, bio, photoUrl } });
  res.json(member);
});

router.delete("/api/team/:id", authenticateToken, async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  await prisma.teamMember.delete({ where: { id: Number(id) } });
  res.json({ success: true });
});

// Research Projects CRUD (protected)
router.get("/api/research", authenticateToken, async (req: AuthRequest, res: Response) => {
  const projects = await prisma.researchProject.findMany();
  res.json(projects);
});

router.post("/api/research", authenticateToken, async (req: AuthRequest, res: Response) => {
  const { title, description, startDate, endDate } = req.body;
  const project = await prisma.researchProject.create({ data: { title, description, startDate, endDate } });
  res.json(project);
});

router.put("/api/research/:id", authenticateToken, async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const { title, description, startDate, endDate } = req.body;
  const project = await prisma.researchProject.update({ where: { id: Number(id) }, data: { title, description, startDate, endDate } });
  res.json(project);
});

router.delete("/api/research/:id", authenticateToken, async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  await prisma.researchProject.delete({ where: { id: Number(id) } });
  res.json({ success: true });
});

// Publications CRUD (protected)
router.get("/api/publications", authenticateToken, async (req: AuthRequest, res: Response) => {
  const pubs = await prisma.publication.findMany();
  res.json(pubs);
});

router.post("/api/publications", authenticateToken, async (req: AuthRequest, res: Response) => {
  const { title, authors, journal, year, link } = req.body;
  const pub = await prisma.publication.create({ data: { title, authors, journal, year, link } });
  res.json(pub);
});

router.put("/api/publications/:id", authenticateToken, async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const { title, authors, journal, year, link } = req.body;
  const pub = await prisma.publication.update({ where: { id: Number(id) }, data: { title, authors, journal, year, link } });
  res.json(pub);
});

router.delete("/api/publications/:id", authenticateToken, async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  await prisma.publication.delete({ where: { id: Number(id) } });
  res.json({ success: true });
});

// Image upload endpoint (protected)
router.post("/api/upload", authenticateToken, upload.single("image"), (req: AuthRequest & { file?: Express.Multer.File }, res: Response) => {
  if (!req.file) return res.status(400).json({ message: "No file uploaded" });
  // Return the public URL for the uploaded image
  const url = `/uploads/${req.file.filename}`;
  res.json({ url });
});

// Feedback POST (public)
router.post("/api/feedback", async (req: Request, res: Response) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const feedback = await prisma.feedback.create({
      data: { name, email, message }
    });
    res.json({ success: true, feedback });
  } catch (err) {
    res.status(500).json({ message: "Failed to save feedback" });
  }
});

// Feedback GET (admin or public)
router.get("/api/feedback", async (req: Request, res: Response) => {
  try {
    const feedbacks = await prisma.feedback.findMany({ orderBy: { createdAt: "desc" } });
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch feedback" });
  }
});

// Internship Applications POST (public)
router.post("/api/internship-applications", upload.fields([
  { name: "profilePhoto", maxCount: 1 },
  { name: "transcript", maxCount: 1 },
  { name: "resume", maxCount: 1 },
]), async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const files = req.files as Record<string, Express.Multer.File[]>;
    const profilePhotoUrl = files.profilePhoto?.[0] ? `/uploads/${files.profilePhoto[0].filename}` : undefined;
    const transcriptUrl = files.transcript?.[0] ? `/uploads/${files.transcript[0].filename}` : undefined;
    const resumeUrl = files.resume?.[0] ? `/uploads/${files.resume[0].filename}` : undefined;
    const application = await prisma.internshipApplication.create({
      data: {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        dateOfBirth: new Date(data.dateOfBirth),
        gender: data.gender || null,
        profilePhotoUrl,
        institution: data.institution,
        degreeProgram: data.degreeProgram,
        major: data.major,
        yearOfStudy: data.yearOfStudy,
        cgpa: data.cgpa,
        transcriptUrl: transcriptUrl!,
        duration: data.duration,
        startDate: new Date(data.startDate),
        areasOfInterest: data.areasOfInterest,
        appliedBefore: data.appliedBefore === "true" || data.appliedBefore === true,
        resumeUrl: resumeUrl!,
        coverLetter: data.coverLetter,
        skills: data.skills,
        experience: data.experience,
        github: data.github,
        linkedin: data.linkedin,
        publications: data.publications,
      },
    });
    res.json({ success: true, application });
  } catch (err) {
    res.status(500).json({ message: "Failed to submit application" });
  }
});

// Internship Applications GET (admin only)
router.get("/api/internship-applications", authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const applications = await prisma.internshipApplication.findMany({ orderBy: { createdAt: "desc" } });
    res.json(applications);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch applications" });
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  app.use(router);

  const httpServer = createServer(app);

  return httpServer;
}
