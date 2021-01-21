<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <span class="navbar-brand mb-0 h1">Learning Vue.js</span>
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link to="/" exact-active-class="active">
          <span class="nav-link">Home</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about" exact-active-class="active">
          <span class="nav-link">About</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/contact" exact-active-class="active">
          <span class="nav-link">Contact</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="url" exact-active-class="active">
          <span class="nav-link">Playground</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      link: "/playground",
      id: 1245,
      city: "Tumkur",
      qp: {
        lang: "kn",
        country: "india",
      },
    };
  },
  computed: {
    url() {
      return `${this.link}/${this.id}/${this.city}?${this.toQueryString}`;
    },
    toQueryString() {
      let queryString = "";
      for (const key in this.qp) {
        if (queryString.length > 0) {
          queryString += "&";
        }
        if (Object.hasOwnProperty.call(this.qp, key)) {
          queryString += `${key}=${this.qp[key]}`;
        }
      }

      return queryString;
    },
  },
};
</script>