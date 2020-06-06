<template>
  <div class="bg-white p-0">
    <nav class="navbar navbar-expand-lg navbar-light p-0 py-3 my-3 res-width">
        <router-link class="navbar-brand text-dark" to="/">TXK Productionz</router-link>
      
        <button class="navbar-toggler test" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <!-- <a class="nav-link" href="gallery">Gallery</a> -->
              <router-link class="nav-link text-dark test" data-toggle="collapse" data-target=".navbar-collapse.show" to="/">Gallery</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark" data-toggle="collapse" data-target=".navbar-collapse.show" @click.self="toAbout">About</a>
              <!-- <router-link class="nav-link text-dark test" data-toggle="collapse" data-target=".navbar-collapse.show" to="about">About</router-link> -->
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark" data-toggle="collapse" data-target=".navbar-collapse.show" @click.self="toContact">Contact</a>
              <!-- <router-link class="nav-link text-dark" data-toggle="collapse" data-target=".navbar-collapse.show" to="contact">Contact</router-link> -->
            </li>
            <li class="nav-item">
              <a class="nav-link" target="_blank" href="https://www.instagram.com/txk.productionz/">Instagram</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" target="_blank" href="https://www.tiktok.com/@txk.productionz/">TikTok</a>
            </li>
          </ul>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  components: {
  },
  methods: {
    toAbout() {
        this.$router.push('/about');
    },
    toContact() {
        this.$router.push('/contact');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.nav-link{
  cursor: pointer;
}

</style>