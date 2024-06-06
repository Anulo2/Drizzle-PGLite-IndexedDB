import { PGlite } from "@electric-sql/pglite";
import { migrate } from "drizzle-orm/pglite/migrator";
import { drizzle } from "drizzle-orm/pglite";
import * as schema from "@/drizzle/schema.js";
import { useEffect, useState } from "react";
import migrations from "./drizzle/migrations/0000_organic_silverclaw.sql?raw";
import { user } from "./drizzle/schema.js";
function App() {
	const [db, setDb] = useState(null);

	useEffect(() => {
		const initDb = async () => {
			const pgLiteClient = new PGlite("idb://testdb");

			await pgLiteClient.waitReady;

			try {
				await pgLiteClient.exec(migrations);

				console.log("Migrated");

				const drizzleDb = drizzle(pgLiteClient, { schema });

				console.log(user);
				console.log(drizzleDb);

				const insertedUser = await drizzleDb
					.insert(user)
					.values({
						name: "Volatile",
						surname: "Jasper",
						email: "vjasper@example.com",
						phone_number: "+1234567890",
					})
					.returning();

				console.log(insertedUser);

				setDb(drizzleDb);
			} catch (err) {
				console.error(err);
			}
		};

		initDb();
	}, []);

	return <></>;
}

export default App;
