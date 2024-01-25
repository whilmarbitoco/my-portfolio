<template>
  <div class="container" id="contact">
    <div class="wrapper contact section">
      <h2><span>Contact Me</span></h2>
      <div class="sections">
        <section v-motion-slide-visible-left class="sec-img">
          <img src="../assets/svg/contact.svg" />
        </section>
        <section v-motion-slide-visible-left class="sec-form">
          <form @submit.prevent="formHandle">
            <input
              type="text"
              name="fname"
              id="fname"
              placeholder="Name"
              v-model="name"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              v-model="email"
              required
            />
            <input
              type="text"
              name="body"
              id="body"
              placeholder="Message"
              v-model="body"
              required
            />
            <button class="btn-submit btn-main" type="submit">Submit</button>
          </form>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const body = ref("");

const formHandle = () => {
  const formData = {
    name: name.value,
    email: email.value,
    body: body.value,
  };

  console.log(formData);

  name.value = "";
  email.value = "";
  body.value = "";
};
</script>

<style scoped>
.container {
  background-color: #fff;
}

.wrapper {
  background-color: #fff;
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

.sections {
  width: 100%;
  height: auto;
  display: flex;
}

section {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

img {
  width: 80%;
}

form {
  display: flex;
  flex-direction: column;
  gap: 13px;
  width: 70%;
}

input {
  height: 40px;
  font-size: 15px;
  padding-left: 5px;
  outline: none;
  border: none;
  border-bottom: 1px #00000059 solid;
}

input:focus {
  border-bottom: solid 1px var(--main-color);
}

.btn-submit {
  margin-top: 20px;
}

@media screen and (max-width: 500px) {
  .sections {
    flex-direction: column;
  }

  section {
    width: 100%;
  }

  form {
    width: 80%;
  }
}
</style>
