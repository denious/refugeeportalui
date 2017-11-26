<template>
  <div class="page">
    <hr>
    <h3>Login</h3>

    <form>
      <input type="text" placeholder="Username" id="username" v-model="username">
      <input type="password" placeholder="Password" id="password" class="password">
      <div class="panel clearfix">
        <router-link v-bind:to="'profile'" class="button float-right">Login</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "login",
  data() {
    return {
      username: ""
    };
  },
  methods: {
    login(event) {
      var base = "http://127.0.0.1:8000";
      axios.get(base + "/registration/register/").then(response => {
        this.username = response.data.response;
      });
    }
  }
};
</script>
