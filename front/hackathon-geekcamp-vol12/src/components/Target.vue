<template>
  <div>
    <!-- 目標の説明 -->
    <v-card>

    </v-card>

    <!-- 進捗パネルの表示をここに追加 -->

    <!-- 投稿ログの表示 -->
    <div :class="[`text-h5`, `my-100`, `black--text`]" v-text="'ログ'"></div>
    <v-container class="py-8 px-6" fluid>
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
</script>
