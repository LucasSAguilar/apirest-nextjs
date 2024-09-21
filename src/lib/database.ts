import mysql from "mysql2/promise";

const poolConnect = mysql.createPool({
    host: "",
    user: "",
    password: "",
    database: "",
})

export default poolConnect;