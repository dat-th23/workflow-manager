/*
  Warnings:

  - The values [USER] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.
  - The `role` column on the `Member` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[projectKey]` on the table `Project` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `projectKey` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Role_new" AS ENUM ('OWNER', 'ADMIN', 'MEMBER', 'VIEWER');
ALTER TABLE "Member" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";
DROP TYPE "Role_old";
COMMIT;

-- AlterTable
ALTER TABLE "Member" DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'MEMBER';

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "projectKey" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Project_projectKey_key" ON "Project"("projectKey");
