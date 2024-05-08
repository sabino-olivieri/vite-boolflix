<template>
  <AppHeader />
  <AppMain />
</template>

<script>

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

import { store } from './store';

export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store,
    }
  }
}
</script>

<style lang="scss" scoped></style>