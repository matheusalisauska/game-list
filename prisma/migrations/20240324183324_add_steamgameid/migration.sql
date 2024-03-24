/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `games` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `games` DROP COLUMN `imageUrl`,
    ADD COLUMN `steamGameId` INTEGER NOT NULL DEFAULT 1;
