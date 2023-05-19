-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL AUTO_INCREMENT,
    "email" VARCHAR(64) NOT NULL,
    "name" VARCHAR(64) NULL,
    "password" VARCHAR(64) NOT NULL,

    UNIQUE INDEX "User_email_key"("email"), 
    PRIMARY KEY ("id")
)DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
