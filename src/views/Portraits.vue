<template>
    <div class="res-width view">
      <div class="w-full text-center mb-2">  
        <p class="exitbtn mr-auto mb-3 pt-2" @click.self="back">&#8249;&#8249; Back to Gallery &#8250;&#8250;</p>    
        <h3 class="mb-2 header">PORTRAITS</h3>
        <p class="mb-1">Say cheese.</p>
        <p class="mb-1">Click to view full image.</p>
      </div> 
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

<style scoped>
.header {
  font-weight: bold;
  color: black;
}

.gallery-panel {
  float: left;
  width: 30%;
  height: auto;
  margin: 1.66%;
}

.gallery-panel img {
  width:100%;
  object-fit: cover;
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
.header{
  font-size: 7rem;
}
}
.exitbtn:hover{
  cursor: pointer;
  text-decoration: underline;
}

</style>