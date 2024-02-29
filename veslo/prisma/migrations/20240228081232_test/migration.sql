/*
  Warnings:

  - Changed the type of `nodeId` on the `orders` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "orders" DROP COLUMN "nodeId",
ADD COLUMN     "nodeId" INTEGER NOT NULL;
