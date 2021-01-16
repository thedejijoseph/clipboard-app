<template>
  <c-box 
    :p="{ base:'4', lg:'10'}"
    bg="#D4D2D9"
    :maxW="{ base: '100%', lg:'45em' }"
    h="100vh"
    display="flex"
    flex-direction="column"
    justify-content="center"
    m="auto"
  >
    
    <c-box>
      <c-heading :fontSize="{ base:'3em', lg:'4em' }">
        Clipboard
      </c-heading>
      <c-text 
        color="#77808C"
        :fontSize="{ base:'1.2em', lg:'1.6em' }"
      >
        Clipboards persist for 8 hours after it was last opened
      </c-text>
    </c-box>

    <c-box>
      <c-form-control my="3">
        <c-form-label>Clipboard Identifier</c-form-label>
        <c-input type="text" w="100%" placeholder="Your unique identifier"/>
      </c-form-control>
      <c-button
        bg="#F2B33D"
        as="router-link"
        to="/clipboard"
      >
        Open clipboard
      </c-button>
    </c-box>
  </c-box>
</template>

<script>
// @ is an alias to /src
import {
  CBox,
  CButton,
  CText,
  CHeading,
  CFormControl,
  CInput,
  CFormLabel,
}
from "@chakra-ui/vue"


export default {
  name: 'Home',
  components: {
    CBox,
    CButton,
    CText,
    CHeading,
    CFormControl,
    CInput,
    CFormLabel,
  }
}
</script>
