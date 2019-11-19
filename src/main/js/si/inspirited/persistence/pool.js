const mysql = require("mysql");
const config = require("../config/mysql-properties");

const pool  = mysql.createPool(config);

module.exports = pool;