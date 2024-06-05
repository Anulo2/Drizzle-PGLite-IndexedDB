CREATE TABLE IF NOT EXISTS "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
    "surname" text NOT NULL,
    "email" text NOT NULL,
    "phone_number" text NOT NULL
);