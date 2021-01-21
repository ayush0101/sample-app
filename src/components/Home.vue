<template>
  <div>
    <h3>Home Component</h3>
    <hr />
    <p>{{ qp }}</p>

    <button class="btn btn-primary" @click="navigate">
      Take me to Contact
    </button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      qp: this.$route.query,
    };
  },
  methods: {
    navigate() {
      //navigate to /contact
      this.$router.push({ path: "/contact" });
    },
  },
};
</script>