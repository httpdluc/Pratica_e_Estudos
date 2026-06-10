const mysql = require('mysql2/promise')

async function main() {
    const connection = await mysql.createConnection({
        user: '****',
        password: '*****',
        host: '*****',
        port: '*****',
        database: '*****',
    })

    const params = ['CT-5555', 'Fives', 2]
    const sql = 'INSERT INTO stormtroopers (name, nickname, id_patent) VALUES (?, ?, ?)'

    const [result] = await connection.query(sql, params)
    console.log(result)

    await connection.end()
}

main()