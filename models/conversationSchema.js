const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Draft #1 My idea
const conversationSchema = new Schema({
    user: { type: String, required: true },
    date: { type: Date, default: Date.now },
    conversation: { type: String, required: true }

})

const conversations = mongoose.model("conversation", conversationSchema);

/*          If the above database code does not work, use this code below... the difference here is adding an "s" to the first argument passed in .model().  Resulting in a change to "conversations".
const conversations = mongoose.model("conversations", conversationSchema);
*/

module.exports = conversations;

/*
==================================================
*/

// Draft #2 
// Schema defines how chat messages will be stored in MongoDB
const conversationSchema = new Schema({  
    participants: [{ type: Schema.Types.ObjectId, ref: 'User'}],
  });
  

  const conversations =  mongoose.model('conversation', conversationSchema);  


  module.exports = conversations;
  
  







 
