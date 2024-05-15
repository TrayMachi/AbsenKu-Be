/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Person` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Person` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Person" ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Person_userId_key" ON "Person"("userId");
