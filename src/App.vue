<template>
  <div class="container">
    <Home />
    <Infos />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </div>
</template>

<script setup>
import Home from "./components/Home.vue";
import Infos from "./components/Infos.vue";
import About from "./components/About.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
</script>

<style>
.section {
  width: 100%;
  height: 100%;
}

.wrapper {
  margin: 0 auto;
  max-width: 1160px;
  padding: 10px 20px;
}

.btn-main,
.btn-secondary {
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  border: 2px solid;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  text-transform: uppercase;
}

.btn-main {
  background-color: var(--main-color);
  border-color: var(--main-color);
  color: var(--bg-color);
  transition: background-color 0.5s, color 0.3s, border-color 0.5s;
}

.btn-main:hover {
  color: var(--main-color);
  background: var(--bg-color);
  border-color: var(--main-color);
}

.btn-secondary {
  color: var(--main-color);
  background: var(--bg-color);
  border-color: var(--main-color);
  transition: background-color 0.5s, color 0.3s, border-color 0.5s;
}

.btn-secondary:hover {
  background-color: var(--main-color);
  border-color: var(--main-color);
  color: var(--bg-color);
}
</style>
