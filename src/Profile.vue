<template>
  <div class="page">
    <hr>
    <h3>Profile</h3>

    <div v-if="loading">
      <pulse-loader :loading="loading"></pulse-loader>
    </div>
    <form v-else>
      <div v-if="success" class="callout success">
        <h5>Information successfully updated.</h5>
      </div>
      <input type="text" placeholder="Full Name" id="fullname" v-model="fullname">
      <input type="text" placeholder="DOB" id="dob" v-model="dob">
      <textarea id="public_key" rows="6" readonly v-model="publicKey"></textarea>

      <div class="panel clearfix">
        <button v-on:click="update" class="button float-right">Update Profile</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  name: "profile",
  components: {
    PulseLoader
  },
  data() {
    return {
      fullname: "",
      dob: "",
      publicKey: "",
      loading: true,
      success: false
    };
  },
  methods: {
    fetchData() {
      this.loading = true;

      setTimeout(() => {
        var base = "http://127.0.0.1:8000";
        axios.get(base + "/information/").then(response => {
          this.loading = false;
          this.fullname = "Sigmund Isidoro";
          this.dob = "1963-02-12";
          this.publicKey = response.data.public_key;
        });
      }, 1000);
    },
    update(event) {
      this.loading = true;
      this.success = false;

      setTimeout(() => {
        this.loading = false;
        this.success = true;
      }, 1000);
    }
  },
  created() {
    this.fetchData();
  }
};
</script>
