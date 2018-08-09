import axios from "axios";

export default {
  // Gets all items
  getItems: function(category) {
    return axios.get("/api/by-category/" + category);
  },
  // Gets the item with the given id
  getOne: function(id) {
    return axios.get("/api/" + id);
  },
  // Deletes the item with the given id
  deleteItems: function(id) {
    return axios.delete("/api/" + id);
  },
  // Saves a item to the database
  saveItems: function(itemData) {
    return axios.post("/api/", itemData);
  },
  getUserData: function(id) {
    return axios.get("/api/users/" + id);
  }
  // add routes for user data,
};
