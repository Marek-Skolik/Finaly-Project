import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

async function seed() {
    const products = [
      {
      name: 'T-Shirt',
      price: 10,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      photo: Buffer.from('t-shirt.png'),
      photo2: Buffer.from('t-shirt2.png')
    },
    {
      name: 'Longsleeve z długim rękawem',
      price: 15,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      photo: Buffer.from('longsleeve.png'),
      photo2: Buffer.from('longsleeve2.png')
    },
    {
      name: 'Koszula',
      price: 25,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      photo: Buffer.from('shirt.png'),
      photo2: Buffer.from('shirt2.png')
    },
    {
      name: 'Koszula w krate',
      price: 18,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      photo: Buffer.from('checkeredshirt.png'),
      photo2: Buffer.from('checkeredshirt2.png')
    },
    {
      name: 'Marynarka',
      price: 35,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      photo: Buffer.from('jacket.png'),
      photo2: Buffer.from('jacket2.png')
    },
    {
      name: 'Płaszcz',
      price: 60,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      photo: Buffer.from('coat.png'),
      photo2: Buffer.from('coat2.png')
    },
    {
      name: 'Garnitur',
      price: 65,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      photo: Buffer.from('suit.png'),
      photo2: Buffer.from('suit2.png')
    },
    {
      name: 'Buty wizytowe',
      price: 40,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      photo: Buffer.from('shoes.png'),
      photo2: Buffer.from('shoes2.png')
    },
    {
      name: 'Sneakersy',
      price: 25,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      photo: Buffer.from('sneakers.png'),
      photo2: Buffer.from('sneakers2.png')
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