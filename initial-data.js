const { createItems } = require("@keystonejs/server-side-graphql-client");

const initialData = {
  User: [
    {
      name: "Noviny",
      email: "novinyarts@gmail.com",
      isAdmin: true,
      password: "password",
      armies: {
        create: {
          name: `Nova'eir`,
          description: "My main army",
          faction: "T'au",
          primaryColor: "rgba(119, 65, 191, 1)",
          secondaryColor: "rgba(232, 235, 40, 1)",
        },
      },
    },
    {
      name: "Marky-Mark",
      email: "markus@gmail.com",
      isAdmin: true,
      password: "password",
      armies: {
        create: {
          name: `Some Orks probably`,
          description: "An army of passion",
          faction: "Orks",
          primaryColor: "rgba(246, 0, 0, 1)",
          secondaryColor: "rgba(82, 133, 56, 1)",
        },
      },
    },
  ],
};

async function createInitialData(keystone) {
  if (!process.env.RECREATE_DATABASE) return;
  let newItems = Object.entries(initialData);

  await Promise.all(
    newItems.map(([listKey, listData]) =>
      createItems({
        keystone,
        listKey,
        items: listData.map((x) => ({ data: x })),
      })
    )
  );
}

module.exports = createInitialData;
