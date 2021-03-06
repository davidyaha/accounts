const packages = ['', '@accounts/rest'];

const client = packages.reduce((prev, curr) => {
  let requiredPackage = prev;
  try {
    if (!prev && require.resolve(curr)) {
        //eslint-disable-next-line
        requiredPackage = require(curr).default;
    }
  } catch (exception) { // eslint-disable-line no-empty
    console.log(exception);
  }
  return requiredPackage;
}, false);

if (!client) {
  throw new Error('Please install a client adapter for accounts.');
}

export default client;
