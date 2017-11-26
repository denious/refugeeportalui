<template>
  <div class="page">
    <hr>
    <h3>Register</h3>

    <div v-if="success" class="callout success">
      <h5>Registation successful.</h5>
      <p>Proceed to the
        <router-link to="/profile">user's profile</router-link> to update their private information.
      </p>
    </div>
    <form v-else>
      <input type="text" placeholder="Username" id="username" v-model="username">
      <input type="password" placeholder="Password" id="password" v-model="password">

      <div class="panel clearfix">
        <button v-on:click="register" class="button float-right">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "register",
  data() {
    return {
      username: "",
      password: "",
      success: false
    };
  },
  methods: {
    register(event) {
      var base = "http://127.0.0.1:8000";
      axios.get(base + "/registration/register/").then(response => {
        this.success = true;
      });
    }
  }
};
</script>
