<template>
  <div class="view res-width lightbox">
    <div class="d-flex">
        <p class="ctlbtn text-center mr-auto" @click.self="prevLightbox">Previous Image</p>
        <p class="ctlbtn text-center mx-auto" @click.self="closeLightbox">Close Image</p>
        <p class="ctlbtn text-center ml-auto" @click.self="nextLightbox">Next Image</p>
    </div>
    <h5 class="text-center" v-if="photo.caption">"{{ photo.caption }}"</h5>
    <h6 class="text-center" v-if="photo.location">{{ photo.location }}</h6>
    <h6 class="text-center" v-if="photo.products">{{ photo.products }}</h6>
    <h6 class="text-center" v-if="photo.credit">{{ photo.credit }}</h6>
    <img class="w-100" :src="photoUrl(photo.filename)">
  </div>
</template>

<script>
import photos from '@/photos.json';
export default {
  name: 'Photo',
  data() {
    return {
      photos,
    };
  },
  computed: {
    photo() {
      return this.photos.find((photo) => {
        return photo.id === Number(this.$route.params.id);
      });
    },
  },
  methods: {
    photoUrl(filename) {
        return require(`../assets/images/${filename}`);
    },
    closeLightbox() {
        this.$router.push('/');
    },
    nextLightbox() {
        var nextid=this.photo.id+1
        if (this.photo.id < 11) {    //<---Number should be one less than the number of images
            this.$router.push('/photo/' + nextid)
        } 
    },
    prevLightbox() {
        var previd=this.photo.id-1
        if (this.photo.id > 0) {
            this.$router.push('/photo/' + previd)
        } 
    }
  },
};
</script>

<style>
.ctlbtn:hover{
  text-decoration: underline;
  cursor: pointer;
}


</style>