<template>
  <div class="task-block">
    <div class="task-header">
      <span>{{task.title}}</span>
      <div class="float-right">
        <router-link tag="button" :to="'/update/'+task.id" class="action-btn hover-blue">&#9998;</router-link>
        <button class="action-btn hover-red" @click="showModal(task.id)">&#10006;</button>
      </div>
    </div>
    <hr />
    <div>
      <ul v-if="task.todos.length">
        <li v-for="(todo, i) in task.todos.slice(0,5)" :key="i">
          <span>
            <input type="checkbox" v-bind:checked="todo.completed" disabled class="ml-0" />
            {{todo.title}}
          </span>
        </li>
        <li v-if="task.todos.length > 5"><p class="text-center">And {{task.todos.length-5}} more</p></li>
      </ul>
      <p v-else class="text-center">No items</p>
    </div>    
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  } 
};
</script>

<style scoped>
@import "../assets/styles/taskPreview.css";
@import "../assets/styles/style.css";
</style>