<template>
<div id="app">
<andante-header></andante-header>
<v-container fluid>
 
    <text-xml @setXML="setXML"></text-xml>
    <data-table :items='items'></data-table>
</v-container>
</div>
</template>

<script>
import AndanteHeader from './components/Header.vue'
import DataTable from './components/datatable.vue'
import TextXml from './components/TextXML.vue'
export default {
  name: 'app',
  components: { TextXml, DataTable, AndanteHeader },
  data () {
    return {
      xmlStr: ''
    }
  },
  methods: {
    setXML(str) {
      this.xmlStr = str
    }
  },
  computed: {
    items() {
        const parser = new DOMParser()
        const doc = parser.parseFromString(this.xmlStr, 'text/xml')
        const musicList = doc.getElementsByTagName('dict')
        const items = []
        for (let i = 2; i < musicList.length; i += 2) {
            const music = musicList[i]
            const tags = music.getElementsByTagName('*')
            //const map = new Map()
            const obj = {}
            for(let i = 0; i < tags.length;) {
                const tag = tags[i]
                if (i + 1 < tags.length && tags[i + 1].nodeName !== 'key') {
                    //map.set(tags[i].innerHTML, tags[i + 1].innerHTML)
                    obj[tags[i].innerHTML] = tags[i + 1].innerHTML
                    i += 2
                } else {
                    //map.set(tags[i].innerHTML, '')
                    obj[tags[i].innerHTML] = ''
                    i ++
                }
            }
            items.push(obj)
        }
        return items
    }
  }
}
</script>

<style>
</style>
