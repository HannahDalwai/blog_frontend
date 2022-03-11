<template>
  <Navbar />
  <main>
    <router-view :key="$route.fullPath" />
  </main>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar },
};
