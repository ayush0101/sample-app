<template>
  <div>
    <h3>Playground Component</h3>
    <hr />
    <p>ID: {{ id }}</p>
    <p>City: {{ city }}</p>
  </div>
</template>

<script>
export default {
  props: ["id", "city"],
};
</script>