const { Client } = require('pg');


module.exports = function establishConnection() {
  const client = new Client({
    connectionString: "postgres://postgres.meclajfqkfxaktcmtxip:budgetingsystem.03@aws-0-us-west-1.pooler.supabase.com:5432/postgres",
    ssl: {
      rejectUnauthorized: false // Necessary if connecting to Supabase
    }
  });

  client.connect()
    .then(() => console.log("Connected to Supabase!"))
    .catch(err => console.error('Connection error', err.stack));

  return client;
};