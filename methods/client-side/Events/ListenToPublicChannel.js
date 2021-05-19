require("dotenv").config("../.env");
const { createToken } = require("../../server-side/createToken");

const APP_KEY = process.env["APP_KEY"];
const StreamChat = require("stream-chat").StreamChat;

const test = async () => {
  const client = new StreamChat(
    "dz5f4d5kzrue",
    "secret",
    { timeout: 6000 }
  );

  const userID = "katie";
  const token = client.createToken(userID);
  const set = await client.connectUser({ id: userID }, token);

  const channel = client.channel("gaming", "gaming-demo", {});

  await channel.watch();

  channel.on((event) => {
    // console.log("event", event);
    console.log("event", event.type, event.message.text);
  });
};

test().then((r) => console.log(r));
