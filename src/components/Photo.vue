<template>
  <div class="view res-width lightbox">
    <p class="exitbtn mr-auto mb-3 pt-2" @click.self="closeLightbox">&#8249;&#8249; Back to Gallery</p>
    <div class="ctlcont d-flex position-fixed res-width mt-5">
        <h1 class="ctlbtn mr-auto px-3 text-dark" @click.self="prevLightbox">&#8249;</h1>
        <h1 class="ctlbtn ml-auto px-3 text-dark" @click.self="nextLightbox">&#8250;</h1>
    </div>
    <v-lazy-image class="w-100" :src="photoUrl(photo.filename)"
    :src-placeholder="thumbnailUrl(photo.thumbnail)"/>



    <!-- <img class="w-100" :src="photoUrl(photo.filename)"> -->
    <div class="meta d-flex mt-3 font-weight-light">
        <p class="mr-auto py-0" v-if="photo.location">{{ photo.location }}</p>
        <p class="ml-auto py-0" v-if="photo.date">{{ photo.date }}</p>
    </div>
    <p class="caption my-0 pt-0 pb-2 font-weight-bold" v-if="photo.caption">"{{ photo.caption }}"</p>
    <p class="border-top my-0 py-2" v-if="photo.products">{{ photo.products }}</p>
    <p class="border-top my-0 py-2" v-if="photo.credit">{{ photo.credit }}</p>
    <p class="meta postnum font-weight-light text-center" v-if="photo.post">{{ photo.post }}</p>
  </div>
</template>

<script>
import photos from '@/photos.json';
import VLazyImage from "v-lazy-image";
export default {
  name: 'Photo',
  data() {
    return {
      photos,
    };
  },
  components: {
    VLazyImage
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
        return require(`../assets/images/fullimg/${filename}`);
    },
    thumbnailUrl(thumbnail) {
        return require(`../assets/images/thumbnail/${thumbnail}`);
    },
    closeLightbox() {
        this.$router.push('/');
    },
    prevLightbox() {
        var nextid=this.photo.id+1
        if (this.photo.id < 36) {    //<---Number should be the final id
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
.v-lazy-image {
  filter: blur(10px);
  transition: filter 0.7s;
  z-index: -1;
}
.v-lazy-image-loaded {
  filter: blur(0);

}

.postnum{
  margin-top: 4rem;
}

.meta{
  font-size: 0.8rem;
}

.caption{
  font-size: 1.25rem;
}

.ctlcont{
  z-index: 1000;
}

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