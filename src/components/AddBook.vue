<template>
  <MDBContainer>
    <div class="row align-items-center">
      <div class="col-md-6 offset-md-3"></div>
      <form class="book-form" novalidate @submit.prevent="checkForm">
        <MDBInput
          type="input"
          label="Book Title"
          id="title"
          v-model="title"
          wrapperClass="mb-4"
          validationEvent="input"
          invalidFeedback="Title is required"
          required
          maxLength="100"
        />
        <MDBInput
          type="input"
          label="Book Author"
          id="author"
          v-model="author"
          wrapperClass="mb-4"
          validationEvent="input"
          invalidFeedback="Author is required"
          required
          maxLength="50"
        />
        <MDBInput
          :formOutline="false"
          type="file"
          label="Book Image"
          id="bookImage"
          v-model="bookImage"
          wrapperClass="mb-4"
          validationEvent="input"
          invalidFeedback="Image is required"
          required
        />
        <MDBTextarea
          label="Book Description"
          rows="4"
          id="description"
          v-model="description"
          wrapperClass="mb-4"
        />

        <MDBInput
          type="input"
          label="Book Publisher"
          id="publisher"
          v-model="publisher"
          wrapperClass="mb-4"
          validationEvent="input"
          invalidFeedback="Publisher is required"
          required
          maxLength="100"
        />

        <MDBInput
          type="input"
          label="Book Genre"
          id="genre"
          v-model="genre"
          wrapperClass="mb-4"
          validationEvent="input"
          invalidFeedback="Genre is required"
          required
          maxLength="50"
        />

        <MDBInput
          type="date"
          label="Book Published"
          id="publishedDate"
          v-model="publishedDate"
          wrapperClass="mb-4"
          validationEvent="date"
          invalidFeedback="Date Published is required"
          required
        />
        <MDBBtn color="primary" type="submit"> Add New Book </MDBBtn>
      </form>
    </div>
  </MDBContainer>
</template>

<script>
import { MDBBtn, MDBContainer, MDBInput, MDBTextarea } from "mdb-vue-ui-kit";
import { ref } from "vue";

export default {
  name: "Add-New",
  setup() {
    const title = ref("");
    const author = ref("");
    const bookImage = ref("");
    const description = ref("");
    const publisher = ref("");
    const genre = ref("");
    const publishedDate = ref("");

    return {
      title,
      author,
      bookImage,
      description,
      publisher,
      genre,
      publishedDate,
    };
  },
  components: { MDBInput, MDBContainer, MDBBtn, MDBTextarea },
};
</script>
