<template>
  <div id="container">
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
