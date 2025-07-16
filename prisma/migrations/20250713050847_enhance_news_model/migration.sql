-- AlterTable
ALTER TABLE "News" ADD COLUMN     "externalLink" TEXT,
ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "isPublished" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "summary" TEXT,
ADD COLUMN     "type" TEXT NOT NULL DEFAULT 'news',
ALTER COLUMN "content" DROP NOT NULL;
