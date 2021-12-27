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
          <v-list-item v-for="link in links" :key="link[0]">
            <v-list-item-icon><v-icon>{{ link[0] }}</v-icon></v-list-item-icon>
            <v-list-item-content><v-list-item-title>
              <router-link :to="{name: link[2]}" class="signup-link">{{ link[1] }}</router-link>
            </v-list-item-title></v-list-item-content>
          </v-list-item>

          <v-list-item v-if="$store.getters.isLogin">
            <v-list-item-content><v-list-item-title>
              <v-btn
                elevation="2"
                color="red"
                outlined
                @click="logout"
              >
                <v-icon>
                  mdi-logout-variant
                </v-icon>
                Logout
              </v-btn>
            </v-list-item-title></v-list-item-content>
          </v-list-item>
          <v-list-item v-else>
            <v-list-item-content><v-list-item-title>
              <v-btn
                elevation="2"
                color="primary"
                outlined
                @click="login"
              >
                <v-icon>
                  mdi-github
                </v-icon>
                Login
              </v-btn>
            </v-list-item-title></v-list-item-content>
          </v-list-item>
          <v-list-item><v-btn
                elevation="2"
                color="primary"
                outlined
                @click="token"
              >
                token
              </v-btn></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <!-- トップメニューの記述 -->
        <v-app-bar color="deep-purple accent-4" dark>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar>
        <router-view/>
      </v-main>

    </v-app>
  </div>
</template>

<script>
import { signInWithPopup, GithubAuthProvider, getAuth, signOut } from '@firebase/auth'

export default {
  name: 'App',
  data: () => ({
    id: 123,
    drawer: null,
    links: [
      ['mdi-home', 'タイムライン', 'Home'],
      ['mdi-bullseye-arrow', '目標一覧', 'TargetList'],
      ['mdi-account', 'ユーザ一覧', 'UserList'],
      ['mdi-magnify', '検索', 'Search'],
      ['mdi-cog-outline', '設定', 'Setting'],
      ['mdi-wrench', 'システム', 'System']]
  }),
  methods: {
    login: async function () {
      console.log('login')
      const auth = getAuth()
      const provider = new GithubAuthProvider()
      await signInWithPopup(auth, provider)
        .then((result) => {
          this.$store.commit('setUser', result.user)
          console.log('login success')
        })
    },
    logout: async function () {
      console.log('logout')
      const auth = getAuth()
      await signOut(auth)
        .then(() => {
          this.$store.commit('deleteUser')
          console.log('logout success')
        })
    },
    token: async function () {
      // トークン取得例
      const token = await getAuth().currentUser.getIdToken()
      console.log(token)
    }
  }

}
</script>

<style>
</style>
