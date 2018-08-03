import { BSON } from "../../../../../Library/Caches/typescript/2.6/node_modules/@types/bson";

const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/reactreadinglist"
  );

const items = [
    {user: "Jessica Son", role: "Renter", category: "Camping", item: "Tent", description: "My tent is available!"},
    {user: "Michael", role: "renter", category: "Camping", item: "tent", description: "This is my favorite tent"}
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