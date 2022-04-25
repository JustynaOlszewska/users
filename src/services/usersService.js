import axios from "axios";

export class UsersService {
  async getUsersList() {
    const options = {
      method: "get",
      url: "https://reqres.in/api/users?page=2",
    };

    try {
      const response = await axios(options);
      return Promise.resolve(response);
    } catch (e) {
      return Promise.reject(e);
    }
  }
}
