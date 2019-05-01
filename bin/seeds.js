const mongoose = require('mongoose');

// eslint-disable-next-line import/no-unresolved

const dbName = 'gammunity';
mongoose.connect(`mongodb://localhost/${dbName}`);

// const Events = require('../models/Event');

// const events = [
//   {
//     title: 'LOL night!! game, friends and beers!!!',
//     category: 'games',
//     photo: 'http://s2.glbimg.com/xy1yeThemFm2hNc1bwl5SeN6R8k=/0x0:695x449/695x449/s.glbimg.com/po/tt2/f/original/2014/04/11/league-of-legends-maracanazinho.png',
//     friends: 0,
//     clan: 'Test',
//     requisits: {
//       role: 'ADMIN',
//       clan: true,
//       friends: 50,
//     },
//     rate: 100,
//   },
//   {
//     title: 'MARIO KART NIGHT!!!',
//     category: 'games',
//     phoot: 'https://i.blogs.es/acd781/mario-kart-8-deluxe/450_1000.jpg',
//     friends: 0,
//     clan: 'Test',
//     requisits: {
//       role: 'ADMIN',
//       clan: false,
//       friends: 20,
//     },
//     rate: 5,
//   },
//   {
//     title: 'RESIDENT EVIL RUNGAME!',
//     category: 'games',
//     photo: 'https://i.blogs.es/7256c0/dwpkkgkucaef-4h/450_1000.jpg',
//     friends: 0,
//     clan: 'Test',
//     requisits: {
//       role: 'ADMIN',
//       clan: true,
//       friends: 10,
//     },
//     rate: 1,
//   },
//   {
//     title: 'CATAN ALL THE NIGHT',
//     category: 'games',
//     photo: 'https://images-na.ssl-images-amazon.com/images/I/71y%2BSsqLqVL._SL1000_.jpg',
//     friends: 0,
//     clan: 'Test',
//     requisits: {
//       role: 'ADMIN',
//       clan: true,
//       friends: 2,
//     },
//     rate: 15,
//   },
//   {
//     title: 'OLD SCHOOL GAMES!! NINTENDO!!',
//     category: 'games',
//     photo: 'https://i.imgur.com/Y9h8AuC.jpg?1',
//     friends: 0,
//     clan: 'Test',
//     requisits: {
//       role: 'ADMIN',
//       clan: true,
//       friends: 2,
//     },
//     rate: 15,
//   },
//   {
//     title: 'EXPLODING KITTENS MEETING!!',
//     category: 'games',
//     photo: 'https://target.scene7.com/is/image/Target/GUEST_70c79d54-726e-4a15-bd76-0bd263348090?wid=488&hei=488&fmt=pjpeg',
//     friends: 0,
//     clan: 'Test',
//     requisits: {
//       role: 'ADMIN',
//       clan: true,
//       friends: 2,
//     },
//     rate: 15,
//   },
// ];

// Events.create(events, (err) => {
//   if (err) { throw (err); }
//   console.log(`Created ${events.length} events`);
//   mongoose.connection.close();
// });

const Articles = require('../models/Article');

const articles = [
  {
    title: 'The new age of VR games',
    text: "In VR Games For list page, you'll find a list of all the virtual reality and augmented reality (coming soon) games contained in our database. You'll be able to uncover more about the brand-new games and stay up-to-date with what's coming up next. If you are an enthusiast gamer like me and love VR games, you want to know which games are coming soon to your favorite platform. You'll be able to search and sort to find the exact game that you enjoy playing on your platform. With a Head Mounted Display (HMD) you'll experience games in a way that you haven't felt before. Dive into the world of virtual reality gaming that will elevate your gaming experience to a whole new level. Find exclusive games for particular VR headsets, view release dates, walkthrough gameplay videos and gameplay trailers. Find the latest mobile phone and tablet VR games, latest and upcoming full game AAA titles and new reveals. Don't forget to bookmark and LIKE our Facebook page to be updated when we publish new VR game reviews and first impression articles. Enjoy browsing the site",
    photo: 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/26/1467018952-ps-vr-game.jpg?resize=480:*',
    rate: 5,
  },
  {
    title: 'The new zelda game',
    text: "Monolith Soft is known for the Xenosaga and Xenoblade series, the most recent entry being the delightful Xenoblade Chronicles 2 for the Switch, but the studio has also worked on multiple Zelda games in the past. And according to a new batch of job listings on its website, it's now hiring for another major Zelda game which could well be a follow-up to Breath of the Wild. The listings include several common game design positions such as rigging artist, effects technical artist, and character modeler, as well as more senior positions like project manager. More specific openings include main quest designer, map planner, and map modeler. These are all roles you'd expect to see in the credits of a Zelda game, of course, so they're not much to go on in terms of predicting the nature of the game. It could be a Breath of the Wild-style sandbox or it could be a more guided adventure a la Skyward Sword. That said, Monolith Soft's history with the Zelda series does suggest this mystery title will lean toward Breath of the Wild's design philosophy.Monolith worked on Skyward Sword and Breath of the Wild, and as Siliconera reported in 2017, Nintendo producer Eiji Aonuma said that while Monolith mainly contributed to the art of Skyward Sword, the studio was instrumental in shaping the world of Breath of the Wild. Monolith had worked on other Nintendo games in the past, so given its experience crafting the open-world Xenoblade games, it was an easy pick to support the most ambitious Zelda world yet.For Breath of the Wild, we've been assisted by level designers used to large game areas in order to make topographic arrangements, Aonuma said of Monolith.",
    photo: 'https://i.ytimg.com/vi/4w77mGr2dsU/maxresdefault.jpg',
    rate: 10,
  },
  {
    title: 'Mortal Kombat 11',
    text: 'eveloper Shiver has ported Mortal Kombat 11 to the Nintendo Switch, managing to fit the gore-laden carnage into a portable form. While all the general combat system makes a solid transition to handheld, both newfound issues and the impeding in-game economy hold back this specific version back.\r\n\r\nThe fighting of MK11 is, as we noted in our review, some of NetherRealm’s best. But in the move to the Nintendo Switch hardware, some concessions have been made to run on the hardware’s weaker specs.\r\n\r\nSince Mortal Kombat 11, like most fighting games, has moves that start and stop in fractions of a second, 60 frames per second is the benchmark to clear for not just fidelity but raw balance and feasibility. Even in handheld, the game happily spins along at 60 fps, only mildly hiccuping during transitions to cutscene moments like fatalities or into story mode vignettes.\r\n\r\nThe trade-off is a marked decrease in visuals, especially resolutions, lighting, and textures. Anti-aliasing is low, so characters (notably their hair) look pixelated and sometimes oddly shiny. X-ray shots seem to lack in the bone-crunching department, and overall the characters appear less detailed. Fatalities look a little cartoonier. This downgrade doesn’t affect gameplay, as it’s still easy to see Scorpion’s spear or Sub-Zero’s ice ball.\r\n\r\nOne of the main draws of Mortal Kombat 11 — its story mode — makes the leap well enough. Cutscenes are comparable in quality to their console counterpart, though the transition into fights is all the more jarring with the Switch’s muddier in-game graphics, creating a noticeable difference between “gameplay” and “movie,” as opposed to seamless segues.\r\n\r\nThe visual drop-off is most noticeable with the Krypt, which has a hazy fog cast over it to lower the draw distance and textures that look like they haven’t fully loaded. This results in the removal of one of the Krypt’s best moments: In other versions, opening a certain door leads to the player walking out and seeing the pit arena from the original Mortal Kombat, with Shang Tsung’s island cast in the moonlit background and fighters duking it out on a distant bridge. In the Switch version, a sheet of fog hides all of that.\r\nThe downgrades are understandable and honestly acceptable given the end result. Having this combat on the go, at a framerate that’s the same as my console version, is pretty fantastic. While single Joy-Con controls leave a bit to be desired (lack of buttons forces either the block or interact button to clicking in the stick), I’m rarely in a situation where it’s my only controller option. The portability of the Switch version lets me lab out combos in bed or spar with friends on planes, and the only hitch is Scorpion doesn’t look quite as pristine. That is a trade-off I’m comfortable making.\r\n\r\nWhat really holds this version back compared to others is what’s always held back the game, only amplified by the Switch. Many of MK11’s modes require an internet connection, either for a sync with the servers or a constant, steady one for some modes. This effectively negates a good chunk of single-player content for traveling fighters.\r\n\r\nBoth the Towers of Time and the Krypt demand a constant link to the internet, while klassic towers won’t dole out rewards without a connection. Even kustomization options are made “temporary” when unconnected, and tutorial rewards only sync once the Switch is reconnected. This effectively limits your single-player time to either the story mode or versus battles.\r\n\r\nThe Switch version emphasizes the issues inherent with Mortal Kombat 11’s economy, not in the grind but the way it is worked and crammed into every nook and cranny of the game. The result is a game that still boasts an incredible story mode and joyous combat, in exchange for a litany of modes that will only work provided you can find some Wi-Fi, seemingly at odds with the very appeal of a Switch version.\r\n\r\nIf the only console you own capable of playing Mortal Kombat 11 is the Switch, and you’re OK with all the limitations noted above, the game is still absolutely worth your time. There are obvious but understandable concessions made to keep the game in line, mechanically, with its console and computer counterparts, resulting in a game that feels like MK11 even if it doesn’t look as good. There are also practical use cases for this, especially for the competitive-oriented player who wants the ability to practice on the road.\r\n\r\nBut outside specific situations, there is very little to no reason to opt for this version of Mortal Kombat 11 over the others. What could have been an otherwise solid port of a modern fighting game to handheld is marred by issues unrelated to fidelity, but rather a demanding set of economic systems whose frustrations are amplified by mandatory online connectivity.',
    photo: 'https://i.ytimg.com/vi/eJy7Xb01koU/maxresdefault.jpg',
    rate: 2,
  },
];

Articles.create(articles, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${articles.length} articles`);
  mongoose.connection.close();
});
