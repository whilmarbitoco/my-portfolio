<template>
  <div class="work-card wrapper">
    <h2><span>What I Do</span></h2>
    <p class="description">
      I specialize in web development, with a focus on Front-End and Back-End
      technologies.
    </p>
    <div class="work-list">
      <div v-motion-slide-visible-left class="work">
        <div class="work-name">
          <i class="fa-solid fa-laptop-code"></i>
          Front-End
        </div>
        <div class="work-description">
          Creating and designing the visual elements of websites or apps that
          users interact with directly.
        </div>
      </div>

      <div v-motion-slide-visible-left class="work">
        <div class="work-name">
          <i class="fa-solid fa-code"></i>
          Back-End
        </div>
        <div class="work-description">
          Back end development powers the server, database, and logic behind the
          scenes, making websites and apps work.
        </div>
      </div>

      <div v-motion-slide-visible-left class="work">
        <div class="work-name">
          <i class="fa-solid fa-shield"></i>
          Ethical Hacking
        </div>
        <div class="work-description">
          Ethical hacking safeguards digital realms by identifying and
          fortifying vulnerabilities through authorized simulated cyber attacks.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Infos',
}
</script>

<style scoped>
.work-card {
  width: 100%;
  margin-bottom: 25px;
  padding: 2rem;
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

.description {
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 2rem;
}

.work-list {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.work {
  padding: 1rem;
  border-radius: 8px;
  transition: transform 0.2s ease;
}

.work-name {
  font-size: 16px;
  text-transform: uppercase;
  font-style: bold;
  font-weight: 1000;
}

.fa-solid {
  color: var(--main-color);
  font-size: 1.7rem;
  padding: 10px;
  text-align: center;
}

.work-description {
  padding-left: 20px;
  font-size: 15px;
  font-weight: 300;
}

/*  Responsive */
@media screen and (max-width: 500px) {
  h2 {
    font-size: 20px;
  }
  .description {
    font-size: 14px;
  }

  .work-list {
    flex-direction: column;
  }
}
</style>
