const axios = require("axios");

async function getKickStream(juansinchamusho) {
  const response = await axios.get(
    `https://kick.com/api/v1/channels/${username}`,
  );

  return response.data.livestream;
}

module.exports = { getKickStream };
