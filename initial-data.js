const crypto = require("crypto");
const randomString = () => crypto.randomBytes(6).hexSlice();

module.exports = async (keystone) => {
  // Count existing users
  const {
    data: {
      _allUsersMeta: { count },
    },
  } = await keystone.executeGraphQL({
    context: keystone.createContext({ skipAccessControl: true }),
    query: `query {
      _allUsersMeta {
        count
      }
    }`,
  });

  if (count === 0 || count === null) {
    // const password = randomString();
    const password = "password";
    const email = "novinyarts@gmail.com";

    let graphqlResult = await keystone.executeGraphQL({
      context: keystone.createContext({ skipAccessControl: true }),
      query: `mutation {
        createUsers(
          data: [
            {
              data: {
                name: "Noviny"
                email: "novinyarts@gmail.com"
                isAdmin: true
                password: "password"
                armies: { create: { name: "Nova'eir", faction: "T'au" } }
              }
            }
            {
              data: {
                name: "Marky-Mark"
                email: "markus@gmail.com"
                isAdmin: false
                password: "password"
                armies: { create: { name: "Harleys", faction: "Harlequins" } }
              }
            }
          ]
        ) {
          id
          name
        }
      }`,
      // variables: { password, email },
    });

    console.log(graphqlResult);

    console.log(`

User created:
  email: ${email}
  password: ${password}
Please change these details after initial login.
`);
  }
};
