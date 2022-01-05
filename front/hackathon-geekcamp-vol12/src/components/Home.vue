<template>
  <div>
    <!-- コンテンツ部分の記述 -->
    <v-container class="py-8 px-6" fluid>
      <v-row>
        <v-col>
          <v-list two-line>
            <v-card v-for="data in postData" :key="data.detail" class="my-8" elevation="2" outlined shaped>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>{{ data.title }}</v-list-item-title>
                  <v-list-item-subtitle>UserID: {{ data.id }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-card-text :class="[`text-h6`, `mb-4`]">{{ data.detail }}</v-card-text>
            </v-card>
            <v-divider inset></v-divider>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
const URL = 'https://dev.mylog.sora210.dev/api'

export default {
  data: () => ({
    postData: '',
    date: ''
  }),
  mounted () {
    this.load()
  },
  methods: {
    load () {
      axios.get(URL + '/logs')
        .then(response => { this.postData = response.data })
        .catch((error) => { console.log(error) })

      /** ロード処理をここに記述 */
      this.sampleData = this.sampleData.sort(function (a, b) {
        return (a.date < b.date) ? -1 : 1
      })
    }
  }
}
</script>
