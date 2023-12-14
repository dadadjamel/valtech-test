export const places = [
  {
    id: 1,
    countryName: 'FRONT-END',
    countryCapital: 'Valtech_',
    countryDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
    countryImage:
      'https://lp-cms-production.imgix.net/features/2013/04/sunrise1_cs.jpg?auto=format&w=1440&h=810&fit=crop&q=75',
  },
  {
    id: 2,
    countryName: 'ITALY',
    countryCapital: 'VENICE',
    countryDescription:
      'Venice, capital of the Veneto region in northern Italy, occupies more than 100 small islands in a lagoon in the Adriatic Sea.',
    countryImage:
      'https://a.cdn-hotels.com/gdcs/production65/d79/389c4f8f-d0e2-4a03-8999-78eaa83084f4.jpg?impolicy=fcrop&w=800&h=533&q=medium',
  },
  {
    id: 3,
    countryName: 'GERMANY',
    countryCapital: 'BERLIN',
    countryDescription:
      'Germany is capital, Berlin, was founded in the 13th century. The Holocaust Memorial and the remaining graffiti-painted sections of the Berlin Wall bear witness to its tumultuous past.',
    countryImage: 'https://media.routard.com/image/09/5/berlin.1554095.jpg',
  },
  {
    id: 4,
    countryName: 'SPAIN',
    countryCapital: 'BARCELONA',
    countryDescription:
      'Barcelona, the cosmopolitan capital of the Spanish region of Catalonia, is renowned for its art and architecture.',
    countryImage:
      'https://i.natgeofe.com/n/295349af-5e41-4681-9497-58d72eaf8254/temple-barcelona-spain.jpg',
  },
  {
    id: 5,
    countryName: 'FRANCE',
    countryCapital: 'PARIS',
    countryDescription:
      'Paris, the capital of France, is a major European city and a world center for art, fashion, gastronomy and culture.',
    countryImage:
      'https://cdn.sortiraparis.com/images/80/69688/837774-que-faire-aujourd-hui-ce-a-paris-ou-en-ile-de-france.jpg',
  },
  {
    id: 6,
    countryName: 'NETHERLANDS',
    countryCapital: 'AMSTERDAM',
    countryDescription:
      'Amsterdam, capital of the Netherlands, is known for its artistic heritage, elaborate canal system and narrow gabled houses.',
    countryImage:
      'https://cdn.generationvoyage.fr/2017/08/visiter-amsterdam-min-e1555595039518.jpg',
  },
  {
    id: 7,
    countryName: 'UNITED KINGDOM',
    countryCapital: 'LONDON',
    countryDescription:
      'London, the capital of England and the United Kingdom, is a modern city with a history dating back to Roman times.',
    countryImage:
      'https://assets.editorial.aetnd.com/uploads/2019/03/topic-london-gettyimages-760251843-feature.jpg',
  },
];

const delay = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const fetchData = async () => {
  await delay(350);
  return Promise.resolve(places);
};
