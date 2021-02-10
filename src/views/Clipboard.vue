<template>
  <c-box 
    :p="{ base:'4', lg:'10'}"
    bg="#D4D2D9"
    :maxW="{ base: '100%', lg:'45em' }"
    minH="100vh"
    display="flex"
    flex-direction="column"
    justify-content="flex-start"
    m="auto"
  >

    <c-box>
      <c-box display="flex" justify-content="space-between">
        <c-button
          variant="link"
          align="left"
          size="lg"
          as="router-link"
          to="/"
        >
          <c-icon name="chevron-left" size="1.6em" color="#F2B33D"/>
          Back
        </c-button>

        <c-button
          variant="link"
          align="left"
          size="lg"
          color="#253259"
          @click="deleteClipboard"
        >
          Delete clipboard
        </c-button>
      </c-box>
    </c-box>
    
    <c-box>
      <c-text 
        :fontSize="{ base:'3em', lg:'4em' }"
        fontWeight="bold"
        is-truncated
        v-if="clipboardId"
      >
        [ {{ clipboardId }} ]
      </c-text>
      <c-text
        fontWeight="bold"
        :fontSize="{ base: '1.5em', lg: '2em' }"
        py=4
        color="tangerine"
        v-else
      >
        Open a clipboard first!
      </c-text>
    </c-box>

    <c-box>
      <c-form-control my="3">
        <c-form-label>Add content to clipboard</c-form-label>
        <c-textarea 
          w="100%" 
          placeholder="Paste text content" 
          v-model="textContent" 
          :value="textContent" 
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
        @click="addItemToClipboard"
      >
        Save
      </c-button>
    </c-box>

    <c-box mt="6">
      <c-simple-grid 
        :columns="[1, 2, 2]" 
        :spacing="3"
      >
        <c-box v-for="item in clipboardItems" :key="item.id">
          <c-box
            bg="#ddd"
            minH="5em"
            rounded="md"
            p="3"
          >
            <c-text>{{ item.content }}</c-text>
          </c-box>
          <c-box display="flex" justify-content="space-between">
            <c-button
              bg="#F2B33D"
              my="3"
              @click="copyToClipboard(item.content)"
            >
              Copy
            </c-button>
            <c-button
              variant="link"
              color="#253259"
              my="3"
              @click="removeItemFromClipboard(item.id)"
            >
              Delete
            </c-button>
          </c-box>
        </c-box>
      </c-simple-grid>
    </c-box>
  </c-box>
</template>

<script>
// @ is an alias to /src
import {
  CBox,
  CButton,
  CIcon,
  CText,
  CFormHelperText,
  CFormControl,
  CTextarea,
  CFormLabel,
  CSimpleGrid,
}
from "@chakra-ui/vue"

function generateRandomId(size) {
  const pool = "abcdefghijklmnopqrstuvwxyz0123456789"
  let selection = ''

  var i;
  for (i=0; i < size; i++) {
    const index = Math.floor(Math.random() * pool.length);
    selection = selection + pool[index]
  }

  return selection
}


export default {
  name: 'Home',
  components: {
    CBox,
    CButton,
    CIcon,
    CText,
    CFormHelperText,
    CFormControl,
    CTextarea,
    CFormLabel,
    CSimpleGrid,
  },
  data() {
    return {
      textContent: '',
      error: false,
      errorMsg: 'Text box is empty'
    }
  },
  computed: {
    clipboardId() {
      return this.$store.getters.clipboardId
    },
    clipboardItems() {
      return this.$store.getters.clipboardItems
    }
  },
  methods: {
    async addItemToClipboard() {
      let formattedTextContent = this.textContent.replace(/\s+/g, '')
      if (!formattedTextContent) {
        this.error = true
        this.errorMsg = 'Text box is empty'
        return
      }

      if (!this.clipboardId){
        this.$toast({
          title: 'Clipboard not set',
          status: 'info',
          duration: 3000,
          variant: 'subtle'
        })
        return
      }

      const itemId = generateRandomId(3)
      const textContent = this.textContent

      const response = await fetch(
        `${this.$store.state.clipboardApi}/clipboard/${this.clipboardId}/items`,
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          },
          body: JSON.stringify({
            id: itemId,
            content: textContent
          })
        }
      ).then((response) => {return response.json()})

      if (response.success) {
        this.$store.commit({
          type: 'addItemToClipboard',
          id: itemId,
          content: textContent
        })

        this.textContent = ''
        this.error = false
      } else {
        console.log(response.errors[0].message)
        this.$toast({
          title: response.message,
          status: 'error',
          duration: 3000,
          variant: 'subtle'
        })
        return
      }

    },
    async removeItemFromClipboard(itemId) {

      const response = await fetch(
        `${this.$store.state.clipboardApi}/clipboard/${this.clipboardId}/items`,
        {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          },
          body: JSON.stringify({
            id: itemId,
          })
        }
      ).then((response) => {return response.json()})

      if (response.success) {
        this.$store.commit({
          type: 'removeItemFromClipboard',
          itemId: itemId
        })
      } else {
        console.log(response.errors[0].message)
        this.$toast({
          title: response.message,
          status: 'error',
          duration: 3000,
          variant: 'subtle'
        })
        return
      }

      
    },
    copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(function() {
        console.log('Copying to clipboard was successful!');
      }, function(err) {
        console.error('Could not copy text: ', err);
      });
      this.$toast({
        title: 'Text copied to clipboard',
        status: 'info',
        duration: 3000,
        variant: 'subtle'
      })
    },
    async deleteClipboard(){
      if (!this.clipboardId){
        this.$router.push('/')
        return
      }

      const response = await fetch(
        `${this.$store.state.clipboardApi}/clipboard/${this.clipboardId}`,
        {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        }
      ).then((response) => {return response.json()})

      if (response.success) {
        this.$store.commit({
          type: 'unsetClipboard'
        })
        this.$router.push('/')
      } else {
        console.log(response.errors[0].message)
        this.$toast({
          title: response.message,
          status: 'error',
          duration: 3000,
          variant: 'subtle'
        })
      }
    }
  }
}
</script>
