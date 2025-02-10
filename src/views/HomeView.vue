<template>
  <HeaderView />
  <BookCard />
</template>

<script>
// @ is an alias to /src
import HeaderView from '@/components/Header.vue'
import BookCard from '@/components/BookCard.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderView,
    BookCard
  }
}
</script>
