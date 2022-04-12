/*
  Warnings:

  - You are about to drop the column `userId` on the `FavUserArticle` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `FavUserQuote` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `FavUserVideo` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "FavUserArticle" DROP CONSTRAINT "FavUserArticle_userId_fkey";

-- DropForeignKey
ALTER TABLE "FavUserQuote" DROP CONSTRAINT "FavUserQuote_userId_fkey";

-- DropForeignKey
ALTER TABLE "FavUserVideo" DROP CONSTRAINT "FavUserVideo_userId_fkey";

-- AlterTable
ALTER TABLE "FavUserArticle" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "FavUserQuote" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "FavUserVideo" DROP COLUMN "userId";

-- CreateTable
CREATE TABLE "FavQuoteOnUser" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "favUserQuoteId" INTEGER NOT NULL,

    CONSTRAINT "FavQuoteOnUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FavArticleOnUser" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "favUserArticleId" INTEGER NOT NULL,

    CONSTRAINT "FavArticleOnUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FavVideoOnUser" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "favUserVideoId" INTEGER NOT NULL,

    CONSTRAINT "FavVideoOnUser_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FavQuoteOnUser" ADD CONSTRAINT "FavQuoteOnUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavQuoteOnUser" ADD CONSTRAINT "FavQuoteOnUser_favUserQuoteId_fkey" FOREIGN KEY ("favUserQuoteId") REFERENCES "FavUserQuote"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavArticleOnUser" ADD CONSTRAINT "FavArticleOnUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavArticleOnUser" ADD CONSTRAINT "FavArticleOnUser_favUserArticleId_fkey" FOREIGN KEY ("favUserArticleId") REFERENCES "FavUserArticle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavVideoOnUser" ADD CONSTRAINT "FavVideoOnUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavVideoOnUser" ADD CONSTRAINT "FavVideoOnUser_favUserVideoId_fkey" FOREIGN KEY ("favUserVideoId") REFERENCES "FavUserVideo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
