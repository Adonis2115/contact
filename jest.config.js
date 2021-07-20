process.env = Object.assign(process.env, {
    DB_CONNECT: 'mongodb://127.0.0.1:27017/contact_test'
  });

module.exports = process.env