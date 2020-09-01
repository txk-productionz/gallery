<template>
    <div class="res-width view">
        <div class="categories border-bottom pb-5 mb-2">
          <a href="#down" class="cat-panel">
              <h1 class="category">ALL PHOTOS</h1>
              <img src="../assets/images/thumbnail/P016 Resized.jpg">
          </a>
          <router-link :to="`/watches/`">
            <div class="cat-panel">
              <h1 class="category">WATCHES</h1>
              <img src="../assets/images/thumbnail/060 Resized.jpg">
            </div>
          </router-link>
          <router-link :to="`/cars/`">
            <div class="cat-panel ">
              <h1 class="category">CARS</h1>
              <img src="../assets/images/thumbnail/069 Resized.jpg">
            </div>
          </router-link>
          <router-link :to="`/sneakers/`">
            <div class="cat-panel ">
              <h1 class="category">SHOES</h1>
              <img src="../assets/images/thumbnail/058 Resized.jpg">
            </div>
          </router-link>
          <router-link :to="`/portraits/`">
          <div class="cat-panel">
            <h1 class="category">PORTRAITS</h1>
            <img src="../assets/images/thumbnail/P018 Resized.jpg">
          </div>
          </router-link>
        </div>
        <div id="down" class="w-full text-center mb-2">
          <h1 class="mb-2 header">ALL PHOTOS</h1>
          <p class="mb-1">Click to view full image.</p>
        </div>
        <div class="w-full">
          <div class="gallery-panel" v-for="photo in photos" :key="photo.id">
            <div class="aspect-ratio">
              <router-link :to="`/photo/${photo.id}`">
                <img :src="thumbUrl(photo.thumbnail)" class="thumbnail">
              </router-link>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import photos from '@/photos.json';
export default {
  name: 'Gallery',
  data() {
    return {
      photos,
    };
  },
  methods: {
    thumbUrl(thumbnail) {
      return require(`../assets/images/thumbnail/${thumbnail}`);
    },
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}

#down {
  padding-top: 7rem;
}

.header {
  font-weight: bold;
  color: black;
}

.categories {
  margin-top: 8rem;
}

.cat-panel {
  position: relative;
  text-align: center;
  color: white;
}

.category {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  z-index: 1;
  width: 100%;
  color: white;
}


.cat-panel img {
  width: 100%;
  object-fit: cover;
  padding-bottom: 2rem;
  filter: brightness(0.75);
}

.gallery-panel {
  float: left;
  width: 30%;
  height: auto;
  margin: 1.66%;
}

.aspect-ratio {
  width: 100%;
  padding-top: 100%; /* 1:1 Aspect Ratio */
  position: relative;
  overflow: hidden;
}

.aspect-ratio img {
  width:100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.thumbnail {
  opacity: 1;
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
}

/* for da big screens */
@media only screen and (min-width: 750px) {
.thumbnail:hover {
  opacity: .65;

}

.cat-panel:hover{
  opacity: 0.65;
  -webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
}
}

/* for da big screens yooo */
@media only screen and (min-width: 1175px) {
.category{
  font-size: 7rem;
}

.header{
  font-size: 7rem;
}
.cat-panel img {
    height: 30vh;
  }
}

/* For Mobile */
@media only screen and (max-width: 1175px) {
.cat-panel img {
    height: 20vh;
  }  
}


</style>