<template>
    <div class="res-width view">
        <h3 class="mb-3">Gallery</h3>
        <p class="pb-3">Watches, cars, and more. Click to view full image.</p>
        <div class="gallery-panel" v-for="photo in photos" :key="photo.id">
            <router-link :to="`/photo/${photo.id}`">
                <img :src="thumbUrl(photo.thumbnail)" class="thumbnail">
            </router-link>
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
  /* .gallery {
    display: grid;
    grid-template-columns: repeat(1fr, 1fr, 1fr);
    grid-gap: 5rem;
    max-width: 10%;
    margin: 5rem auto;
    padding: 0 5rem;
  } */
  .gallery-panel img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
    padding-bottom: 2rem;
  }

.thumbnail {
  opacity: 1;
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
}

@media only screen and (min-width: 750px) {
.thumbnail:hover {
  opacity: .65;
}
}
</style>