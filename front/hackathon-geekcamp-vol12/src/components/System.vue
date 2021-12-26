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
      /** ロードの処理をここに記述 */
      function delay (n) {
        return new Promise(function (resolve) {
          setTimeout(resolve, n * 1000)
        })
      }

      delay(1000)
      this.version = '1.0.0'
      this.status = 'ok'
    }
  }
}
</script>
