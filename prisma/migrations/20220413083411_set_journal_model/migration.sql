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

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "profilePicture" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favourite" ADD CONSTRAINT "Favourite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
