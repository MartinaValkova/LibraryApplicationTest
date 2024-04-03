const db = require('./postgres');
require('dotenv').config();


module.exports = {
  async getUsers() {
    const sql = `SELECT * FROM users`;
    const result = await db.query(sql);
    return result.rows;
  },

  async getUserByUsername(username) {
    const sql = `SELECT * FROM users WHERE username = $1`;
    const result = await db.query(sql, [username]);
    return result.rows[0];
  },

  async createUser(username, password) {
    const sql = `INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *`;
    const result = await db.query(sql, [username, password]);
    return result.rows[0];
  },
};
