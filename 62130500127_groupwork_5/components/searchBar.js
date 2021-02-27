console.log('search-bar')
app.component("search-bar",{
    template: /*html*/`
    <!-- search bar -->
    <div class="m-8 w-screen flex justify-center">
      <!-- input bar -->
      <div class="border border-gray-400 w-5/12 rounded-l-sm">
        <input type="text" class="w-full focus:outline-none p-1.5" placeholder=" Search" v-model="searching">
      </div>
      <!-- search button -->
      <button type="submit" class="w-24 h-10 bg-gray-200 rounded-r-sm border border-gray-400"> Search </button>
    </div>`,
    data() {
        return {
            searching: ""
        }
    },
    updated() {
        this.$emit("search", this.searching);
    },
})