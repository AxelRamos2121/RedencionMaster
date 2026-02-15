const axios = require("axios");

let enDirecto = false; // Controla si ya fue anunciado

async function checkTwitch(client) {
  try {
    const clientId = process.env.TWITCH_CLIENT_ID;
    const accessToken = process.env.TWITCH_ACCESS_TOKEN;

    const response = await axios.get("https://api.twitch.tv/helix/streams", {
      headers: {
        "Client-ID": clientId,
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        user_login: [
          "axelramos2121",
          "unapibarandy",
          "basstiancito",
          "saii_x3",
          "imrsunk26",
        ],
      },
    });

    const streamOnline = response.data.data.length > 0;

    if (streamOnline && !enDirecto) {
      enDirecto = true;

      const canal = client.channels.cache.get("ID_DEL_CANAL");

      if (canal) {
        canal.send({
          content: "🔴 ¡Estamos en directo!",
          embeds: [
            {
              title: "Nuevo directo",
              description: "Ya estamos en vivo en Twitch",
              url: "https://twitch.tv/${nombrecanal}",
              color: 0x9146ff,
            },
          ],
        });
      }

      console.log("Anuncio enviado.");
    }

    if (!streamOnline) {
      enDirecto = false;
    }
  } catch (error) {
    console.error("Error revisando Twitch:", error.message);
  }
}

module.exports = { checkTwitch };
