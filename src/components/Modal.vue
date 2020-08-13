<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <section class="modal-header">
          <slot name="header">
            <button class="action-btn hover-blue flex-end" @click="close()">&#10006;</button>
          </slot>
        </section>
        <section class="modal-body" id="modalDescription">
          <slot name="body">{{message}}</slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            <button
              type="button"
              class="btn btn-submit"
              @click="callback(callbackMethod)"
              aria-label="Close modal"
            >Yes</button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modal",
  methods: {
    close() {
      this.$emit("close");
    },
    callback(method) {
      switch (method) {
        case "removeTask":
          this.$emit("removeTask");
          break;
        case "cancel":
          this.$emit("cancel");
          break;
      }
    },
  },
  props: {
    message: String,
    callbackMethod: String,
  },
};
</script>

<style>
@import "../assets/styles/modal.css";
@import "../assets/styles/style.css";
</style>