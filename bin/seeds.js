var mongoose = require('mongoose');

// eslint-disable-next-line import/no-unresolved
const Users = require('../models/User');

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

const users = [
  {
    username: 'Rocky',
    email: 'thanos_alu001@hotmail.com',
    password: '123',
    birthday: '2020-12-25',
    role: 'ADMIN',
    clan: '1234',
    friends: 1,
    level: 1,
    rate: 0,
    host: 0,
    event: 0,
    comments: 0,
  },
  {
    username: 'Arnold',
    password: '456',
    birthday: '2020-12-25',
    role: 'GUEST',
    clan: 'abcd',
    friends: 1,
    level: 1,
    rate: 0,
    host: 0,
  },
  {
    username: 'Rocky Jr',
    password: '789',
    birthday: '2020-12-25',
    role: 'GUEST',
    clan: '1234',
    friends: 1,
  },
];

Users.create(users, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${users.length} users`);
  mongoose.connection.close();
});
