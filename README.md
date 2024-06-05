# Drizzle-PGLite-IndexedDB 

This repo serves as an example to the use of PGLite with IndexedDB as the storage and Drizzle as the ORM.

Unfortunately, the current version of Drizzle does not seem to permit to use the migrator tool in the browser.

There's also an error to the current code that I can't figure out how to solve. The error is the following:

```
error: column "undefined" of relation "user" does not exist
```

When inserting a new user in the db.
See App.js:27 for more info.