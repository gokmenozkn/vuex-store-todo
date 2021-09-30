<template>
  <li
    :class="item.item"
    v-for="(todo, ind) in filteredTodos"
    :key="ind"
    @mouseover="hovered = todo.id"
    @mouseout="hovered = null"
  >
    <div :class="item.flex">
      <div :class="item.icon" @click="endTask(todo.id)">
        <font-awesome-icon
          :style="circleStyle"
          v-show="!todo.completed"
          :icon="['far', 'circle']"
        />
        <font-awesome-icon
          :style="style"
          v-show="todo.completed"
          :icon="['fas', 'check-circle']"
        />
      </div>
      <div v-if="todo.completed" :class="[item.completed, item.wrapper]">
        <div>
          {{ todo.title }}
        </div>
        <font-awesome-icon
          @click="removeTodo(todo.id)"
          v-show="hovered === todo.id"
          :class="item.close_icon"
          :icon="['far', 'window-close']"
        />
      </div>
      <div v-else :class="item.wrapper">
        <div>
          {{ todo.title }}
        </div>
        <font-awesome-icon
          @click="removeTodo(todo.id)"
          v-show="hovered === todo.id"
          :icon="['far', 'window-close']"
          :class="item.close_icon"
        />
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "TodoListItem",
  props: {
    title: String,
  },
  data() {
    return {
      style: {
        color: "#55DDFF",
      },
      circleStyle: {
        color: "#979797",
      },
      isCrossActive: "none",
      hovered: null,
    };
  },
  computed: {
    filteredTodos() {
      const { data, FILTER_MAP, filter } = this.$store.state;
      return data.filter(FILTER_MAP[filter]);
    },
  },
  methods: {
    endTask(id) {
      this.$store.commit("completeTodo", id);
    },
    removeTodo(id) {
      this.$store.commit("removeTodo", id);
    },
  },
};
</script>

<style module="item">
.item {
  font-size: 1.8rem;
  font-weight: 600;
  padding: 0.8em 1em;
}

.item + .item {
  border-top: 1px solid #2e3046;
}

.icon {
  margin-right: 1em;
  font-size: 2.4rem;
  cursor: pointer;
}

.flex {
  display: flex;
  align-items: center;
}

.completed {
  color: #4d5067;
  text-decoration: line-through;
}

.wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.close_icon {
  cursor: pointer;
}
</style>