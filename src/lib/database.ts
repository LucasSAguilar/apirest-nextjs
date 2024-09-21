import mysql from "mysql2/promise";

const poolConnect = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "banco_de_teste",
})

export default poolConnect;