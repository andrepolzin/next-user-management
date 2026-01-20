/*
  Warnings:

  - Added the required column `age` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `occupation` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "age" INTEGER NOT NULL,
ADD COLUMN     "avatar" TEXT NOT NULL DEFAULT 'https://i.pravatar.cc/300',
ADD COLUMN     "occupation" TEXT NOT NULL;
