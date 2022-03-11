<template>
  <form @submit.prevent="createBlog" class="form neu-border">
    <h2 class="form-heading">Create a blog</h2>
    <input
      class="form-input neu-border-inset"
      type="text"
      v-model="title"
      placeholder="Title"
      required
    />
    <input
      class="form-input neu-border-inset"
      type="text"
      v-model="img"
      placeholder="Blog Image"
      required
    />
    <textarea
      class="form-input neu-border-inset"
      type="text"
      v-model="body"
      placeholder="Body"
      required
    ></textarea>

    <button type="submit" class="form-btn neu-border">Create Blog</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      body: "",
      img: "",
    };
  },
  methods: {
    createBlog() {
      if (!localStorage.getItem("jwt")) {
        alert("User not logged in");
        return this.$router.push({ name: "Login" });
      }
      fetch("https://generic-blog-api.herokuapp.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: this.title,
          body: this.body,
          img: this.img,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          alert("Post Created");
          this.$router.push({ name: "Blogs" });
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script>