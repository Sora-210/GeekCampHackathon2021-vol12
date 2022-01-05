<template>
<div>
  <!-- 目標の説明 -->
  <v-container class="py-8 px-6" fluid>
      <div :class="[`text-h3`, `black--text`, `pb-5`]" v-text="targetData.title"></div>
      <div :class="[`text-body-1`, `black--text`]" v-text="'ID: ' + targetData.id"></div>
  </v-container>

  <!-- 進捗パネルの表示をここに追加 -->
  <div id="imageTable" align="center"></div>

  <!--
    投稿ログの表示
  <v-container class="py-8 px-10" fluid>
    <div :class="[`text-h5`, `black--text`]" v-text="'ログ'"></div>
    <v-row>
      <v-col>
        <v-list two-line>
          <v-card v-for="data in sampleData" :key="data.detail" class="my-8" elevation="2" outlined shaped>
            <v-list-item>
              <v-list-item-avatar color="grey darken-1"></v-list-item-avatar>

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
  -->
</div>
</template>

<script>
import axios from 'axios'
const URL = 'https://dev.mylog.sora210.dev/api'

export default {
  data: () => ({
    id: '',
    targetData: ''
  }),
  mounted () {
    this.id = this.$route.params.id
    this.load()

    // 画像の分割処理
    var sprite = { width: 64, height: 64 }

    var image = new Image()
    image.crossOrigin = 'Anonymous'
    image.src = 'https://cdn.jsdelivr.net/npm/phina.js@0.2.3/assets/images/character/tomapiyo.png'
    image.onload = function () {
      var canvas = document.createElement('canvas')
      canvas.width = sprite.width
      canvas.height = sprite.height

      var context = canvas.getContext('2d')
      for (var i = 0; i * sprite.height < image.height; i++) {
        for (var j = 0; j * sprite.width < image.width; j++) {
          context.drawImage(
            image, j * sprite.width, i * sprite.height,
            sprite.width, sprite.height,
            0, 0,
            sprite.width, sprite.height
          )
          context.globalAlpha = 1

          var spriteElement = new Image()
          spriteElement.src = canvas.toDataURL()
          spriteElement.style.margin = '5px'

          document.querySelector('#imageTable').appendChild(spriteElement)
        }
        document.querySelector('#imageTable').appendChild(document.createElement('br'))
      }
    }
  },
  methods: {
    load () {
      axios.get(URL + '/targets/' + this.id)
        .then((response) => { this.targetData = response.data })
        .catch((error) => { console.log(error) })
    }
  }
}

</script>
