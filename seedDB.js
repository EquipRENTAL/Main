import { BSON } from "../../../../../Library/Caches/typescript/2.6/node_modules/@types/bson";

const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/reactreadinglist"
  );
  
const itemSchema = new Schema({
    user: { type: String, required: true },
    category: {type: String, required: true },
    title: {type: String, required: true},
    description: String,
    image: { type: String, required: true},
    date: { type: Date, default: Date.now }
   });

const items = [

  //Camping Items
  {user: "Jay G.", 
  category: "Camping",
  title: "Floating Tent",
  description: "Going camping but hate bugs? Use my floating tent!",
  image: "floatingTent.jpeg",
  date: ""
  },

  {user: "Michael R.", 
  category: "Camping",
  title: "Sky Blue Tent",
  description: "Comfortable for 2-4 people. Plus it's easy to spot this bright blue tent.",
  image: "campTent.jpg",
  date: ""
  },

  {user: "Jessica S.", 
  category: "Camping",
  title: "Luxury Tent",
  description: "Go camping in style and comfort. Set up is simple too.",
  image: "luxuryTent.jpg",
  date: ""
  },

  {user: "Jessica S.", 
  category: "Camping",
  title: "Family Tent",
  description: "Feel right at home with this oversized tent set up.",
  image: "familyTent.jpeg",
  date: ""
  },

  {user: "Ron D.", 
  category: "Camping",
  title: "Comfy Folding Chair",
  description: "This lightweight folding chair is comfortable and has plenty of back support.",
  image: "chairLow.jpg",
  date: ""
  },

  {user: "Jay G.", 
  category: "Camping",
  title: "Coolest Cooler",
  description: "This is the only cooler you need to go camping. It is the COOLEST!",
  image: "cooler.jpg",
  date: ""
  },

  {user: "Jessica S.", 
  category: "Camping",
  title: "Wooden Cooler",
  description: "Keeps your stuff cool and looks amazing too!",
  image: "coolerWood.jpg",
  date: ""
  },

  {user: "Jay G.", 
  category: "Camping",
  title: "Folding Chair with Cover",
  description: "Stay cool with this folding chair. Comes with cover, drink holder, and built-in in storage bag with zipper",
  image: "foldingChair.jpg",
  date: ""
  },

  //Outdoor Sporting Goods Items
  {user: "Jay G.", 
  category: "Sporting",
  title: "Frisbee Golf",
  description: "Super fun game and easy to carry around and play.",
  image: "frisbeeGolf.jpg",
  date: ""
  },

  {user: "Michael R.", 
  category: "Sporting",
  title: "Jumbo Jenga",
  description: "Jumbo version of the classic Jenga game.",
  image: "jumboJenga.jpg",
  date: ""
  },

  {user: "Jessica S.", 
  category: "Sporting",
  title: "Patriotic Cornhole",
  description: "Toss your beanbags and see who's the best at cornhole.",
  image: "beanbagTossUSA.jpg",
  date: ""
  },

  {user: "Ron D.", 
  category: "Sporting",
  title: "Classic Beanbag Toss",
  description: "Great game for the beach, tailgating, or just out at the park!",
  image: "beanbagToss.jpg",
  date: ""
  },

  {user: "Jay G.", 
  category: "Sporting",
  title: "Ladderball",
  description: "Test how accurate your throwing skill are with this game. Great for the family!",
  image: "ladderball.jpg",
  date: ""
  },

  {user: "Michael R.", 
  category: "Sporting",
  title: "Franklin Ladderball Setup",
  description: "Fun to play, easy to assemble, and lightweight to boot.",
  image: "ladderball2.jpg",
  date: ""
  },

  {user: "Jessica S.", 
  category: "Sporting",
  title: "Lawn Bowling Set",
  description: "All of the fun of the bowling without the bowling alley.",
  image: "lawnBowling.jpg",
  date: ""
  },

  {user: "Jay G.", 
  category: "Sporting",
  title: "Washers Toss Game",
  description: "Fun and easy to play. Portable and no-hassle to bring around.",
  image: "washersBlueRed.jpg",
  date: ""
  },

  {user: "Ron D.", 
  category: "Sporting",
  title: "Toss Game",
  description: "Custom-built disc toss game. Fun for the whole family!",
  image: "washers.jpg",
  date: ""
  },

  //Nautical Items
  {user: "Michael R.", 
  category: "Nautical",
  title: "Kayaks",
  description: "Take this pair of red kayaks (and paddles) with you next time you go the beach or lake.",
  image: "kayaksRed.jpg",
  date: ""
  },

  {user: "Jessica S.", 
  category: "Nautical",
  title: "Kite Surfing",
  description: "See what the hype is about and go kite surfing today!",
  image: "kitesurfing.jpg",
  date: ""
  },

  {user: "Ron D.", 
  category: "Nautical",
  title: "Surf the Waves In Style",
  description: "Fun cross between surfing and sailing. It's so fun!",
  image: "kitesurfYellow.jpg",
  date: ""
  },

  {user: "Jay G.", 
  category: "Nautical",
  title: "Surf's Up Dude!",
  description: "I have 4 surfboards available. Two longboards and two shortboards.",
  image: "surfboards4.jpg",
  date: ""
  },

  {user: "Jessica S.", 
  category: "Nautical",
  title: "White Surfboard",
  description: "You catch some killer waves with this surfboard!",
  image: "surfboardWhite.jpg",
  date: ""
  },

  {user: "Michael R.", 
  category: "Nautical",
  title: "Bodyboards",
  description: "Does surfing sound too initmidating? Try bodyboarding instead. Very beginner-friendly.",
  image: "bodyboards.jpg",
  date: ""
  },

  {user: "Ron D.", 
  category: "Nautical",
  title: "Bodyboard w/ Fins",
  description: "Go bodyboarding and enjoy extra speed with my swimming fins too!",
  image: "bodyboardYellow.jpg",
  date: ""
  },

  {user: "Michael R.", 
  category: "Nautical",
  title: "SUP Board",
  description: "Stand Up Paddle (SUP) Board with paddle. Super chill to use!",
  image: "standuppaddleboard.jpg",
  date: ""
  },

  {user: "Jessica S.", 
  category: "Nautical",
  title: "Standup Paddleboards",
  description: "Easy to use and very relaxing for those that just want to enjoy the scenary!",
  image: "standuppaddleboardsBlue.jpg",
  date: ""
  },

  //Tools
  {user: "Michael R.", 
  category: "Tools",
  title: "Compass",
  description: "Take this with you so that you won't get lost, even when there's no reception!",
  image: "compass.jpg",
  date: ""
  },

  {user: "Jessica S.", 
  category: "Tools",
  title: "Portable BBQ Grill",
  description: "Really convenient portable grill. Great for parties, camping, tailgating... pretty much anywhere!",
  image: "portableGrill.jpg",
  date: ""
  },

  {user: "Ron D.", 
  category: "Tools",
  title: "Hiking Bag",
  description: "Very durable hiking bag.",
  image: "hikingbagGreen.jpg",
  date: ""
  },

  {user: "Jay G.", 
  category: "Tools",
  title: "Dutch Oven",
  description: "Yeah, there is such a thing as a dutch oven for real. This cast iron setup is great for cooking outdoors when camping!",
  image: "dutchOven.jpg",
  date: ""
  },

]

db.items.insertMany([
  {user: "Jessica Son", role: "Renter", category: "Camping", item: "Tent", description: "My tent is available!"},
  {user: "Michael", role: "renter", category: "Camping", item: "tent", description: "This is my favorite tent"}
])

db.items
 .remove({})
 .then(() => db.items.insertMany(items))
 .then(data => {
   console.log(data.result.n + " items inserted!");
   process.exit(0);
 })
 .catch(err => {
   console.error(err);
   process.exit(1);
 });