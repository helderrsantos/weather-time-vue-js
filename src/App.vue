<template>
  <DisplayPanel :card-name="cardname"/>

</template>

<script lang="ts">
import DisplayPanel from './components/DisplayPanel.vue';



export default {
  components: {
    DisplayPanel,

},
  data(){
    return {
    cardname:"testando"
    }
  }
}
</script>

