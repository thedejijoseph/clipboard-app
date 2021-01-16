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
        >
          Delete clipboard
        </c-button>
      </c-box>
    </c-box>
    
    <c-box>
      <c-text 
        :fontSize="{ base:'3em', lg:'4em' }"
        fontWeight="bold"
      >
        [ argon ]
      </c-text>
    </c-box>

    <c-box>
      <c-form-control my="3">
        <c-form-label>Add content to clipboard</c-form-label>
        <c-textarea w="100%" placeholder="Paste text content"/>
      </c-form-control>
      <c-button
        bg="#F2B33D"
      >
        Save
      </c-button>
    </c-box>

    <c-box mt="6">
      <c-simple-grid :columns="[1, null, 2]" :spacing="3">
        <c-box>
          <c-textarea is-disabled placeholder="Some random stuff" />
          <c-box display="flex" justify-content="space-between">
            <c-button
              bg="#F2B33D"
              my="3"
            >
              Copy
            </c-button>
            <c-button
              variant="link"
              color="#253259"
              my="3"
              pos="relative"
              bottom="0"
              right="0"
            >
              Delete
            </c-button>
          </c-box>
        </c-box>
        <c-box>
          <c-textarea isDisabled>Some random stuff</c-textarea>
          <c-box display="flex" justify-content="space-between">
            <c-button
              bg="#F2B33D"
              my="3"
            >
              Copy
            </c-button>
            <c-button
              variant="link"
              color="#253259"
              my="3"
              pos="relative"
              bottom="0"
              right="0"
            >
              Delete
            </c-button>
          </c-box>
        </c-box>
        <c-box>
          <c-textarea isDisabled>Some random stuff</c-textarea>
          <c-box display="flex" justify-content="space-between">
            <c-button
              bg="#F2B33D"
              my="3"
            >
              Copy
            </c-button>
            <c-button
              variant="link"
              color="#253259"
              my="3"
              pos="relative"
              bottom="0"
              right="0"
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
  CFormControl,
  CTextarea,
  CFormLabel,
  CSimpleGrid,
}
from "@chakra-ui/vue"


export default {
  name: 'Home',
  components: {
    CBox,
    CButton,
    CIcon,
    CText,
    CFormControl,
    CTextarea,
    CFormLabel,
    CSimpleGrid,
  }
}
</script>
