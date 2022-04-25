import { UsersService } from "../../services/usersService";
const state = {
  usersList: [],
  searchUser: [],
};

const getters = {
  getUsersList(state) {
    return state.usersList;
  },
  searchUser(state) {
    return state.searchUser;
  },
};

const actions = {
  fetchUsersList: async (context) => {
    const usersService = new UsersService();
    try {
      const usersFromApi = await usersService.getUsersList();
      context.commit("SET_USERS_LIST", usersFromApi.data.data);
    } catch (e) {
      Promise.reject(e);
    }
  },
  searchUsers: async (context, payload) => {
    try {
      context.commit("SEARCH_USERS_LIST", payload);
    } catch (e) {
      Promise.reject(e);
    }
  },
};

const mutations = {
  SET_USERS_LIST: (state, users) => {
    if (state.usersList.length <= 0) {
      users.forEach((user) => {
        state.usersList = [
          ...state.usersList,
          { firstName: user.first_name, lastName: user.last_name, id: user.id },
        ];
      });
    }
  },
  SEARCH_USERS_LIST: (state, letters) => {
    state.searchUser = state.usersList.filter(
      (element) =>
        (element.firstName
          .toUpperCase()
          .includes(letters.user.value.toUpperCase()) ||
          element.lastName
            .toUpperCase()
            .includes(letters.user.value.toUpperCase())) &&
        element
    );
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
