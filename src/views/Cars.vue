<template>
    <div class="res-width view">
      <p class="exitbtn mr-auto mb-3 pt-2" @click.self="back">&#8249;&#8249; Back to Gallery</p>    
          <h3 class="mb-2">Cars</h3>
          <p class="pb-2">Lexus, Infiniti, and more. Click to view full image.</p>
        
        <div class="gallery-panel" v-for="car in cars" :key="car.id">
            <router-link :to="`/cars/car/${car.id}`">
                <img :src="thumbUrl(car.thumbnail)" class="thumbnail">
            </router-link>
        </div>

    </div>
</template>

<script>
import cars from '@/cars.json';
export default {
  name: 'Gallery',
  data() {
    return {
      cars,
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
}


.cat-panel img {
  width: 100%;
  height: 30vh;
  object-fit: cover;
  padding-bottom: 2rem;
  filter: brightness(0.75);
}

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

.exitbtn:hover{
  cursor: pointer;
  text-decoration: underline;
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
}
</style>