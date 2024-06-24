/*
  Warnings:

  - You are about to drop the column `orderId` on the `comments` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `comments` table. All the data in the column will be lost.
  - You are about to drop the column `orderId` on the `notifications` table. All the data in the column will be lost.
  - You are about to drop the column `recipientId` on the `notifications` table. All the data in the column will be lost.
  - Added the required column `order_id` to the `comments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owner_id` to the `comments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order_id` to the `notifications` table without a default value. This is not possible if the table is not empty.
  - Added the required column `recipient_id` to the `notifications` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order_id` to the `order_updates` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owner_id` to the `order_updates` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_type` to the `order_updates` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "OrderUpdateTypes" AS ENUM ('DESCRIPTION', 'TYPE', 'STATUS');

-- AlterEnum
ALTER TYPE "OrderStatuses" ADD VALUE 'DELETED';

-- DropForeignKey
ALTER TABLE "comments" DROP CONSTRAINT "comments_orderId_fkey";

-- DropForeignKey
ALTER TABLE "comments" DROP CONSTRAINT "comments_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "notifications" DROP CONSTRAINT "notifications_orderId_fkey";

-- DropForeignKey
ALTER TABLE "notifications" DROP CONSTRAINT "notifications_recipientId_fkey";

-- AlterTable
ALTER TABLE "comments" DROP COLUMN "orderId",
DROP COLUMN "ownerId",
ADD COLUMN     "order_id" INTEGER NOT NULL,
ADD COLUMN     "owner_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "notifications" DROP COLUMN "orderId",
DROP COLUMN "recipientId",
ADD COLUMN     "order_id" INTEGER NOT NULL,
ADD COLUMN     "recipient_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "order_updates" ADD COLUMN     "description" TEXT,
ADD COLUMN     "order_id" INTEGER NOT NULL,
ADD COLUMN     "order_type" "OrderTypes",
ADD COLUMN     "owner_id" INTEGER NOT NULL,
ADD COLUMN     "status" "OrderStatuses" DEFAULT 'PENDING',
ADD COLUMN     "update_type" "OrderUpdateTypes" NOT NULL;

-- AddForeignKey
ALTER TABLE "order_updates" ADD CONSTRAINT "order_updates_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_updates" ADD CONSTRAINT "order_updates_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_recipient_id_fkey" FOREIGN KEY ("recipient_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
