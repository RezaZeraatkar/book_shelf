const config = {
  production: {
    SECRET: process.env.SECRET,
    DATABASE_URI: process.env.MONGODBLAB_URI
  },
  development: {
    SECRET: "supersecretpass123",
    DATABASE_URI: "mongodb://localhost:27017/booksShelf"
  }
};

exports.get = function get(env) {
  return config[env] || config.development;
};
