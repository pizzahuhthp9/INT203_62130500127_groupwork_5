app.component("thumbnail", {
  template: `
    <!-- thumbnails -->
    <div class="flex flex-row flex-wrap w-screen justify-center">
      <!-- thumbnail -->
      <div v-for="(thumbnail, index) in thumbnails" :key="index" class="flex flex-col" >
        <!-- thumbnail image -->
        <img @click="show(thumbnail)" :src="thumbnail.src" alt="" class="w-56 mx-8 my-8" v-if="thumbnail.isShow">
        <!-- thumbnail description -->
        <span class="mx-10" v-if="thumbnail.isShow">
          <div>{{thumbnail.name}}</div>
          <i v-show="!thumbnail.toggle" @click="thumbnail.toggle=!thumbnail.toggle;thumbnail.like++;" class="fa fa-heart hover:text-red-300"></i>
          <i v-show="thumbnail.toggle" @click="thumbnail.toggle=!thumbnail.toggle;thumbnail.like--;" class="fa fa-heart text-red-600 hover:text-gray-400"></i>
          <span v-if="thumbnail.like > 0">{{thumbnail.like}} Like </span>
          <span v-else class="opacity-0">{{thumbnail.like}} Like </span>
        </span>
      </div>
    </div>
`,
  props: {
      thumbnails: Array
  },
});
