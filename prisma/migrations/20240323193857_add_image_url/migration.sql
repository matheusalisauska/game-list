/*
  Warnings:

  - Added the required column `imageUrl` to the `Games` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `games` ADD COLUMN `imageUrl` VARCHAR(191) NOT NULL;
