<template>
  <div id="container">
    <h1>On Clipboard</h1>
    <c-button>
      <router-link to="/">Back home</router-link>
    </c-button>
  </div>
</template>

<script>
import {
  CButton
}
from "@chakra-ui/vue"


export default {
  naem: "About",
  components: {
    CButton
  }
}
</script>
