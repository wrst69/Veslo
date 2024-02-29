-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'viewer',
    "hash" TEXT NOT NULL,
    "salt" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Node" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "MeasurePoint" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "node_id" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_updates" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "order_updates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comments" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "ownerId" INTEGER NOT NULL,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_name_key" ON "users"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Node_id_key" ON "Node"("id");

-- CreateIndex
CREATE UNIQUE INDEX "MeasurePoint_id_key" ON "MeasurePoint"("id");

-- CreateIndex
CREATE UNIQUE INDEX "comments_ownerId_key" ON "comments"("ownerId");

-- AddForeignKey
ALTER TABLE "MeasurePoint" ADD CONSTRAINT "MeasurePoint_node_id_fkey" FOREIGN KEY ("node_id") REFERENCES "Node"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
