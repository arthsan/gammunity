var mongoose = require('mongoose');

// eslint-disable-next-line import/no-unresolved
const Events = require('../models/Event');

const dbName = 'gammunity';
mongoose.connect(`mongodb://localhost/${dbName}`);

// const celebrities = [
//   {
//     name: 'Tom Cruise',
//     occupation: 'actor',
//     catchPhrase: 'catchfhrase',
//   },
//   {    
//     name: 'Silvester Stallone',
//     occupation: 'actor',
//     catchPhrase: 'catchfhrase',
//   },
//   {    
//     name: 'Arnold Schwatzneger',
//     occupation: 'actor',
//     catchPhrase: 'Come with me if you wann live',
//   },
// ];

// Celebrity.create(celebrities, (err) => {
//   if (err) { throw(err) }
//   console.log(`Created ${celebrities.length} celebrities`)
//   mongoose.connection.close();
// });

const events = [
  {
    title: 'LOL night!! game, friends and beers!!!',
    category: 'games',
    photo: 'http://s2.glbimg.com/xy1yeThemFm2hNc1bwl5SeN6R8k=/0x0:695x449/695x449/s.glbimg.com/po/tt2/f/original/2014/04/11/league-of-legends-maracanazinho.png',
    friends: 0,
    clan: 'Test',
    requisits: {
      role: 'ADMIN',
      clan: true,
      friends: 50,
    },
    rate: 100,
  },
  {
    title: 'MARIO KART NIGHT!!!',
    category: 'games',
    phoot: 'https://i.blogs.es/acd781/mario-kart-8-deluxe/450_1000.jpg',
    friends: 0,
    clan: 'Test',
    requisits: {
      role: 'ADMIN',
      clan: false,
      friends: 20,
    },
    rate: 5,
  },
  {
    title: 'RESIDENT EVIL RUNGAME!',
    category: 'games',
    photo: 'https://i.blogs.es/7256c0/dwpkkgkucaef-4h/450_1000.jpg',
    friends: 0,
    clan: 'Test',
    requisits: {
      role: 'ADMIN',
      clan: true,
      friends: 10,
    },
    rate: 1,
  },
  {
    title: 'CATAN ALL THE NIGHT',
    category: 'games',
    photo: 'https://images-na.ssl-images-amazon.com/images/I/71y%2BSsqLqVL._SL1000_.jpg',
    friends: 0,
    clan: 'Test',
    requisits: {
      role: 'ADMIN',
      clan: true,
      friends: 2,
    },
    rate: 15,
  },
  {
    title: 'OLD SCHOOL GAMES!! NINTENDO!!',
    category: 'games',
    photo: 'https://i.imgur.com/Y9h8AuC.jpg?1',
    friends: 0,
    clan: 'Test',
    requisits: {
      role: 'ADMIN',
      clan: true,
      friends: 2,
    },
    rate: 15,
  },
  {
    title: 'EXPLODING KITTENS MEETING!!',
    category: 'games',
    photo: 'https://target.scene7.com/is/image/Target/GUEST_70c79d54-726e-4a15-bd76-0bd263348090?wid=488&hei=488&fmt=pjpeg',
    friends: 0,
    clan: 'Test',
    requisits: {
      role: 'ADMIN',
      clan: true,
      friends: 2,
    },
    rate: 15,
  },
];

Events.create(events, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${events.length} events`);
  mongoose.connection.close();
});
