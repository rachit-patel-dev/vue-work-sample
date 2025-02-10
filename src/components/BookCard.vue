<template>
  <MDBContainer>
    <MDBInput
      v-model="search1"
      inputGroup
      :formOutline="false"
      wrapperClass="mb-3 mt-3"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="button-addon2"
    >
      <MDBBtn color="primary">
        <MDBIcon icon="search" />
      </MDBBtn>
    </MDBInput>
    <div>
      <MDBRow class="book-container">
        <MDBCol col="4">
          <MDBCard class="book-card">
            <section class="book">
              <img src="https://picsum.photos/200/300" alt="Normans How are." />
              <h3>Name: <span>Normans How are.</span></h3>
              <h4>Author: <span>Brionna Padberg</span></h4>
              <h4>Isbn: <span>9792571450377</span></h4>
              <h4>Genre: <span>Ex</span></h4>
              <h4>
                Description:
                <span
                  >Queen added to one of the court,\" and I had it written down:
                  but I THINK I can reach the key; and if it had fallen into a
                  chrysalis--you will some day, you know--and then after that
                  savage Queen: so.</span
                >
              </h4>
              <div>
                <MDBBtn color="primary">
                  <MDBIcon icon="trash" />
                </MDBBtn>
                <MDBBtn color="primary">
                  <MDBIcon icon="edit" />
                </MDBBtn>
              </div>
            </section>
          </MDBCard>
        </MDBCol>
        <MDBCol col="4">
          <MDBCard class="book-card">
            <section class="book">
              <img src="https://picsum.photos/200/300" alt="Normans How are." />
              <h3>Name: <span>Normans How are.</span></h3>
              <h4>Author: <span>Brionna Padberg</span></h4>
              <h4>Isbn: <span>9792571450377</span></h4>
              <h4>Genre: <span>Ex</span></h4>
              <h4>
                Description:
                <span
                  >Queen added to one of the court,\" and I had it written down:
                  but I THINK I can reach the key; and if it had fallen into a
                  chrysalis--you will some day, you know--and then after that
                  savage Queen: so.</span
                >
              </h4>
              <div>
                <MDBBtn color="primary">
                  <MDBIcon icon="trash" />
                </MDBBtn>
                <MDBBtn color="primary">
                  <MDBIcon icon="edit" />
                </MDBBtn>
              </div>
            </section>
          </MDBCard>
        </MDBCol>
        <MDBCol col="4">
          <MDBCard class="book-card">
            <section class="book">
              <img src="https://picsum.photos/200/300" alt="Normans How are." />
              <h3>Name: <span>Normans How are.</span></h3>
              <h4>Author: <span>Brionna Padberg</span></h4>
              <h4>Isbn: <span>9792571450377</span></h4>
              <h4>Genre: <span>Ex</span></h4>
              <h4>
                Description:
                <span
                  >Queen added to one of the court,\" and I had it written down:
                  but I THINK I can reach the key; and if it had fallen into a
                  chrysalis--you will some day, you know--and then after that
                  savage Queen: so.</span
                >
              </h4>
              <div>
                <MDBBtn color="primary">
                  <MDBIcon icon="trash" />
                </MDBBtn>
                <MDBBtn color="primary">
                  <MDBIcon icon="edit" />
                </MDBBtn>
              </div>
            </section>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  </MDBContainer>
</template>

<script>
// @ is an alias to /src
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBInput,
  MDBBtn,
  MDBIcon,
} from "mdb-vue-ui-kit";
import { ref } from "vue";
import { ApiService } from "./api.service";

export default {
  name: "Book-Card",
  components: {
    MDBCol,
    MDBRow,
    MDBContainer,
    MDBCard,
    MDBInput,
    MDBBtn,
    MDBIcon,
  },
  mounted() {
    ApiService.get("books")
      .then((response) => {
        // Handle success response
        console.log("response", response);
      })
      .catch((error) => {
        // Handle error response
        console.log("error", error);
      });
  },
  setup() {
    const search1 = ref("");

    return {
      search1,
    };
  },
};
</script>
