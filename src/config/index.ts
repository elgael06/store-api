const {
  DB_DIALECT = '',
  DB_HOST = '',
  DB_PORT = '',
  DB_USERNAME = '',
  DB_PASSWORD = '',
  DB_DATABASE = '',
} = process.env;

export default () => ({
  DB_DIALECT,
  DB_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_DATABASE,
});
