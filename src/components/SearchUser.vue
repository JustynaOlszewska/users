<template>
  <div>Search user</div>
  <input type="text" name="search" id="search" v-model="user" />
</template>

<script>
import { ref, watch } from "vue";
import { useStore } from "vuex";
export default {
  name: "SearchUser",
  setup() {
    const user = ref("");
    const store = useStore();

    watch(user, async () => {
      try {
        await store.dispatch("usersStore/searchUsers", { user });
      } catch (error) {
        console.log("error", error);
      }
    });
    return {
      user,
    };
  },
};
</script>

<style></style>
