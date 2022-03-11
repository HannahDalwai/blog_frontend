<template>
  <div v-if="blogs">
    <h2>Blogs</h2>
    <div class="blogs-container" v-if="blogs">
      <router-link
        v-for="blog of blogs"
        :key="blog._id"
        :to="{ name: 'BlogDetails', params: { id: blog._id } }"
      >
        <img :src="blog.img" :alt="blog.title" />
        {{ blog.author_name }}
      </router-link>
    </div>
  </div>
  <div v-else>Loading blogs...</div>
</template>
<script>
export default {
  data() {
    return {
      blogs: null,
    };
  },
  mounted() {
    if (localStorage.getItem("jwt")) {
      fetch("https://generic-blog-api.herokuapp.com/posts", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          this.blogs = json;
          this.blogs.forEach(async (blog) => {
            await fetch(
              "https://generic-blog-api.herokuapp.com/users/" + blog.author,
              {
                method: "GET",
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                  Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                },
              }
            )
              .then((response) => response.json())
              .then((json) => {
                blog.author_name = json.name;
              });
          });
        })
        .catch((err) => {
          alert("User not logged in");
        });
    } else {
      alert("User not logged in");
      this.$router.push({ name: "Login" });
    }
  },
};
</script>
<style>
.blogs-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-inline: auto;
  padding: 30px;
  gap: 2%;
  justify-content: stretch;
  align-items: stretch;
  flex-direction: column;
}

img {
  max-width: 50vw;
}
</style>
