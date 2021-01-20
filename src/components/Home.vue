<template>
  <div>
    <h3>Home Component</h3>
    <hr />
    <p>{{ qp }}</p>
  </div>
</template>


<script>
export default {
  data() {
    return {
      qp: this.$route.query,
    };
  },
};
</script>