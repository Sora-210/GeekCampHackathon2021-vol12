<template>
<div>
  <!-- 目標の説明 -->
  <v-container class="py-8 px-6" fluid>
      <div :class="[`text-h3`, `black--text`, `pb-5`]" v-text="'[目標名]'"></div>
      <div :class="[`text-h6`, `black--text`]" v-text="'[目標の説明]'"></div>
  </v-container>

  <!-- 進捗パネルの表示をここに追加 -->
  <div id="imageTable" align="center"></div>

  <!-- 投稿ログの表示 -->
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
</div>
</template>

<script>
export default {
  data: () => ({
    sampleData: [{
      'id': 0,
      'targetId': 0,
      'title': 'User1',
      'detail': 'test01',
      'date': '2021-12-26',
      'createdAt': '2021-12-26',
      'updatedAt': '2021-12-26'
    },
    {
      'id': 0,
      'targetId': 0,
      'title': 'User1',
      'detail': 'test03',
      'date': '2021-12-25',
      'createdAt': '2021-12-25',
      'updatedAt': '2021-12-26'
    },
    {
      'id': 0,
      'targetId': 0,
      'title': 'User1',
      'detail': 'test04',
      'date': '2021-12-24',
      'createdAt': '2021-12-24',
      'updatedAt': '2021-12-24'
    },
    {
      'id': 0,
      'targetId': 0,
      'title': 'User1',
      'detail': 'test02',
      'date': '2021-12-25',
      'createdAt': '2021-12-25',
      'updatedAt': '2021-12-26'
    }]
  })
}

// 画像の分割処理
var sprite = { width: 64, height: 64 }

var image = new Image()
image.crossOrigin = 'Anonymous'
image.src = 'https://cdn.rawgit.com/nagadomi/otama/master/image/lena.jpg'
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
      context.fillStyle = 'rgb( 0, 0, 0)'
      context.globalAlpha = 1

      var spriteElement = new Image()
      spriteElement.src = canvas.toDataURL()
      spriteElement.style.margin = '10px'

      document.querySelector('#imageTable').appendChild(spriteElement)
    }
    document.querySelector('#imageTable').appendChild(document.createElement('br'))
  }
}
</script>
