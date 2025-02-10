<template>
  <header>
    <!-- Navbar -->
    <MDBNavbar expand="lg" light bg="white" container position="sticky">
      <MDBNavbarNav class="mb-2 mb-lg-0">
        <MDBNavbarItem to="#" active> Home </MDBNavbarItem>
        <MDBNavbarItem to="/addBook"> Add New Book </MDBNavbarItem>
        <MDBNavbarItem to="/login"> Login </MDBNavbarItem>
        <MDBNavbarItem to="#"> Logout </MDBNavbarItem>
      </MDBNavbarNav>
    </MDBNavbar>
    <!-- Navbar -->
  </header>
</template>

<script>
import { MDBNavbar, MDBNavbarNav, MDBNavbarItem } from "mdb-vue-ui-kit";

export default {
  name: "HeaderView",
  components: {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
  },
};
</script>