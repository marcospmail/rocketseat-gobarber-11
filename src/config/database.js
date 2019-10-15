module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: '5430',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
