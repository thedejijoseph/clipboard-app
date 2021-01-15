<template>
  <div id="app">
    <c-theme-provider>
      <c-reset />
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view/>
    </c-theme-provider>
  </div>
</template>

<script>
import { CThemeProvider, CReset } from "@chakra-ui/vue";

export default {
  name: "App",
  components: {
    CThemeProvider,
    CReset
  }
};
</script>
