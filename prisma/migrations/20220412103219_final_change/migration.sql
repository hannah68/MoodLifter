/*
  Warnings:

  - You are about to drop the column `isFav` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `profileId` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `isFav` on the `Quote` table. All the data in the column will be lost.
  - You are about to drop the column `profileId` on the `Quote` table. All the data in the column will be lost.
  - You are about to drop the column `isFav` on the `Video` table. All the data in the column will be lost.
  - You are about to drop the column `profileId` on the `Video` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Article" DROP CONSTRAINT "Article_profileId_fkey";

-- DropForeignKey
ALTER TABLE "Quote" DROP CONSTRAINT "Quote_profileId_fkey";

-- DropForeignKey
ALTER TABLE "Video" DROP CONSTRAINT "Video_profileId_fkey";

-- AlterTable
ALTER TABLE "Article" DROP COLUMN "isFav",
DROP COLUMN "profileId";

-- AlterTable
ALTER TABLE "Quote" DROP COLUMN "isFav",
DROP COLUMN "profileId";

-- AlterTable
ALTER TABLE "Video" DROP COLUMN "isFav",
DROP COLUMN "profileId";

-- CreateTable
CREATE TABLE "FavUserArticle" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "FavUserArticle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FavUserVideo" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "FavUserVideo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FavUserQuote" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "text" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "FavUserQuote_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FavUserArticle" ADD CONSTRAINT "FavUserArticle_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavUserVideo" ADD CONSTRAINT "FavUserVideo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavUserQuote" ADD CONSTRAINT "FavUserQuote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
