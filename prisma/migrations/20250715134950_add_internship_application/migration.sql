-- CreateTable
CREATE TABLE "InternshipApplication" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "duration" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "school" TEXT NOT NULL,
    "degreeProgram" TEXT NOT NULL,
    "yearOfStudy" TEXT NOT NULL,
    "resumeUrl" TEXT,
    "coverLetter" TEXT,
    "skillsExperience" TEXT,
    "motivation" TEXT,
    "referralSource" TEXT,
    "interviewReady" BOOLEAN NOT NULL,
    "priorCommitments" TEXT,
    "consent" BOOLEAN NOT NULL,
    "confirmation" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InternshipApplication_pkey" PRIMARY KEY ("id")
);
