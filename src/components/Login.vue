<template>
  <MDBContainer>
    <div class="row align-items-center">
      <div class="col-md-6 offset-md-3">
        <form class="login-form" novalidate @submit.prevent="checkForm">
          <h1>Login</h1>
          <!-- Email input -->
          <MDBInput
            type="email"
            label="Email address"
            id="email"
            v-model="email"
            wrapperClass="mb-4"
            validationEvent="input"
            invalidFeedback="Email is required"
            required
            pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
          />
          <!-- Password input -->
          <MDBInput
            type="password"
            label="Password"
            id="password"
            v-model="password"
            wrapperClass="mb-4"
            validationEvent="input"
            invalidFeedback="Password is required"
            required
          />
          <!-- Submit button -->
          <MDBBtn color="primary" type="submit"> Sign in </MDBBtn>
        </form>
      </div>
    </div>
  </MDBContainer>
</template>

<script>
import { MDBContainer, MDBInput, MDBBtn } from "mdb-vue-ui-kit";
import { ref } from "vue";

export default {
  name: "LoginAdmin",
  components: {
    MDBContainer,
    MDBInput,
    MDBBtn,
  },
  setup() {
    const email = ref("");
    const password = ref("");

    const checkForm = (event) => {
      event.target.classList.add("was-validated");
    };

    return {
      email,
      password,
      checkForm,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
