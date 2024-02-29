/*
  Warnings:

  - Added the required column `cost` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `measurePointId` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nodeId` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "cost" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "measurePointId" TEXT NOT NULL,
ADD COLUMN     "nodeId" TEXT NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL;
