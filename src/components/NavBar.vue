<template>
  <div class="navbar wrapper">
    <div class="logo">
      <img src="../assets/svg/logo.svg" />
      <h1>W<span>B</span></h1>
    </div>

    <ul class="links">
      <li><a href="#home" class="link">Home</a></li>
      <li><a href="#about" class="link">About</a></li>
      <li><a href="#portfolio" class="link">Project</a></li>
      <li><button @click="btn" class="btn-main">Contact</button></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    btn() {
      window.location.href = '#contact'
    },
  },
}
</script>
<style>
.navbar {
  width: 100%;
  padding-top: 15px;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
}

.logo h1 {
  font-style: italic;
}

.logo span {
  color: var(--main-color);
}

.logo img {
  width: 3rem;
}

.links {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.link {
  font-size: 17px;
  font-weight: 600;
  color: var(--font-color);
  cursor: pointer;
}

.link:hover {
  border-bottom: #000 solid 1px;
}

/*  Mobile */
</style>
