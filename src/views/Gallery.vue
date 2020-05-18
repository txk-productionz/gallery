<template>
    <div class="res-width view">
        <h3>Gallery</h3>
        <p class="pb-3">Watches, cars, and more. Click to view full image.</p>
        <div class="gallery-panel" v-for="photo in photos" :key="photo.id">
            <router-link :to="`/photo/${photo.id}`">
                <img :src="thumbUrl(photo.filename)">
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
    thumbUrl(filename) {
      return require(`../assets/images/${filename}`);
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
</style>