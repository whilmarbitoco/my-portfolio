<template>
  <div class="card">
    <img src="../assets/project.png" class="img-card" />
    <h3 class="card-name">{{ project }}</h3>
    <ul class="langs">
      <li v-for="item in langs" :key="item.id" class="lang">
        {{ item.text }}
      </li>
    </ul>
    <div class="card-description">
      {{ description }}
    </div>
    <a href="#" class="git-link">
      <i class="fa-brands fa-github"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    project: String,
    description: String,
    github: String,
    langs: Array,
  },
};
</script>

<style scoped>
.card {
  width: 15rem;
  height: 21rem;
  overflow: hidden;
  margin: 15px;
  padding: 1rem 1rem;
  padding-bottom: 2.5rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 34px;
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  box-shadow: 11px 11px 22px #acacac, -11px -11px 22px #ffffff;
}

.img-card {
  width: 150px;
}

.card-name {
  font-size: 18px;
  font-weight: 600;
  padding-top: 5px;
  align-self: flex-start;
}

.langs {
  display: flex;
  gap: 0.5rem;
  align-self: flex-start;
  margin: 5px 0;
}

.lang {
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 14px;
  background-color: #a1a1a1;
  color: #fff;
  cursor: pointer;
}

.lang:hover {
  background-color: var(--main-color);
}

.card-description {
  text-align: start;
  font-size: 14px;
  font-weight: 300;
  line-height: 1;
  padding: 8px;
  padding-top: 5px;
}

.git-link {
  position: absolute;
  right: 5%;
  bottom: 2%;
  font-size: 2rem;
}

.fa-github {
  color: var(--main-color);
}

.fa-github:hover {
  color: #a1a1a1;
}
</style>
