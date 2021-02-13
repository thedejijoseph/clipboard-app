<template>
  <div id="container">
    <c-box 
      :p="{ base:'4', lg:'10'}"
      bg="#D4D2D9"
      :maxW="{ base: '100%', lg:'45em' }"
      minH="100vh"
      display="flex"
      flex-direction="column"
      justify-content="center"
      m="auto"
    >
      <c-box>
        <c-button
          variant="link"
          align="left"
          size="lg"
          as="router-link"
          to="/"
        >

          <c-icon name="chevron-left" size="1.6em" color="#F2B33D"/>
          Home
        </c-button>
      </c-box>

      <c-box py="3">
        <c-heading :fontSize="{ base:'1.3em', lg:'2.3em' }">
          Background
        </c-heading>
        <c-text
          color="#77808C"
          :fontSize="{ base:'1.2em', lg:'1.6em' }"
        >
          Using multiple devices, I'd sometimes need to use text content sourced from one device on the other:
          write something on my PC, but need to paste into an app on my phone. Even with URLs too. But Chrome's 'Send to device' helped with that.
        </c-text>
        <c-text
          color="#77808C"
          :fontSize="{ base:'1.2em', lg:'1.6em' }"
        >
          This served as learning experience with Vue for me.
        </c-text>
        <c-text
          color="#77808C"
          :fontSize="{ base:'1.2em', lg:'1.6em' }"
        >
          I wrote more about building it on Hashnode <c-link href="https://wrecodde.hashnode.dev" color="#F2B33D">here</c-link>.
        </c-text>
      </c-box>

      <c-box py="3">
        <c-heading :fontSize="{ base:'1.3em', lg:'2.3em' }">
          Deji Joseph

          <c-link href="https://github.com/wrecodde" p="1">
            <i class="fab fa-github"></i>
          </c-link>
          <c-link href="https://twitter.com/wrecodde" p="1">
            <i class="fab fa-twitter"></i>
          </c-link>
        </c-heading>
      </c-box>

    </c-box>
  </div>
</template>

<script>
import {
  CBox,
  CIcon,
  CText,
  CLink,
  CButton,
  CHeading,
}
from "@chakra-ui/vue"


export default {
  naem: "About",
  components: {
    CBox,
    CIcon,
    CText,
    CLink,
    CButton,
    CHeading,
  }
}
</script>
