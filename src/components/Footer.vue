<template>
  <div class="wrapper">
    <div class="footer section">
      <section class="sec-one">
        <div class="logo">
          <img src="../assets/svg/logo.svg" />
          <h1>W<span>B</span></h1>
        </div>
        <section class="sec-between">
          <div class="links">
            <li><a href="#home" class="link">Home</a></li>
            <li><a href="#about" class="link">About</a></li>
            <li><a href="#portfolio" class="link">Project</a></li>
            <li><a href="#contact" class="link">Contact</a></li>
          </div>
          <div class="copyrights">
            &copy; 2023 Whilmar Bitoco. All rights reserved.
          </div>
        </section>
      </section>
      <section class="sec-two">
        <div class="socials">
          <a :href="links.socials.github"
            ><i class="fa-brands fa-github"></i
          ></a>
          <a :href="links.socials.linkedin"
            ><i class="fa-brands fa-linkedin"></i
          ></a>
          <a :href="links.socials.facebook"
            ><i class="fa-brands fa-facebook"></i
          ></a>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useSocialStore } from "../store/socialStore.js";

const links = useSocialStore();
</script>

.
<style scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sec-one {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.sec-between {
  border-left: 2px solid var(--main-color);
  padding-left: 2rem;
}

.links {
  text-transform: uppercase;
  display: flex;
  gap: 1.5rem;
  margin: 0.3rem;
}

.logo {
  display: flex;
  align-items: center;
  justify-self: flex-start;
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

.fa-brands {
  font-size: 1.7rem;
  color: var(--main-color);
  margin: 8px;
}
</style>
