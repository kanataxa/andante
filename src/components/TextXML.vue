<template>
    <v-container fluid>
        <v-layout row
                  wrap>
            <v-flex xs12>
                <v-card>
                    <v-card-row>
                        <v-text-field label="your itunes xml"
                                      v-model="xmlStr"
                                      full-width
                                      multi-line
                                      rows=10></v-text-field>
                    </v-card-row>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import {xmlStr} from '../assets/testdata.js'
export default {
    created() {
        this.xmlStr = xmlStr
    },
    watch: {
        xmlStr(n, o) {
            this.setXML(n)
            
        }
    },
    data() {
        return {
            xmlStr: ''
        }
    },
    methods: {
        setXML(str) {
            console.log("a")
            this.$emit("setXML", str)
        }
    }
}
</script>