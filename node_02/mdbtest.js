import { readFileSync } from "fs";
import MDBReader from "mdb-reader";

const buffer = readFileSync("IDCMAINDB.mdb");
const reader = new MDBReader(buffer);

reader.getTableNames(); // ['Cats', 'Dogs', 'Cars']

const table = reader.getTable("Cats");
table.getColumnNames(); // ['id', 'name', 'color']
table.getData(); // [{id: 5, name: 'Ashley', color: 'black'}, ...]
