const mongoose = require("mongoose");

const streamSchema = new mongoose.Schema({
  platform: String, // twitch | kick
  username: String,
  guildId: String,
  channelId: String,
  roleId: String,
  isLive: { type: Boolean, default: false },
});

module.exports = mongoose.model("Stream", streamSchema);
