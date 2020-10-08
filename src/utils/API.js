import axios from "axios";

// Export an object containing methods we'll use for accessing the RandomUser API
export default {
  // Gets all users
  getAllUsers: function () {
    //URL specifies to pull only by US users, name email and photo included, 50 total
    return axios.get(
      "https://randomuser.me/api/?results=50&nat=us&inc=name,email,picture"
    );
  },
};
