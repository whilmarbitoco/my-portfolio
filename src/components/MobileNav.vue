<template>
<div class="nav">
    <div class="nav-header wrapper">
  <div class="logo">
    <h1>WB</h1>
    </div>
    <i @click="toggleNav" class="hamburger fa-solid fa-bars"></i>
  </div>

<ul v-show="show" class="m-links">
  <i @click="toggleNav" class="exit fa-solid fa-x"></i>
  <li><a href="#home" class="m-link">Home</a></li>
  <li><a href="#about" class="m-link">About</a></li>
  <li><a href="#portfolio" class="m-link">Project</a></li>
  <li><a href="#contact" class="m-link">Contact</a></li>

</ul>
</div>
</template>

<script>
export default {
    name: "MobileNav",
    data() {
        return {
            show: false
        }
    },
    methods: {
        toggleNav() {
           this.show = !this.show
        }
    }
}
</script>

<style scoped>
.nav {
    display: flex;
    flex-direction: column;
    position: relative;
}

.nav-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.exit {
    font-size: 1.5em;
    position: absolute;
    top: 10%;
    right: 10%;
    cursor: pointer;
}

.exit:hover {
    transform: rotate(90deg);
}

.m-links {
    width: 100vw;
    height: 100vh;
    position: absolute;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1em;
}

.m-link, .hamburger {
    text-transform: uppercase;
    font-size: 1.5em;
    cursor: pointer;
    color: var(--main-color);

}

.m-link:hover {
    border-bottom: 2px #000 solid;
}

</style>