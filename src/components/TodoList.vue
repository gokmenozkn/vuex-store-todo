<template>
  <CreateTodo />
  <ul :class="list.list">
    <TodoListItem />
    <li>
      <TodoListFilters />
    </li>
  </ul>
</template>

<script>
import TodoListItem from "@/components/TodoListItem.vue";
import CreateTodo from "@/components/CreateTodo";
import TodoListFilters from "@/components/TodoListFilters"

export default {
  name: "TodoList",
  components: {
    CreateTodo,
    TodoListItem,
    TodoListFilters
  },
};
</script>

<style module="list">
.list {
  background-color: #25273D;
}
</style>
