<template>
  <div :class="$style.container">
    <div :class="$style.count">{{ activeTodos }} items left</div>
    <div :class="$style.mid">
      <div :key="name" v-for="name in FILTER_NAMES" @click="changeFilter(name)">
        <span v-if="name === filter" :class="$style.active">{{ name }}</span>
        <span v-else>{{ name }}</span>
      </div>
    </div>
    <div :class="$style.right" @click="clearCompleted">Clear Completed</div>
  </div>
</template>

<script>
export default {
  name: "TodoListFilters",
  computed: {
    FILTER_NAMES() {
      return this.$store.getters.getFilterNames;
    },
    filter() {
      return this.$store.state.filter;
    },
    activeTodos() {
      return this.$store.getters.activeTodosCount;
    },
  },
  methods: {
    changeFilter(name) {
      this.$store.commit("changeFilter", name);
    },
    clearCompleted() {
      this.$store.commit("clearCompleted");
    },
  },
};
</script>

<style scoped module>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
  padding: 1em;
  font-weight: 600;
  color: #5b5e7e;
  border-top: 1px solid #2e3046;
}
.mid {
  display: none;
  align-items: center;
  gap: 1em;
}

.mid > div {
  cursor: pointer;
}

.mid > div:hover {
  color: #fff;
}

.right {
  cursor: pointer;
}

.right:hover {
  color: #fff;
}

.active {
  color: #3a7cfd;
}

@media (min-width: 960px) {
  .container {
    justify-content: space-between;
    align-items: center;
  }
  .mid {
    display: flex;
  }
}
</style>