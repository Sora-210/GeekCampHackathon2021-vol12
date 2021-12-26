<template>
  <v-container id="system" fill-height>
    <v-row align='center'>
      <v-col>
        <v-card>
          <v-card-title class="ml-3" type="error">システム</v-card-title>
          <v-card-text class="ml-10" :class="[`text-body-1`, `mb-4`]">バージョン：{{ version }}</v-card-text>
          <v-card-text class="ml-10" :class="[`text-body-1`, `mb-4`]">サーバー状態：{{ status }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
const URL = 'https://dev.mylog.sora210.dev/api'

export default {
  data: () => ({
    version: 'loading...',
    status: 'loading...'
  }),
  mounted () {
    this.load()
  },
  methods: {
    load () {
      axios.get(URL + '/version', { headers: { Authorization: process.env.API_KEY } })
        .then(response => { this.version = response.data.message })
        .catch((error) => { console.log(error) })
      axios.get(URL + '/health', { headers: { Authorization: process.env.API_KEY } })
        .then(response => { this.status = response.data.status })
        .catch((error) => { console.log(error) })
    }
  }
}
</script>
