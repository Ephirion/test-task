export default {
    methods: {
        mixin_autoResize_resize(event) {
            event.target.style.height = "auto";
            event.target.style.height = `${event.target.scrollHeight+5}px`;
            console.log(event.target.scrollHeight);
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.$el.setAttribute("style", "height",
                `${this.$el.scrollHeight+5}px`);
        });
    }
};