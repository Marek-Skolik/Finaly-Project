import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

async function seed() {
    const products = [
      {
      name: 'T-Shirt',
      price: 10,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      photo: 't-shirt.png',
      photo2: 't-shirt2.png'
    },
    {
      name: 'Longsleeve z długim rękawem',
      price: 15,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      photo: 'longsleeve.png',
      photo2: 'longsleeve2.png'
    },
    {
      name: 'Koszula',
      price: 25,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      photo: 'shirt.png',
      photo2: 'shirt2.png'
    },
    {
      name: 'Koszula w krate',
      price: 18,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      photo: 'checkeredshirt.png',
      photo2: 'checkeredshirt2.png'
    },
    {
      name: 'Marynarka',
      price: 35,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      photo: 'jacket.png',
      photo2: 'jacket2.png'
    },
    {
      name: 'Płaszcz',
      price: 60,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      photo: 'coat.png',
      photo2: 'coat2.png'
    },
    {
      name: 'Garnitur',
      price: 65,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      photo: 'suit.png',
      photo2: 'suit2.png'
    },
    {
      name: 'Buty wizytowe',
      price: 40,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      photo: 'shoes.png',
      photo2: 'shoes2.png'
    },
    {
      name: 'Sneakersy',
      price: 25,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      photo: 'sneakers.png',
      photo2: 'sneakers2.png'
    },
];

for (const product of products) {
  await db.product.create({ data: product });
}

console.log('Produkty zostały dodane do bazy danych!');
}

seed()
.catch((error) => {
  console.error(error);
})
.finally(async () => {
  await db.$disconnect();
});