require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");
const express = require("express");

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

// ===== SERVIDOR WEB (para Render) =====
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Bot activo");
});

app.listen(PORT, () => {
  console.log(`Servidor web activo en el puerto ${PORT}`);
});

// ===== BOT =====
client.once("ready", () => {
  console.log(`Bot listo como ${client.user.tag}`);
});

client.login(process.env.DISCORD_TOKEN);
