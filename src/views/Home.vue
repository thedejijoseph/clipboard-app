<template>
  <div id="container">
    <c-button>
      <router-link to="/about">About Clipboard</router-link>
    </c-button>
    <c-button>
      <router-link to="/clipboard">Go to clipboard</router-link>
    </c-button>
  </div>
</template>

<script>
// @ is an alias to /src
import {
  CButton
}
from "@chakra-ui/vue"

export default {
  name: 'Home',
  components: {
    CButton
  }
}
</script>
