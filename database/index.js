const path = require('path');
const Database = require('better-sqlite3');

const dbase = new Database(path.resolve(__dirname, '../barrels.db'));

function initDatabase() {
    dbase.prepare(`
        CREATE TABLE IF NOT EXISTS clients (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            agent_name TEXT NOT NULL
        )
    `).run();
}

initDatabase();

module.exports = dbase;