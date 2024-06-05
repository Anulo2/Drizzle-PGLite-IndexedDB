import { integer, serial, text, pgTable } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
	id: serial().primaryKey(),
	name: text().notNull(),
	surname: text().notNull(),
	email: text().notNull(),
	phone_number: text().notNull(),
});
