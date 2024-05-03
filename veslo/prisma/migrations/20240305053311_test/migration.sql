/*
  Warnings:

  - You are about to drop the column `name` on the `MeasurePoint` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Node` table. All the data in the column will be lost.
  - You are about to drop the column `measurePointId` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `nodeId` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[ownerId]` on the table `orders` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `title` to the `MeasurePoint` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Node` table without a default value. This is not possible if the table is not empty.
  - Added the required column `measure_point_id` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `node_id` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerId` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MeasurePoint" DROP COLUMN "name",
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Node" DROP COLUMN "name",
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "measurePointId",
DROP COLUMN "nodeId",
ADD COLUMN     "measure_point_id" INTEGER NOT NULL,
ADD COLUMN     "node_id" INTEGER NOT NULL,
ADD COLUMN     "ownerId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "avatar" TEXT,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "orders_ownerId_key" ON "orders"("ownerId");

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_node_id_fkey" FOREIGN KEY ("node_id") REFERENCES "Node"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_measure_point_id_fkey" FOREIGN KEY ("measure_point_id") REFERENCES "MeasurePoint"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
