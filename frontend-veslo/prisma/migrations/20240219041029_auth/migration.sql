/*
  Warnings:

  - You are about to drop the `Course` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "name" DROP NOT NULL;

-- DropTable
DROP TABLE "Course";
