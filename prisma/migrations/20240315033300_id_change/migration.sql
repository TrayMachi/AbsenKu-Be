/*
  Warnings:

  - The primary key for the `Person` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `Person` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Person" DROP CONSTRAINT "Person_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Person_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Person_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "Person_id_key" ON "Person"("id");
