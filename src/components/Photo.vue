<template>
  <div class="view res-width lightbox">
    <p class="exitbtn mr-auto" @click.self="closeLightbox">&#8249;&#8249; Back to Gallery</p>
    <div class="mb-3">
      <h5 class="text-center border-top border-bottom py-3" v-if="photo.caption">"{{ photo.caption }}"</h5>
      <p class="text-center mb-1" v-if="photo.products">{{ photo.products }}</p>
      <p class="text-center mb-1" v-if="photo.credit">{{ photo.credit }}</p>
    </div>
    <div class="d-flex position-fixed res-width">
        <h1 class="ctlbtn mr-auto px-3 text-dark" @click.self="prevLightbox">&#8249;</h1>
        <h1 class="ctlbtn ml-auto px-3 text-dark" @click.self="nextLightbox">&#8250;</h1>
    </div>
    <img class="w-100" :src="photoUrl(photo.filename)">
    <div class="d-flex mt-2">
        <p class="mr-auto" v-if="photo.location">{{ photo.location }}</p>
        <p class="ml-auto" v-if="photo.date">{{ photo.date }}</p>
    </div>
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
        if (this.photo.id < 17) {    //<---Number should be one less than the number of images
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
  background-color: #6c757d;
  opacity: 0.6;
  -webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
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

@media only screen and (min-width: 750px) {
.ctlbtn:hover {
  opacity: .5;
}
}

.exitbtn:hover{
  cursor: pointer;
  text-decoration: underline;
}


</style>