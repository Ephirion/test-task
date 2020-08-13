<template>
  <div>
    <nav id="navbar">
      <router-link tag="button" to="/create" class="btn btn-submit mr-15">Add</router-link>
    </nav>
    <div id="contents">
      <TaskPreview v-for="task of tasks" :key="task.id" v-bind:task="task" />
    </div>    
    <modal v-show="isModalVisible"
    v-bind:message="'Are you sure you want to delete ticket?'"
    v-bind:callbackMethod="'removeTask'"
    @close="closeModal" 
    @removeTask="removeTask"/>
  </div>  
</template>

<script>
import TaskPreview from "@/components/TaskPreview";
import Modal from "@/components/Modal.vue";
export default {
  computed: {
    tasks() {
      return this.$store.getters.tasks;
    },
  },
  components: {
    TaskPreview,
    Modal
  },
  data() {
    return {
      isModalVisible: false,
      removeTaskId: 0,
    };
  },
  methods: {
    showModal(id) {
      this.removeTaskId = id;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
      this.removeTaskId = 0;
    },
    removeTask(){      
        this.isModalVisible = false;
        this.$store.dispatch("removeTask", this.removeTaskId);
        this.removeTaskId = 0;
    }
  }
};
</script>

<style scoped>
@import "../assets/styles/list.css";
@import "../assets/styles/style.css";
</style>

