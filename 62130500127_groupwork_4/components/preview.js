app.component("preview",{
    template:/*html*/`
        <!-- thumbnail preview -->
        <div class="h-96 w-screen bg-black flex justify-center" v-show="isShowPreview">
        <img :src="previewSrc">
        <div @click="this.isShowPreview=false" class="w-10 h-10 absolute bg-red-400 right-3.5 mt-3.5"></div>
      </div>
    `,
    props:{
        src: String,
        isShowPreview: Boolean
    }
})