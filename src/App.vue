<template>
  <div :class="$style.container">
    <h1 :class="$style.header">TODO</h1>
    <TodoList />
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    TodoList,
  },
  computed: {
    todos() {
      return this.$store.getters.getTodos
    }
  }
};
</script>

<style module>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400;500;600&display=swap');

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  font-family: 'Josefin Sans', sans-serif;
}

body {
  display: flex;
  justify-content: center;
  background-color: #171823;
  color: #9fa1b8;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

.container {
  margin-top: 4em;
  width: 90vw;
}

.container > .header {
  font-size: 4rem;
  letter-spacing: 10px;
  margin-bottom: 1em;
}

@media (min-width: 1025px) {
  .container {
    width: 40vw;
  }
}
</style>
