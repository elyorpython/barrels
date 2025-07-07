const {Client} = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'ebarrel',
    password: 'Aa0672601',
    port: 5432,
});

async function initializeDatabase() {
    try {
        await client.connect();
        console.log("PostgreSQL database connected");

        // Проверка, существует ли таблица barrel_types если нет то она будет создано автоматический
        const result = await client.query(`
            SELECT EXISTS (
                SELECT FROM information_schema.tables
                WHERE table_schema = 'public'
                AND table_name = 'barrel_types'
            );
        `);

        const exists = result.rows[0].exists;

        if (!exists) {
            console.log("The 'barrel_types' table will not find it! For the convenience work, it will be created automatically.");
            
            await client.query(`
            CREATE TABLE IF NOT EXISTS barrel_type (
                id SERIAL PRIMARY KEY,
                name TEXT NOT NULL,
                capacity INTEGER NOT NULL
                );
            `);

            console.log("The 'barrel_types' table has been created successfully");
        } else {
            console.log("The 'barrel_types' table has been found ans is ready to work!");
        }

    } catch(err) {
        console.error("🔴 Exceeding PostgreSQL connections:", err);
    }    
}


initializeDatabase();

module.exports = client;