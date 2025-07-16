-- AlterTable
ALTER TABLE "ResearchProject" ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'ongoing',
ADD COLUMN     "tags" TEXT[];
