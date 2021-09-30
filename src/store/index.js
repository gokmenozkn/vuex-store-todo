import { createStore } from "vuex";

const todos = [
  {
    id: 1,
    title: "Go workout",
    completed: false,
  },
  {
    id: 2,
    title: "Do laundry",
    completed: false,
  },
  {
    id: 3,
    title: "Cook food",
    completed: false,
  },
];

const store = createStore({
  state() {
    return {
      data: todos,
      filter: "All",
      FILTER_MAP: {
        All: () => true,
        Active: (todo) => !todo.completed,
        Completed: (todo) => todo.completed,
      },
    };
  },
  mutations: {
    newtodo(state, task) {
      state.data = [task, ...state.data];
    },
    completeTodo(state, id) {
      var found = state.data.find((item) => item.id === id);
      if (found) {
        found.completed = !found.completed;
      }
    },
    changeFilter(state, name) {
      state.filter = name;
    }
  },
  getters: {
    activeTodosCount(state) {
      return state.data.filter((todo) => !todo.completed).length;
    },
    getFilterNames(state) {
      return Object.keys(state.FILTER_MAP);
    },
  },
});

export default store;