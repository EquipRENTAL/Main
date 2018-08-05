import { BSON } from "../../../../../Library/Caches/typescript/2.6/node_modules/@types/bson";

const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/reactreadinglist"
  );

const items = [
    (user: "Michael", category: "camping", title: "Tent", description: "My tent is cool", image: "https://www.rei.com/media/6532c9d2-83c6-44a4-a5f3-5d3e066aae00?size=1020x510")

  ]

db.items.insertMany([
  {user: "Michael", category: "camping", title: "Tent", description: "My tent is cool", image: "https://www.rei.com/media/6532c9d2-83c6-44a4-a5f3-5d3e066aae00?size=1020x510"}
])

db.items.remove( {"_id": ObjectId("5b612b721830a1bea5505ee1")});

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