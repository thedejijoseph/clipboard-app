<template>
  <div id="app">
    <c-theme-provider>
      <c-reset />
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
