const express = require('express');
const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('./src/app.module');
const mysql = require('mysql');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors());

const dbUrl = process.env.DATABASE_URL;

const connection = mysql.createConnection(dbUrl);

connection.connect((error) => {
  if (error) {
    console.error('Błąd połączenia z bazą danych: ', error);
  } else {
    console.log('Połączenie z bazą danych MySQL udało się!');
  }
});

const port = process.env.PORT || 8000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

bootstrap();






