<template>
  <form @submit.prevent="newTodo(task)">
    <input
      v-model="task"
      type="text"
      placeholder="Create a new todo..."
    />
  </form>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
  name: "CreateTodo",
  data() {
    return {
      task: "",
    };
  },
  methods: {
    newTodo(task) {
      if (task === "") return;
      const newItem = {
        id: uuidv4(),
        completed: false,
        title: task,
      };
      this.$store.commit("newtodo", newItem);
      this.task = "";
    },
  },
};
</script>

<style scoped>
form {
  margin-bottom: 2.5em;
}
input {
  background-color: #25273c;
  border: none;
  width: 100%;
  padding: 0.8em 1.5em;
  font-weight: bold;
  outline: none;
  color: #9fa1b8;
  font-size: 1.8rem;
}

input::placeholder {
  font-size: 1.8rem;
  font-weight: 200;
  color: #767992;
}
</style>
