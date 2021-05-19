const { serverClient } = require("./client");

const userArray = [
  { id: "scott" },
  { id: "bob" },
  { id: "bill" },
  { id: "sean" },
];

const upsertMany = async (users) => {
  return await serverClient.upsertUsers(userArray);
};

const upsertOne = async (user_id) => {
  return await serverClient.upsertUser({ id: user_id });
};

const makeAdmin = async (user_id) => {
  return await serverClient.upsertUser({
    id: user_id,
    role: "user",
  });
};

// upsertMany(userArray).then((r) => console.log(r));
makeAdmin("bill").then((r) => console.log(r));
