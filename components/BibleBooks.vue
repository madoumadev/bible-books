<template>
  <div class="container mx-auto py-8 px-4 md:px-0 min-h-screen">

    <div class="mb-4 bg-white p-6 rounded-md">
      Cette application est une ressource précieuse pour quiconque souhaite
      étudier la Bible en français et en russe, offrant un moyen accessible
      et efficace de référencer les noms des livres de la Bible dans les deux langues.
    </div>

    <h1 class="text-3xl font-bold mb-6">Les livres de la Bible</h1>



    <search-input @onSearch="getQuery"  class="mb-4"/>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div v-for="book in books" :key="book.french" class="p-4 bg-white border rounded-md shadow">
        <h2 class="text-xl font-semibold">{{ book.french }}</h2>
        <p class="text-gray-600">{{ book.russian }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { bibleBooks } from '@/data/bibleBooks';
import SearchInput from "./SearchInput.vue";

export default {
  components: {SearchInput},
  data() {
    return {
      searchQuery: ''
    };
  },

  computed: {
    books() {
      const handleSearch = () => this.searchQuery.toLowerCase().replace(/\s+/g, "")
      const searchPattern = /\s+/g
      return  this.searchQuery === ""
        ? bibleBooks
        : bibleBooks.filter((book) =>
          book.french.toString()
            .toLowerCase()
            .replace(searchPattern, "")
            .includes(handleSearch()) ||
          book.russian.toString()
            .toLowerCase()
            .replace(searchPattern, "")
            .includes(handleSearch())
        )
    }
  },

  methods: {
    getQuery(q) {
      this.searchQuery = q
    }
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
