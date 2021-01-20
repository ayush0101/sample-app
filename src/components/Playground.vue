<template>
  <div>
    <h3>Playground Component</h3>
    <hr />
    <p>ID: {{ id }}</p>
    <p>City: {{ city }}</p>
    <p>Query Parameters: {{ qp }}</p>
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
};
</script>