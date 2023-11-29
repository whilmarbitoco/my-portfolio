<template>
  <div class="container" id="contact">
    <div class="wrapper contact section">
      <h2><span>Contact Me</span></h2>
      <div class="sections">
        <section v-motion-slide-visible-left class="sec-img">
          <img src="../assets/svg/contact.svg" />
        </section>
        <section v-motion-slide-visible-left class="sec-form">
          <FormKit type="form" id="myForm" @submit="formHandle">
            <FormKit
              type="email"
              label="Email Address"
              help="Please enter your email address."
              validation="required|email"
              placeholder="johndoe@example.com"
            />
            <FormKit
              type="text"
              label="Full Name"
              help="Please enter your name"
              validation="required"
              placeholder="John Doe"
            />
            <FormKit
              type="text"
              label="Subject"
              help="Please enter your name"
              validation="required"
              placeholder="Business Proposal"
            />
            <FormKit
              type="textarea"
              label="Message"
              help="Please Enter Your Message"
              validation="required"
              placeholder="Your Message"
            />
          </FormKit>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { FormKit } from '@formkit/vue'

export default {
  name: 'Contact',
  methods: {
    formHandle(e) {
      // e.preventDefault();
      console.log(e)
      this.$formkit.reset('myForm')
    },
  },
  components: { FormKit },
}
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

#myForm {
  width: 100%;
  padding: 25px;
}

img {
  width: 80%;
}

/*  testtt */

/*  Responsive */
@media screen and (max-width: 500px) {
  h2 {
    font-size: 17px;
  }

  .cntct-me {
    display: none;
  }

  section {
    width: 100%;
  }

  .form {
    width: 85%;
  }
}
</style>
