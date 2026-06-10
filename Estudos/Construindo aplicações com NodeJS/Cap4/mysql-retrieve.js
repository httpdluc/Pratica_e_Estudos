const mysql = require('mysql2/promise')

async function main() {
    const connection = await mysql.createConnection({
        user: '****',
        password: '*****',
        host: '*****',
        port: '*****',
        database: '*****',
    })

    const [rows] = await connection.query('SELECT * FROM stormtroopers WHERE id = ?', [6])
    console.log(rows)

    await connection.end()
}

main()