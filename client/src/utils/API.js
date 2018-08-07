import axios from "axios";

export default {
  // Gets all books
  getItems: function() {
    return axios.get("http://localhost:3001/api/");
  },
  // Gets the book with the given id
  getOne: function(id) {
    return axios.get("http://localhost:3001/api/" + id);
  },
  // Deletes the book with the given id
  deleteItems: function(id) {
    return axios.delete("http://localhost:3001/api/" + id);
  },
  // Saves a book to the database
  saveItems: function(bookData) {
    return axios.post("http://localhost:3001/api/", bookData);
  },
  loginPassport: function () {
    console.log("this is a login function");
    // axios.post('/login');
  },
  logoutPasport: function () {
    console.log("this is a logout function");
    // the following has to be a get request to the backend
    // the backend will take care of "logging out"
    // axios.get('http://locahost:3001/logout')

  },
  signUpPassport: function (email, password) {
    console.log("this is a signup function");
    axios.post('http://localhost:3001/signup' + { email, password } );
  },
  connectLocal: function () {
    // this function is to attach social media accounts to current local account
    // may not be necessary but will keep just in case.
    console.log("this is to connect other accounts");
    // axios.post('http://localhost:3001/connect/local');
  }

};
