import { readFileSync } from "fs";
import MDBReader from "mdb-reader";
// const MDBReader = require("mdb-reader");

const buffer = fs.readFileSync("IDCMAINDB.mdb");
const reader = new MDBReader(buffer);

reader.getTableNames(); // ['Cats', 'Dogs', 'Cars']

const table = reader.getTable("TWEIGHT");
table.getColumnNames(); // ['id', 'name', 'color']
table.getData(); // [{id: 5, name: 'Ashley', color: 'black'}, ...]

console.log(table.getData());
