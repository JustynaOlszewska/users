<template>
  <div class="wrapper">
    <h1>List of users</h1>
    <SearchUser />
    <ul>
      <li v-for="user in arrayToTemplate" :key="user.firstName">
        <router-link :to="{ path: `/singleUSers/${user.id}` }"
          >{{ user.firstName }} {{ user.lastName }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { onMounted, computed } from "vue";
import SearchUser from "../SearchUser.vue";

export default {
  name: "ListUsers",
  components: {
    SearchUser,
  },
  setup() {
    const store = useStore();
    const usersList = computed(() =>
      JSON.parse(JSON.stringify(store.getters["usersStore/getUsersList"]))
    );
    const searchUsers = computed(() =>
      JSON.parse(JSON.stringify(store.getters["usersStore/searchUser"]))
    );
    const arrayToTemplate = computed(() =>
      searchUsers.value.length > 0 ? searchUsers.value : usersList.value
    );
    onMounted(async () => {
      try {
        await store.dispatch("usersStore/fetchUsersList");
      } catch (error) {
        console.log("error", error);
      }
    });
    return { arrayToTemplate, searchUsers };
  },
};
</script>

<style scoped></style>
