<template>
  <div id="container">
    <div id="content">
      <form @submit.prevent="submitHandler">
        <textarea
          v-model="title"
          required
          placeholder="Title..."
          maxlength="150"
          @input="mixin_autoResize_resize"
        />
        <hr />
        <ul v-if="todos.length">
          <TodoItem
            v-for="(todo, i) of todos"
            :key="i"
            v-bind:todo="todo"
            v-on:remove-todo="removeTodo"
          />
          <li>
            <button class="add-todo" type="button" v-on:click="createTodo()">+</button>
          </li>
        </ul>
        <ul v-else>
          <li>
            <p class="text-center">No items</p>
          </li>
          <li>
            <button class="add-todo" type="button" v-on:click="createTodo()">+</button>
          </li>
        </ul>
        <div class="d-flex space-between">
          <button class="btn btn-cancel" type="button" v-on:click="showModal()">Cancel</button>
          <button class="btn btn-submit" type="submit">{{this.$route.params.id?"Update":"Add"}}</button>
        </div>
      </form>
    </div>
    <modal
      v-show="isModalVisible"
      v-bind:message="'Are you sure you to cancel?'"
      v-bind:callbackMethod="'cancel'"
      @close="closeModal"
      @cancel="goBack"
    />
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
import mixinAutoResize from "@/mixins/autoResize.js";
import Modal from "@/components/Modal.vue";
export default {
  data() {
    return {
      id: 0,
      title: "",
      todos: [],
      isModalVisible: false,
    };
  },
  mounted() {
    this.id = this.task.id;
    this.title = this.task.title;
    this.todos = this.task.todos;
  },
  components: {
    TodoItem,
    Modal,
  },
  mixins: [mixinAutoResize],
  computed: {
    task() {
      if (this.$route.params.id) {
        return this.$store.getters.taskById(+this.$route.params.id);
      } else {
        return { id: Date.now(), title: "", todos: [] };
      }
    },
  },
  methods: {
    submitHandler() {
      if (this.$route.params.id) {
        this.$store.dispatch("updateTask", {
          id: this.id,
          title: this.title,
          todos: this.todos,
        });
      } else {
        this.$store.dispatch("createTask", {
          id: this.id,
          title: this.title,
          todos: this.todos,
        });
      }

      this.$router.push("/");
    },
    removeTodo(id) {
      this.todos = this.todos.filter((el) => el.id != id);
    },
    createTodo() {
      this.todos.push({ id: Date.now(), title: "", completed: false });
    },
    goBack() {
      this.$router.push("/");
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style>
@import "../assets/styles/task.css";
@import "../assets/styles/style.css";
</style>