<template>
  <div v-if="blog">
    <div class="blog">
      <img class="blog-image neu-border" :src="blog.img" :alt="blog.title" />
      <div class="blog-details">
        <h2>{{ blog.title }}</h2>
        <h4>{{ blog.author_name }} - {{ blog.date }}</h4>
        <p>{{ blog.body }}</p>
      </div>
    </div>
  </div>
  <div v-else>Loading the blog...</div>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      blog: null,
    };
  },
  mounted() {
    fetch("https://generic-blog-api.herokuapp.com/posts/" + this.id, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((response) => response.json())
      .then(async (json) => {
        this.blog = json;
        await fetch(
          "https://generic-blog-api.herokuapp.com/users/" + json.author,
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
            this.blog.author_name = json.name;
          });
      });
  },
};
</script>
