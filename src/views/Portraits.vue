<template>
    <div class="res-width view">
      <p class="exitbtn mr-auto mb-3 pt-2" @click.self="back">&#8249;&#8249; Back to Gallery</p>    
          <h3 class="mb-2">Portraits</h3>
          <p class="pb-2">Say cheese. Click to view full image.</p>
        
        <div class="gallery-panel" v-for="portrait in portraits" :key="portrait.id">
            <router-link :to="`/portraits/portrait/${portrait.id}`">
                <img :src="thumbUrl(portrait.thumbnail)" class="thumbnail">
            </router-link>
        </div>

    </div>
</template>

<script>
import portraits from '@/portraits.json';
export default {
  name: 'Portrait Gallery',
  data() {
    return {
      portraits,
    };
  },
  methods: {
    thumbUrl(thumbnail) {
      return require(`../assets/images/thumbnail/${thumbnail}`);
    },
    back() {
        this.$router.push('/');
    },
  },
};
</script>

<style>

.gallery-panel img {
  width: 100%;
  height: 45vh;
  object-fit: cover;
  padding-bottom: 2rem;
  
}

.thumbnail {
  opacity: 1;
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
}

.exitbtn:hover{
  cursor: pointer;
  text-decoration: underline;
}

/* for da big screens */
@media only screen and (min-width: 750px) {
.thumbnail:hover {
  opacity: .65;
}

}

</style>