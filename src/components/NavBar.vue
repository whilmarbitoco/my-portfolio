<template>
  <div class="navbar wrapper">
    <div class="logo">
      <img src="../assets/svg/logo.svg" />
      <h1>W<span>B</span></h1>
    </div>

    <button @click="toggleMenu" class="menu-icon">&#9776;</button>

    <ul class="links" :class="{ 'show-menu': isMenuOpen }">
      <li><a href="#home" class="link" @click="closeMenu">Home</a></li>
      <li><a href="#about" class="link" @click="closeMenu">About</a></li>
      <li><a href="#portfolio" class="link" @click="closeMenu">Project</a></li>
      <li><button @click="btn" class="btn-main">Contact</button></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    btn() {
      window.location.href = "#contact";
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>

<style scoped>
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
  list-style: none;
  padding: 0;
  margin: 0;
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

.menu-icon {
  display: none;
  font-size: 20px;
  cursor: pointer;
}

/*  Mobile */

@media screen and (max-width: 500px) {
  .btn-main {
    font-size: 17px;
    font-weight: 600;
    color: var(--font-color);
    background-color: transparent !important;
    border: none;
    cursor: pointer;
  }
  .links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #f9f9f9;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .links.show-menu {
    display: flex;
  }

  .menu-icon {
    display: block;
    border: none;
    background-color: transparent;
    font-size: 40px;
  }
}
</style>
