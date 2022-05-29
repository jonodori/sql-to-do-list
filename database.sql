CREATE TABLE "todo" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR(100) NOT NULL,
	"details" TEXT,
	"when" date NOT NULL DEFAULT CURRENT_DATE,
	"completed" BOOLEAN DEFAULT false 
	);