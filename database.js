const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: "precios-1.c0f6dm2ucnlg.us-east-2.rds.amazonaws.com",
  user: "candidatoPrueba",
  password: "gaspre21.M",
  database: 'prueba',
  connectionLimit: 5,
});

module.exports = pool;
