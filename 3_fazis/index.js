const express =  require ("express");
const app = express();
const port = 3000;
const mysql = requers("mysql2");
requer("dotenv").config();

app.get ('/', (req, res) =>{
    res.send ("kérrés kiadva")
})

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
})

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: 
})