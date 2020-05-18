<template>
  <div class="view res-width lightbox">
    <p class="text-center mx-auto exitbtn" @click.self="closeLightbox">&#8249;Back to Gallery&#8250;</p>
    <h2 class="text-center" v-if="photo.caption">"{{ photo.caption }}"</h2>
    <h5 class="text-center" v-if="photo.location">{{ photo.location }}</h5>
    <h5 class="text-center" v-if="photo.products">{{ photo.products }}</h5>
    <h5 class="text-center" v-if="photo.credit">{{ photo.credit }}</h5>
    <div class="d-flex position-fixed res-width ">
        <h1 class="ctlbtn bg-secondary mr-auto px-3 text-dark" @click.self="prevLightbox">&#8249;</h1>
        <h1 class="ctlbtn bg-secondary ml-auto px-3 text-dark" @click.self="nextLightbox">&#8250;</h1>
    </div>
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
    prevLightbox() {
        var nextid=this.photo.id+1
        if (this.photo.id < 11) {    //<---Number should be one less than the number of images
            this.$router.push('/photo/' + nextid)
        } 
    },
    nextLightbox() {
        var previd=this.photo.id-1
        if (this.photo.id > 0) {
            this.$router.push('/photo/' + previd)
        } 
    }
  },
};
</script>

<style>

.ctlbtn{
  
  opacity: 60%;
}

@media only screen and (max-width: 1000px) {
  .ctlbtn {
    font-size: 5rem;
  }
}
@media only screen and (min-width: 1000px) {
  .ctlbtn {
    font-size: 10rem;
  }
}

.ctlbtn:hover{
  cursor: pointer;
}

.exitbtn:hover{
  cursor: pointer;
  text-decoration: underline;
}


</style>