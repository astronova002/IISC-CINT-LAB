/*
  Warnings:

  - You are about to drop the column `confirmation` on the `InternshipApplication` table. All the data in the column will be lost.
  - You are about to drop the column `consent` on the `InternshipApplication` table. All the data in the column will be lost.
  - You are about to drop the column `department` on the `InternshipApplication` table. All the data in the column will be lost.
  - You are about to drop the column `interviewReady` on the `InternshipApplication` table. All the data in the column will be lost.
  - You are about to drop the column `motivation` on the `InternshipApplication` table. All the data in the column will be lost.
  - You are about to drop the column `priorCommitments` on the `InternshipApplication` table. All the data in the column will be lost.
  - You are about to drop the column `referralSource` on the `InternshipApplication` table. All the data in the column will be lost.
  - You are about to drop the column `school` on the `InternshipApplication` table. All the data in the column will be lost.
  - You are about to drop the column `skillsExperience` on the `InternshipApplication` table. All the data in the column will be lost.
  - Added the required column `appliedBefore` to the `InternshipApplication` table without a default value. This is not possible if the table is not empty.
  - Added the required column `areasOfInterest` to the `InternshipApplication` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cgpa` to the `InternshipApplication` table without a default value. This is not possible if the table is not empty.
  - Added the required column `experience` to the `InternshipApplication` table without a default value. This is not possible if the table is not empty.
  - Added the required column `institution` to the `InternshipApplication` table without a default value. This is not possible if the table is not empty.
  - Added the required column `major` to the `InternshipApplication` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skills` to the `InternshipApplication` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transcriptUrl` to the `InternshipApplication` table without a default value. This is not possible if the table is not empty.
  - Made the column `resumeUrl` on table `InternshipApplication` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "InternshipApplication" DROP COLUMN "confirmation",
DROP COLUMN "consent",
DROP COLUMN "department",
DROP COLUMN "interviewReady",
DROP COLUMN "motivation",
DROP COLUMN "priorCommitments",
DROP COLUMN "referralSource",
DROP COLUMN "school",
DROP COLUMN "skillsExperience",
ADD COLUMN     "appliedBefore" BOOLEAN NOT NULL,
ADD COLUMN     "areasOfInterest" TEXT NOT NULL,
ADD COLUMN     "cgpa" TEXT NOT NULL,
ADD COLUMN     "experience" TEXT NOT NULL,
ADD COLUMN     "gender" TEXT,
ADD COLUMN     "github" TEXT,
ADD COLUMN     "institution" TEXT NOT NULL,
ADD COLUMN     "linkedin" TEXT,
ADD COLUMN     "major" TEXT NOT NULL,
ADD COLUMN     "profilePhotoUrl" TEXT,
ADD COLUMN     "publications" TEXT,
ADD COLUMN     "skills" TEXT NOT NULL,
ADD COLUMN     "transcriptUrl" TEXT NOT NULL,
ALTER COLUMN "resumeUrl" SET NOT NULL;
