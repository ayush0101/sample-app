<template>
  <div>
    <h3>Playground Component</h3>
    <hr />
    <p>ID: {{ id }}</p>
    <p>City: {{ city }}</p>
    <p>Query Parameters: {{ qp }}</p>

    <button class="btn btn-warning" @click="navigate">Reload with id</button>
  </div>
</template>

<script>
export default {
  props: ["id", "city"],
  data() {
    return {
      qp: this.$route.query,
    };
  },
  methods: {
    navigate() {
      this.$router.push({ path: "/playground/45879" });
    },
  },
};
</script>