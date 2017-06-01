<template>
 <v-data-table
      v-bind:headers="headers"
      :items="items"
      hide-actions
      class="elevation-1"
    >
    <template slot="items" scope="props">
      <td v-for='h in headers'>{{ props.item[h.value] }}</td>
    </template>
  </v-data-table>
</template>
<script>
import {xmlStr} from '../assets/testdata.js'
export default {
    watch: {
    },
    props: {
        items: Array
    },
    methods: {
    },
    computed: {
    },
     data () {
      return {
        headers: [
          {
            text: 'Music Name',
            left: true,
            value: 'Name'
          },
          { text: 'Artist', value: 'Artist', left: true },
          { text: 'Album', value: 'Album',  left: true },
          { text: 'Bid Rate', value: 'Bit Rate',  left: true },
          { text: 'Sample Rate', value: 'Sample Rate',  left: true },
          { text: 'Genre', value: 'Genre',  left: true }
        ]
      }
    }
}
</script>