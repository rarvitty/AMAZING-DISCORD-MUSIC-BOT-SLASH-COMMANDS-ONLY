const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Express app!')
});
app.listen(3000, () => {
  console.log('[INFO] Bot Online!');
});
const MainClient = require("./fancy.js");
const client = new MainClient();

client.connect();

module.exports = client;

/**
 * @INFO
 * Bot Coded by Mel | https://dsc.gg/kathood
 * @INFO
 * Work for Kat Hood | https://dsc.gg/kathood
 * @INFO
 * Please Mention Us Kat Hood, When Using This Bot!
 * @INFO
 */
