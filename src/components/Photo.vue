<template>
  <div class="view res-width lightbox" >
    <p class="closebtn text-center" @click.self="closeLightbox">close image</p>
    <h4 class="text-center" v-if="photo.description">{{ photo.description }}</h4>
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
    }
  },
};
</script>

<style>

.closebtn:hover{
    text-decoration: underline;
}

</style>