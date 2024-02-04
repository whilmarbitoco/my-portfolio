<template>
  <div class="home section" id="home">
    <NavBar />
    <div class="wrapper content">
      <div class="section-1">
        <h2 class="intro"><span>I am</span></h2>

        <h1 class="name">
          {{ name }}
          <span class="typing">|</span>
        </h1>

        <div class="description">
          <p>
            College student by day, I transform into a web developer and ethical
            hacker by night, crafting seamless digital experiences and
            safeguarding the online realm.
          </p>
        </div>
        <div class="actions">
          <button @click="btn" class="btn-main">Contact</button>
          <button class="btn-secondary">Download CV</button>
        </div>
      </div>

      <div class="section-2">
        <img class="section-img" src="../assets/programmer.svg" />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
// import MobileNav from './MobileNav.vue'

export default {
  name: "Home",
  components: {
    NavBar,
    // MobileNav,
  },
  data() {
    return {
      name: "",
      type: "Whilmar Bitoco",
      speed: 100,
    };
  },
  methods: {
    btn() {
      window.location.href = "#contact";
    },
    startTyping() {
      let index = 0;
      const typeNextCharacter = () => {
        if (index < this.type.length) {
          this.name += this.type[index];
          index++;
          setTimeout(typeNextCharacter, this.speed);
        } else {
          this.clearAndRestart();
        }
      };
      typeNextCharacter();
    },
    clearAndRestart() {
      setTimeout(() => {
        this.name = "";
        this.startTyping();
      }, 10000);
    },
  },
  created() {
    this.startTyping();
  },
};
</script>

<style scoped>
.home {
  margin-top: 1rem;
}
.content {
  width: 100%;
  display: flex;
  margin-top: 4rem;
}

.section-1,
.section-2 {
  width: 50%;
}

.section-1 {
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
}
h2 {
  width: 85%;
  text-align: center;
  border-bottom: 1px solid var(--main-color);
  line-height: 0.1em;
  margin: 10px 0 20px;
}

h2 span {
  background: #fff;
  padding: 0 10px;
  font-weight: 400;
}

.description {
  line-height: 1;
  padding: 10px;
  margin-left: 10px;
}

.description p {
  font-size: 18px;
  font-weight: 300;
}

.actions {
  margin-top: 1rem;
  margin-left: 1rem;
  display: flex;
  gap: 1rem;
}

.name {
  font-size: 4rem;
  font-weight: 600;
  color: var(--main-color);
}

.section-img {
  width: 100%;
}

.typing {
  animation: blink 1s infinite steps(1);
  margin-left: 0;
  padding-left: 0;
}

@keyframes blink {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@media screen and (max-width: 500px) {
  .content {
    flex-direction: column-reverse;
  }
  .section-1,
  .section-2 {
    width: 100%;
  }

  .name {
    font-size: 3rem;
  }

  .description {
    font-size: 15px;
  }
}
</style>
