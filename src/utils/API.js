import axios from "axios";

// Export an object containing the search method to pull 50 users,
// including their name, email, and photo
export default {
  fetchUsers: function () {
    return axios.get(
      "https://randomuser.me/api/?results=50&nat=us&inc=name,email,gender,phone,picture"
    );
  },
};
