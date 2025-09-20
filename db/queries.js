const pool = require("./pool");

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("DB connection error:", err);
  } else {
    console.log("Connected to DB at:", res.rows[0].now);
  }
});


async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

module.exports = {
  getAllUsernames,
  insertUsername
};
