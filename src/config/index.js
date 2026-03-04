require('dotenv').config();

module.exports = {
  app: {
    port: parseInt(process.env.PORT || '5000', 10),
    env: process.env.NODE_ENV || 'development',
  },
  db: {
    uri: buildMongoUri(),
    options: {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      authSource: process.env.MONGODB_AUTH_SOURCE || 'admin',
      connectTimeoutMS: 30000,
      socketTimeoutMS: 30000,
      serverSelectionTimeoutMS: 5000,
      retryWrites: true,
      w: 'majority'
    }
  }

};

function buildMongoUri() {
  const credentials = `${encodeURIComponent(process.env.MONGODB_USER)}:${encodeURIComponent(process.env.MONGODB_PASSWORD)}`;
  const server = process.env.MONGODB_SERVER;
  const dbName = process.env.MONGODB_DB;
  return `mongodb+srv://${credentials}@${server}/${dbName}?retryWrites=true&w=majority&serverSelectionTimeoutMS=30000`;

}
