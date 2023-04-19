const express = require('express');
const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('./src/app.module');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'projectdb',
});

connection.connect((error) => {
  if (error) throw error;
  console.log('Connected to the MySQL server.');
});

const port = process.env.PORT || 8000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

bootstrap();






