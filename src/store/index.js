import { createStore } from "vuex";
// import snackbarStore from "@/store/modules/snackbarStore";
import usersStore from "@/store/modules/usersStore";
export default createStore({
  modules: {
    // snackbarStore,
    usersStore,
  },
});
