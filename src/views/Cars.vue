<template>
    <div class="res-width view">
      <div class="w-full text-center mb-2">
        <p class="exitbtn mr-auto mb-3 pt-2" @click.self="back">&#8249;&#8249; Back to Gallery &#8250;&#8250;</p>    
        <h3 class="mb-2 header">CARS</h3>
        <p class="mb-1">Lexus, Infiniti, and more.</p>
        <p class="mb-1">Click to view full image.</p>
      </div> 
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
  name: 'Car Gallery',
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