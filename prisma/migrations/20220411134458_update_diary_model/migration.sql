/*
  Warnings:

  - You are about to drop the column `diaryType` on the `Diary` table. All the data in the column will be lost.
  - You are about to drop the `FeelingOnDiary` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Favourite" DROP CONSTRAINT "Favourite_userId_fkey";

-- DropForeignKey
ALTER TABLE "FeelingOnDiary" DROP CONSTRAINT "FeelingOnDiary_diaryId_fkey";

-- DropForeignKey
ALTER TABLE "FeelingOnDiary" DROP CONSTRAINT "FeelingOnDiary_feelingId_fkey";

-- AlterTable
ALTER TABLE "Diary" DROP COLUMN "diaryType";

-- DropTable
DROP TABLE "FeelingOnDiary";

-- AddForeignKey
ALTER TABLE "Favourite" ADD CONSTRAINT "Favourite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
