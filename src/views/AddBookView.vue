<template>
    <HeaderView />
    <Add-New />
  </template>
  
  <script>
  // @ is an alias to /src
  import HeaderView from '@/components/Header.vue'
  import AddNew from '@/components/AddBook.vue'
  
  export default {
    name: 'addNew',
    components: {
      HeaderView,
      'Add-New': AddNew
    }
  }
  </script>
  