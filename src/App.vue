<template>
  <div class="container">
    <div class="top-bar">
      <ul class="dropdown menu">
        <li>
          <router-link to="/">Login</router-link>
        </li>
        <li>
          <router-link to="/register">Register</router-link>
        </li>
        <li>
          <router-link to="/profile">Profile</router-link>
        </li>
      </ul>
    </div>
    <h1>
      <icon name="id-card" scale="3"></icon>
      <span>Refugee Portal</span>
    </h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  mounted() {
    $(document).foundation();
  }
};
</script>

<style scoped>
.top-bar,
.top-bar ul {
  background-color: #f9f9f9;
}

.router-link-exact-active {
  font-weight: bold;
}
</style>

