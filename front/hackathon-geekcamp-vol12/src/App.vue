<template>
  <div id="app">
    <v-app id="menu">
      <!-- サイドメニューの記述 -->
      <v-navigation-drawer v-model="drawer" app>
        <v-sheet color="grey lighten-4" class="pa-4">
          <v-avatar class="mb-4" color="grey darken-1" size="64"></v-avatar>
          <div>john@vuetifyjs.com</div>
        </v-sheet>

        <v-divider></v-divider>

        <v-list>
          <v-list-item>
            <v-list-item-icon><v-icon>{{ links[0][0] }}</v-icon></v-list-item-icon>
            <v-list-item-content><v-list-item-title>
              <router-link :to="{name: links[0][2]}" class="signup-link">{{ links[0][1] }}</router-link>
            </v-list-item-title></v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon><v-icon>{{ links[1][0] }}</v-icon></v-list-item-icon>
            <v-list-item-content><v-list-item-title>
              <router-link :to="{name: links[1][2], params: {userId: this.id}}" class="signup-link">{{ links[1][1] }}</router-link>
            </v-list-item-title></v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon><v-icon>{{ links[2][0] }}</v-icon></v-list-item-icon>
            <v-list-item-content><v-list-item-title>
              <router-link :to="{name: links[2][2]}" class="signup-link">{{ links[2][1] }}</router-link>
            </v-list-item-title></v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon><v-icon>{{ links[3][0] }}</v-icon></v-list-item-icon>
            <v-list-item-content><v-list-item-title>
              <router-link :to="{name: links[3][2]}" class="signup-link">{{ links[3][1] }}</router-link>
            </v-list-item-title></v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon><v-icon>{{ links[4][0] }}</v-icon></v-list-item-icon>
            <v-list-item-content><v-list-item-title>
              <router-link :to="{name: links[4][2]}" class="signup-link">{{ links[4][1] }}</router-link>
            </v-list-item-title></v-list-item-content>
          </v-list-item>

        </v-list>
      </v-navigation-drawer>

      <v-main>
        <!-- トップメニューの記述 -->
        <v-app-bar color="deep-purple accent-4" dark prominent>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar>
        <router-view/>
      </v-main>

    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    id: 123,
    drawer: null,
    links: [['mdi-home', 'タイムライン', 'Top'], ['mdi-bullseye-arrow', '目標', 'Profile'], ['mdi-magnify', '検索', 'Search'], ['mdi-cog-outline', '設定', 'Setting'], ['mdi-wrench', 'システム', 'System']]
  })

}
</script>

<style>
</style>
