import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { Router, Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
  const news = await prisma.news.findMany({ orderBy: { publishedAt: "desc" } });
  res.json(news);
});

// News CRUD (protected)
router.post("/api/news", authenticateToken, async (req: AuthRequest, res: Response) => {
  const { title, content } = req.body;
  const news = await prisma.news.create({
    data: {
      title,
      content,
      authorId: req.user!.userId,
    },
  });
  res.json(news);
});

router.put("/api/news/:id", authenticateToken, async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const news = await prisma.news.update({
    where: { id: Number(id) },
    data: { title, content },
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

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  app.use(router);

  const httpServer = createServer(app);

  return httpServer;
}
