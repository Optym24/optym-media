import mysql from 'mysql';

const db = mysql.createConnection({
  host: 'db4free.net',
  user: 'suryansh',
  password: 'elitmustest',
  database: 'elitmus_db',
});

const connectToDatabase = () => {
  return new Promise((resolve, reject) => {
    db.connect(error => {
      if (error) {
        console.error('Error connecting to database:', error);
        reject(error);
      } else {
        console.log('Database connection successful');
        resolve();
      }
    });
  });
};

export { db, connectToDatabase };

