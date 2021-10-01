<template>
  <CreateTodo />
  <ul :class="list.list">
    <TodoListItem />
    <li>
      <TodoListFilters />
    </li>
  </ul>
  <div :class="list.filters">
    <div :key="name" v-for="name in FILTER_NAMES" @click="changeFilter(name)">
      <span v-if="name === filter" :class="list.active">{{ name }}</span>
      <span v-else>{{ name }}</span>
    </div>
  </div>
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
  computed: {
    FILTER_NAMES() {
      return this.$store.getters.getFilterNames;
    },
    filter() {
      return this.$store.state.filter;
    },
  },
  methods: {
    changeFilter(name) {
      this.$store.commit("changeFilter", name);
    },
  }
};
</script>

<style module="list">
.list {
  background-color: #25273D;
  border-radius: 0.5rem;
  box-shadow: 1px 5px 17px 2px rgba(0,0,0,0.64);
}

.filters {
  display: flex;
  justify-content: center;
  gap: 2em;
  font-size: 1.4rem;
  padding: 1em;
  font-weight: 600;
  color: #5b5e7e;
  background-color: #25273D;
  border-radius: 0.5rem;
  margin-top: 1em;
}

.active {
  color: #3a7cfd;
}

@media (min-width: 960px) {
  .filters {
    display: none;
  }
}
</style>
