import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Botella',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Botella',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Ron | Cerveza de Gengibre| Rodaja de Limón. ',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Ron | Jugo Cítrico | Azúcar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Azúcar Negra | Amargos de Angostura',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin |  Vermut Dulce | Campari | Rodaja de Naranja',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Segundo Puesto',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Primer Puesto',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'Mejor Restaurant',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Chef Sobresaliente',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };