<template>
  <div class="page">
    <hr>
    <h3>Register</h3>

    <div v-if="loading">
      <pulse-loader :loading="loading"></pulse-loader>
    </div>
    <div v-else>
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
  </div>
</template>

<script>
import axios from "axios";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  name: "register",
  components: {
    PulseLoader
  },
  data() {
    return {
      username: "",
      password: "",
      loading: false,
      success: false
    };
  },
  methods: {
    register(event) {
      this.loading = true;

      setTimeout(() => {
        var base = "http://127.0.0.1:8000";
        axios.get(base + "/registration/register/").then(response => {
          this.loading = false;
          this.success = true;
        });
      }, 1000);
    }
  }
};
</script>
