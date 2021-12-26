<template>
  <v-app id="inspire">
    <!-- コンテンツ部分の記述 -->
    <v-container class="py-8 px-6" fluid>
      <v-row>
        <v-col>
          <v-list  v-for="data in sampleData" :key="data.title" two-line>
            <v-card elevation="2" outlined shaped>
              <v-list-item :key="data.detail">
                <v-list-item-avatar color="grey darken-1"></v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>{{ data.title }}</v-list-item-title>
                  <v-list-item-subtitle>UserID: {{ data.id }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-card-text :class="[`text-h6`, active && `mb-4`]">{{ data.detail }}</v-card-text>
            </v-card>
            <v-divider inset></v-divider>
            </v-list>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
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
    },
    {
      'id': 1,
      'targetId': 0,
      'title': 'User2',
      'detail': 'test05',
      'date': '2021-12-24',
      'createdAt': '2021-12-24',
      'updatedAt': '2021-12-24'
    }],
    drawer: null,
    links: [[ 'mdi-inbox-arrow-down', 'Inbox' ], [ 'mdi-send', 'Send' ], [ 'mdi-delete', 'Trash' ], [ 'mdi-alert-octagon', 'Spam' ]],
    date: ''
  }),
  mounted () {
    this.load()
  },
  methods: {
    load () {
      /** ロード処理をここに記述 */
      this.sampleData = this.sampleData.sort(function (a, b) {
        return (a.date < b.date) ? -1 : 1
      })
    }
  }
}
</script>
