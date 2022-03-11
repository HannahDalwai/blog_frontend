<template>
  <nav id="nav" :class="{ active: isActive }">
    <router-link @click="toggleNav" to="/">Home</router-link>
    <!-- <router-link @click="toggleNav" to="/about">About</router-link> -->

    <router-link @click="toggleNav" :to="{ name: 'Blogs' }">Blogs</router-link>
    <router-link @click="toggleNav" :to="{ name: 'CreateBlog' }"
      >Create Blog</router-link
    >
    <router-link @click="logout" class="logout" :to="{ name: 'Home' }"
      >Log out</router-link
    >
    <router-link @click="toggleNav" :to="{ name: 'Login' }">Login</router-link>
    <router-link @click="toggleNav" :to="{ name: 'Register' }"
      >Register</router-link
    >
  </nav>
  <button id="nav-btn" @click="toggleNav">
    <i className="fas fa-bars"></i>
  </button>
</template>
<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleNav() {
      this.isActive = !this.isActive;
    },
    logout() {
      localStorage.clear();
      this.toggleNav;
    },
  },
};
</script>