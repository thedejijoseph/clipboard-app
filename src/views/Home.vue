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
        <c-input 
          type="text" 
          w="100%" 
          placeholder="Your unique identifier"
          v-model="clipboardId"
        />
        <c-form-helper-text
          color="red.300"
          v-if="error"
        >
          {{ errorMsg }}
        </c-form-helper-text>
      </c-form-control>
      <c-button
        bg="#F2B33D"
        @click="setClipboard"
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
  CFormHelperText,
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
    CFormHelperText,
  },
  data() {
    return {
      clipboardId: '',
      error: false,
      errorMsg: ''
    }
  },
  computed: {
    formattedClipboardId() {
      let clipboardId = this.clipboardId.toLowerCase()
      clipboardId = clipboardId.replace(/\s+/g, '') // strip whitespace

      return clipboardId
    }
  },
  methods: {
    setClipboard(){
      if (!this.formattedClipboardId) {
        this.error = true
        this.errorMsg = 'Clipboard Identifier cannot be blank'
        return
      }

      console.log(this.formattedClipboardId)

      this.$store.commit({
        type: 'setClipboard',
        clipboardId: this.formattedClipboardId,
        items: []
      })

      this.clipboardId = ''
      this.error = false
      this.$router.push('/clipboard')
      
    }
  }
}



</script>
