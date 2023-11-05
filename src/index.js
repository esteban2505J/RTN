// imports
import app from "./app.js";
import { conectDb } from "./db.js";

// server port
const PORT = process.env.PORT || 5000;

//data base conection
conectDb();
app.listen(PORT);
console.log(`server on port ${PORT}`);
