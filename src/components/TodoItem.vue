<template>
  <li>
    <div class="todo-item-container">
      <input type="checkbox" v-on:change="todo.completed=!todo.completed" class="ml-0" />
      <textarea v-model="todo.title" maxlength="150" 
      @input="mixin_autoResize_resize" required placeholder="ToDo title..."/>
      <button class="action-btn hover-red" v-on:click="$emit('remove-todo', todo.id)">&times;</button>
    </div>
  </li>
</template>

<script>
import mixinAutoResize from "@/mixins/autoResize.js";
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: Number,
  },
  mixins: [mixinAutoResize]
};
</script>
