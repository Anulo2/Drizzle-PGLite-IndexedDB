import { integer, serial, text, pgTable } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
	id: serial("id").primaryKey(),
	name: text("name").notNull(),
	surname: text("surname").notNull(),
	email: text("email").notNull(),
	phone_number: text("phone_number").notNull(),
});
