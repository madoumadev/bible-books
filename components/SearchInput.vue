<script>
import {useDebounce} from '../../../utils/useDebounce'

export default {
  name: 'SearchInput',
  props: {
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
  <input type="search" class="wfg-input" v-model="searchQuery" :placeholder="$t('common.search')"/>
</template>
