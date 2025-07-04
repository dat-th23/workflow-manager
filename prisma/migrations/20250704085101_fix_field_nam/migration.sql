/*
  Warnings:

  - You are about to drop the column `taskId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `projectId` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `projectKey` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `projectId` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `taskId` on the `TaskAssignee` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `TaskAssignee` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,project_id]` on the table `Member` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[project_key]` on the table `Project` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[task_id,user_id]` on the table `TaskAssignee` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `task_id` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `project_id` to the `Member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `project_key` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `project_id` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `task_id` to the `TaskAssignee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `TaskAssignee` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_taskId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_userId_fkey";

-- DropForeignKey
ALTER TABLE "Member" DROP CONSTRAINT "Member_projectId_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_projectId_fkey";

-- DropForeignKey
ALTER TABLE "TaskAssignee" DROP CONSTRAINT "TaskAssignee_taskId_fkey";

-- DropForeignKey
ALTER TABLE "TaskAssignee" DROP CONSTRAINT "TaskAssignee_userId_fkey";

-- DropIndex
DROP INDEX "Member_userId_projectId_key";

-- DropIndex
DROP INDEX "Project_projectKey_key";

-- DropIndex
DROP INDEX "TaskAssignee_taskId_userId_key";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "taskId",
DROP COLUMN "userId",
ADD COLUMN     "task_id" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Member" DROP COLUMN "projectId",
ADD COLUMN     "project_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "projectKey",
ADD COLUMN     "project_key" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "projectId",
ADD COLUMN     "project_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TaskAssignee" DROP COLUMN "taskId",
DROP COLUMN "userId",
ADD COLUMN     "task_id" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Member_userId_project_id_key" ON "Member"("userId", "project_id");

-- CreateIndex
CREATE UNIQUE INDEX "Project_project_key_key" ON "Project"("project_key");

-- CreateIndex
CREATE UNIQUE INDEX "TaskAssignee_task_id_user_id_key" ON "TaskAssignee"("task_id", "user_id");

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskAssignee" ADD CONSTRAINT "TaskAssignee_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskAssignee" ADD CONSTRAINT "TaskAssignee_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_task_id_fkey" FOREIGN KEY ("task_id") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
