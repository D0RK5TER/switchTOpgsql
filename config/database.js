require( "dotenv" ).config(); ///<<-- NOT SURE IF IT IS USED 

const { DEV_DATABASE_HOST, DEV_DATABASE_USERNAME, DEV_DATABASE_PASSWORD } = process.env;

module.exports = {
  development: {
      username: DEV_DATABASE_USERNAME,
      password: DEV_DATABASE_PASSWORD,
      database: "test",
      host: DEV_DATABASE_HOST,
      dialect: "postgres"
  },

}