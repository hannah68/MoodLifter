/*
  Warnings:

  - You are about to drop the `FeelingOnAdvice` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FeelingOnArticle` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FeelingOnVideo` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `Feeling` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `feelingId` to the `Advice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `feelingId` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `feelingId` to the `Video` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "FeelingOnAdvice" DROP CONSTRAINT "FeelingOnAdvice_adviceId_fkey";

-- DropForeignKey
ALTER TABLE "FeelingOnAdvice" DROP CONSTRAINT "FeelingOnAdvice_feelingId_fkey";

-- DropForeignKey
ALTER TABLE "FeelingOnArticle" DROP CONSTRAINT "FeelingOnArticle_articleId_fkey";

-- DropForeignKey
ALTER TABLE "FeelingOnArticle" DROP CONSTRAINT "FeelingOnArticle_feelingId_fkey";

-- DropForeignKey
ALTER TABLE "FeelingOnVideo" DROP CONSTRAINT "FeelingOnVideo_feelingId_fkey";

-- DropForeignKey
ALTER TABLE "FeelingOnVideo" DROP CONSTRAINT "FeelingOnVideo_videoId_fkey";

-- AlterTable
ALTER TABLE "Advice" ADD COLUMN     "feelingId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Article" ADD COLUMN     "feelingId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Video" ADD COLUMN     "feelingId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "FeelingOnAdvice";

-- DropTable
DROP TABLE "FeelingOnArticle";

-- DropTable
DROP TABLE "FeelingOnVideo";

-- CreateIndex
CREATE UNIQUE INDEX "Feeling_name_key" ON "Feeling"("name");

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_feelingId_fkey" FOREIGN KEY ("feelingId") REFERENCES "Feeling"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_feelingId_fkey" FOREIGN KEY ("feelingId") REFERENCES "Feeling"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Advice" ADD CONSTRAINT "Advice_feelingId_fkey" FOREIGN KEY ("feelingId") REFERENCES "Feeling"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
