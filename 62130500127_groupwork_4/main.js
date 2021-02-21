console.log('vue is running');
const app = {
  data() {
    return {
      thumbnails: [
        {
          name: "A Pic",
          src: "images/1.jpg",
          like: 123,
          toggle: false,
          isShow: true
        },
        {
          name: "B Pic",
          src: "images/1.jpg",
          like: 0,
          toggle: false,
          isShow: true
        },
        {
          name: "B Pic",
          src: "images/1.jpg",
          like: 999,
          toggle: true,
          isShow: true
        },
        {
          name: "B Pic",
          src: "images/1.jpg",
          like: 1000,
          toggle: true,
          isShow: true
        },
        {
          name: "B Pic",
          src: "images/1.jpg",
          like: 10,
          toggle: true,
          isShow: true
        },
        {
          name: "B Pic",
          src: "images/1.jpg",
          like: 7,
          toggle: false,
          isShow: true
        },
        {
          name: "B Pic",
          src: "images/1.jpg",
          like: 9,
          toggle: false,
          isShow: true
        },
        {
          name: "B Pic",
          src: "images/1.jpg",
          like: 285,
          toggle: true,
          isShow: true
        },
        {
          name: "C Pic",
          src: "images/1.jpg",
          like: 228,
          toggle: false,
          isShow: true
        },
        {
          name: "C Pic",
          src: "images/1.jpg",
          like: 299,
          toggle: false,
          isShow: true
        },
        {
          name: "C Pic",
          src: "images/1.jpg",
          like: 9999,
          toggle: false,
          isShow: true
        },
        {
          name: "D Pic",
          src: "images/1.jpg",
          like: 123456,
          toggle: true,
          isShow: true
        },
      ],
      searching: "",
      isShowPreview: false,
      previewSrc: "",
      isNoPhoto: false
    };
  },
  methods: {
    search(searching){
      // console.log(searching)
      let photoAmout = this.thumbnails.length;
      let i = 0;
      this.thumbnails.forEach(thumbnail => {
        if (thumbnail.name.toLowerCase().includes(searching.toLowerCase())) {
          thumbnail.isShow = true;
          this.isNoPhoto = false;
        }else{
          thumbnail.isShow = false;
          i++;
        }
      });
      if (photoAmout == i) {
        this.isNoPhoto = true;
      }

    },
    show(thumbnail){
      this.isShowPreview = true;
      this.previewSrc = thumbnail.src;
    }
  },
  beforeUpdate() {
    this.search(this.searching);
  },
};
Vue.createApp(app).mount("#app");
