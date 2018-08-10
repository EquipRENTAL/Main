// import { BSON } from "../../../../../Library/Caches/typescript/2.6/node_modules/@types/bson"; // no idea what this is for...
const mongoose = require("mongoose");
const Item = require("./models/itemsSchema");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/equiprent"
);

// not necessary to add a date key, it will be made automatically when adding it to the db :)
const items = [
  {
    user: "Jay G.", 
    category: "Camping",
    title: "Floating Tent",
    description: "Going camping but hate bugs? Use my floating tent!",
    image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/floatingTent.jpeg",
  },
  {
    user: "Michael R.", 
    category: "Camping",
    title: "Sky Blue Tent",
    description: "Comfortable for 2-4 people. Plus it's easy to spot this bright blue tent.",
    image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/campTent.jpg",
  },
  {
    user: "Jessica S.", 
    category: "Camping",
    title: "Luxury Tent",
    description: "Go camping in style and comfort. Set up is simple too.",
    image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/luxuryTent.jpg",
  },
  {
    user: "Jessica S.", 
    category: "Camping",
    title: "Family Tent",
    description: "Feel right at home with this oversized tent set up.",
    image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/familyTent.jpeg",
  },
  {
    user: "Ron D.", 
    category: "Camping",
    title: "Comfy Folding Chair",
    description: "This lightweight folding chair is comfortable and has plenty of back support.",
    image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/chairLow.jpg",
  },
  {
    user: "Jay G.", 
    category: "Camping",
    title: "Coolest Cooler",
    description: "This is the only cooler you need to go camping. It is the COOLEST!",
    image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/cooler.jpg",
  },
  {
    user: "Jessica S.", 
    category: "Camping",
    title: "Wooden Cooler",
    description: "Keeps your stuff cool and looks amazing too!",
    image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/coolerWood.jpg",
  },
  {
    user: "Jay G.", 
    category: "Camping",
    title: "Folding Chair",
    description: "Stay cool with this folding chair. Comes with cover, drink holder, and built-in storage bag.",
    image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/foldingChair.jpg",
  },
  {
    user: "Ron D.", 
    category: "Camping",
    title: "Tent with Folding Chairs Set",
    description: "Complete tent set. Enough room for the whole family.",
    image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/tentWithChairs.jpg",
  },
  {
    user: "Michael R.", 
    category: "Camping",
    title: "Multi-Pod Tent",
    description: "Great for camping with a group. Cool setup with 3 separate Pod Tents.",
    image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/podTent.jpg",
  },
  {
    user: "Michael R.", 
    category: "Camping",
    title: "Sturdy Cooler",
    description: "Durable Igloo Cooler that keeps your stuff colder longer.",
    image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/coolerIgloo.jpg",
  },
  {
    user: "Ron D.", 
    category: "Camping",
    title: "Small Cooler",
    description: "Easily portable Yeti Cooler. Great if you're traveling light.",
    image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/coolerYeti.jpg",
  },
  {
    user: "Jay G.", 
    category: "Sporting",
    title: "Frisbee Golf",
    description: "Super fun game and easy to carry around and play.",
    image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/frisbeeGolf.jpg",
  },
  {
    user: "Michael R.", 
    category: "Sporting",
    title: "Jumbo Jenga",
    description: "Jumbo version of the classic Jenga game.",
    image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/jumboJenga.jpg",
  },
  {
    user: "Jessica S.", 
    category: "Sporting",
    title: "Patriotic Cornhole",
    description: "Toss your beanbags and see who's the best at cornhole.",
    image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/beanbagTossUSA.jpg",
  },
  {
    user: "Ron D.", 
    category: "Sporting",
    title: "Classic Beanbag Toss",
    description: "Great game for the beach, tailgating, or just out at the park!",
    image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/beanbagToss.jpg",
  },
  {
    user: "Jay G.", 
    category: "Sporting",
    title: "Ladderball",
    description: "Test how accurate your throwing skill are with this game. Great for the family!",
    image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/ladderball.jpg",
  },
  {
    user: "Michael R.", 
    category: "Sporting",
    title: "Franklin Ladderball",
    description: "Fun to play, easy to assemble, and lightweight to boot.",
    image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/ladderball2.jpg",
  },
  {
    user: "Jessica S.", 
    category: "Sporting",
    title: "Lawn Bowling Set",
    description: "All of the fun of the bowling without the bowling alley.",
    image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/lawnBowling.jpg",
  },
  {
    user: "Jay G.", 
    category: "Sporting",
    title: "Washers Toss Game",
    description: "Fun and easy to play. Portable and no-hassle to bring around.",
    image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/washersBlueRed.jpg",
  },
  {
    user: "Ron D.", 
    category: "Sporting",
    title: "Toss Game",
    description: "Custom-built disc toss game. Fun for the whole family!",
    image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/washers.jpg",
  },
  {
    user: "Michael R.", 
    category: "Nautical",
    title: "Kayaks",
    description: "Take this pair of red kayaks (and paddles) with you next time you go the beach or lake.",
    image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/kayaksRed.jpg",
  },
  {
    user: "Jessica S.", 
    category: "Nautical",
    title: "Kite Surfing",
    description: "See what the hype is about and go kite surfing today!",
    image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/kitesurfing.jpg",
  },
  {
    user: "Ron D.", 
    category: "Nautical",
    title: "Surf the Waves In Style",
    description: "Fun cross between surfing and sailing. It's so fun!",
    image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/kitesurfYellow.jpg",
  },
  {
    user: "Jay G.", 
    category: "Nautical",
    title: "Surf's Up Dude!",
    description: "I have 4 surfboards available. Two longboards and two shortboards.",
    image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/surfboards4.jpg",
  },
  {
    user: "Jessica S.", 
    category: "Nautical",
    title: "White Surfboard",
    description: "You catch some killer waves with this surfboard!",
    image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/surfboardWhite.jpg",
  },
  {
    user: "Michael R.", 
    category: "Nautical",
    title: "Bodyboards",
    description: "Does surfing sound too initmidating? Try bodyboarding instead. Very beginner-friendly.",
    image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/bodyboards.jpg",
  },
  {
    user: "Ron D.", 
    category: "Nautical",
    title: "Bodyboard w/ Fins",
    description: "Go bodyboarding and enjoy extra speed with my swimming fins too!",
    image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/bodyboardYellow.jpg",
  },
  {
    user: "Michael R.", 
    category: "Nautical",
    title: "SUP Board",
    description: "Stand Up Paddle (SUP) Board with paddle. Super chill to use!",
    image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/standuppaddleboard.jpg",
  },
  {
    user: "Jessica S.", 
    category: "Nautical",
    title: "Standup Paddleboards",
    description: "Easy to use and very relaxing for those that just want to enjoy the scenary!",
    image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/standuppaddleboardsBlue.jpg",
  },
  {
    user: "Michael R.", 
    category: "Tools",
    title: "Compass",
    description: "Take this with you so that you won't get lost, even when there's no reception!",
    image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/compass.jpg",
  },
  {
    user: "Jessica S.", 
    category: "Tools",
    title: "Portable BBQ Grill",
    description: "Really convenient portable grill. Great for parties, camping, tailgating... pretty much anywhere!",
    image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/portableGrill.jpg",
  },
  {
    user: "Ron D.", 
    category: "Tools",
    title: "Hiking Bag",
    description: "Very durable hiking bag.",
    image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/hikingbagGreen.jpg",
  },
  {
    user: "Jay G.", 
    category: "Tools",
    title: "Dutch Oven",
    description: "This cast iron dutch oven setup is great for cooking outdoors when camping!",
    image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/dutchOvenSet.jpg",
  },
  {
    user: "Michael R.", 
    category: "Tools",
    title: "Hiking Sticks",
    description: "Use these to help you on your hike.",
    image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/hikingSticks.jpg",
  },
  {
    user: "Ron D.", 
    category: "Tools",
    title: "Charcoal Grill",
    description: "Easy to transport and clean up. Great for camping and hiking.",
    image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/portableCharcoalgrill.jpg",
  },
  {
    user: "Jay G.", 
    category: "Tools",
    title: "Charcoal/Wood Grill",
    description: "Grills evenly and works great with charcoal and/or wood!",
    image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/campingCharcoalgrill.jpg",
  },
  {
    user: "Jay G.", 
    category: "Tools",
    title: "Hiking Bags w/ Stick",
    description: "Pair of hiking bags. Comes with a walking stick too.",
    image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/hikingbagGreen.jpg",
  },
  {
    user: "Ron D.", 
    category: "Tools",
    title: "Grill",
    description: "Ideal grill to use over an open flame.",
    image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/portableFiregrill.jpg",
  }
];
// code redundant
// db.items.insertMany([
//   {user: "Michael", category: "camping", title: "Tent", description: "My tent is cool", image: "https://www.rei.com/media/6532c9d2-83c6-44a4-a5f3-5d3e066aae00?size=1020x510"}
// ])

// db.items.remove( {"_id": ObjectId("5b612b721830a1bea5505ee1")}); // not sure what this is removing


// this code first removes everything in the items collection
// then it populates the item collection with each document in this file "seedsDB"
// logs results/errors
Item
 .remove({})
 .then(() => Item.insertMany(items))
 .then(data => {
   console.log("items inserted!");//this didnt work but the items are going
   process.exit(0);
 })
 .catch(err => {
   console.error(err);
   process.exit(1);
 });