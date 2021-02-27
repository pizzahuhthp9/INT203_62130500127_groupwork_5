app.component("preview",{
    template:/*html*/`
        <!-- thumbnail preview -->
        <div class="h-96 w-screen bg-black flex justify-center">
        <img :src="src">
        <div @click="close" class="w-10 h-10 absolute bg-red-400 right-3.5 mt-3.5"></div>
      </div>
    `,
    props:{
        src: String,
    },
    methods: {
        close(){
            this.$emit('close', false);
        }
    },
})