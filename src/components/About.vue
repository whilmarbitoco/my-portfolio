<template>
  <div class="wrapper about section" id="about">
    <h2>About Me</h2>
    <div class="sections">
      <section v-motion-slide-visible-left>
        <img class="img-icon" src="../assets/svg/back.svg" />
      </section>

      <section v-motion-slide-visible-left>
        <h1 class="name">I'm <span>Whilmar Bitoco</span></h1>
        <p class="abt-me">
          A self-taught programmer with a strong focus on web development in
          both the front-end and back-end. I have been learning how to code for
          the past 4 years. I also spent my time learning ethical hacking and
          participating in different online capture-the-flag challenges such as
          picoCTF, hackthebox, and tryhackme. My hobbies include reading books,
          drinking coffee, learning new things, and exploring new places.
        </p>

        <div v-motion-slide-visible-left class="socials">
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

<style scoped>
.about {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  font-size: 24px;
  margin-bottom: 1rem;
  text-align: center;
  text-transform: uppercase;
  font-style: bold;
  border-bottom: var(--main-color) 2px solid;
  width: 30%;
}

.name {
  font-size: 2.5rem;
  font-style: bold;
  font-weight: 900;
  align-self: flex-start;
  margin-bottom: 10px;
}

span {
  color: var(--main-color);
}

.socials {
  margin-top: 15px;
}

.sections {
  width: 100%;
  height: 100%;
  display: flex;
  gap: 1rem;
}

.img-icon {
  width: 450px;
  height: 400px;
}

section {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
}

a {
  color: var(--font-color);
}

.fa-brands {
  font-size: 2rem;
  margin: 0 0.5rem;
  color: var(--main-color);
}

.abt-me {
  font-size: 15px;
  font-weight: 300;
  margin-left: 10px;
}

/*  Responsive */
@media screen and (max-width: 500px) {
  h2 {
    font-size: 20px;
  }

  .abt-me {
    display: none;
  }

  section {
    width: 100%;
  }

  .name {
    font-size: 2rem;
  }
}
</style>
