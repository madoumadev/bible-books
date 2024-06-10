<script>

import {useDebounce} from "../utils/getDebounce";

export default {
  name: 'SearchInput',
  props: {
    modelValue: String,
    propName: {
      type: Number,
      default: 0
    }
  },
  emits: ['onSearch'],
  data() {
    return {
      searchQuery: ''
    }
  },
  watch: {
    searchQuery: {
      immediate: true,
      deep: true,
      handler(newValue) {
        this.debounceSearch(() =>
            this.$emit('onSearch', newValue)
        )
      }
    }
  },

  methods: {
    debounceSearch: useDebounce(function doSearch(callback) {
      callback()
    }, 300)
  }
}
</script>

<template>
  <input type="search" placeholder="Rechercher..." class="rounded-lg bg-white border border-gray-300  text-gray-900 text-sm block w-full px-4 py-3 focus:outline-primary" v-model="searchQuery"/>
</template>
