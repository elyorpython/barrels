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
                AND table_name = 'products'
            );
        `);

        const exists = result.rows[0].exists;

        if (!exists) {
            console.log("The 'products' table will not find it! For the convenience work, it will be created automatically.");
            
            await client.query(`
            CREATE TABLE IF NOT EXISTS products (
                id SERIAL PRIMARY KEY,
                name TEXT NOT NULL,
                product_id_su INTEGER NOT NULL,
                liters INTEGER
                );
            `);

            console.log("The 'products' table has been created successfully");
        } else {
            console.log("The 'products' table has been found ans is ready to work!");
        }

    } catch(err) {
        console.error("🔴 Exceeding PostgreSQL connections:", err);
    }    
}


initializeDatabase();

async function addBarrelType(name, product_id_su, liters) {
  try {
    const query = `
      INSERT INTO products (name, product_id_su, liters)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const values = [name, product_id_su, liters];
    const result = await client.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error("🔴 Error in addBarrelType:", err);
    throw err;
  }
}

module.exports = {
    client,
    addBarrelType,
};