const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const messageSchema = new Schema({
    conversationId: {
        type: Schema.Types.ObjectId,
        required: true
      },
      message: {
        type: String,
        required: true
      },
      author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    },
    {
      timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
    });

const messages = mongoose.model("message", messageSchema);

/*          If the above database code does not work, use this code below... the difference here is adding an "s" to the first argument passed in .model().  Resulting in a change to "conversations".
const conversations = mongoose.model("conversations", conversationSchema);
*/

module.exports = messages;