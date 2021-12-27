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
          <v-spacer></v-spacer>
          <v-btn icon @click="overlay = !overlay"><v-icon>mdi-pencil</v-icon></v-btn>
        </v-app-bar>

        <!-- 投稿フォーム -->
        <v-overlay :value="overlay">
          <v-card :align="'center'" color="blue darken-3" width="500">
            <v-row :align="'center'" no-gutters>
              <v-card-actions>
                <v-btn icon @click="overlay = false; postContent=''; postDetail=''"><v-icon>mdi-keyboard-backspace</v-icon></v-btn>
              </v-card-actions>
              <v-spacer></v-spacer>
              <v-card-title>あたらしく投稿する</v-card-title>
              <v-spacer></v-spacer>
              <v-card-actions>
                <v-btn text color="blue lighten-5" class="text-h6" @click="postData()">投稿</v-btn>
              </v-card-actions>
            </v-row>
            <v-textarea
              class="mx-5"
              filled
              auto-grow
              outlined
              label="title"
              rows="1"
              row-height="40"
              v-model="postTitle"
            ></v-textarea>
            <v-textarea
              class="mx-5"
              filled
              auto-grow
              outlined
              label="Detail"
              rows="4"
              row-height="30"
              shaped
              v-model="postDetail"
            ></v-textarea>
          </v-card>
        </v-overlay>
        <router-view/>
      </v-main>

    </v-app>
  </div>
</template>

<script>
import { signInWithPopup, GithubAuthProvider, getAuth, signOut } from '@firebase/auth'
import axios from 'axios'
const URL = 'https://dev.mylog.sora210.dev/api'

export default {
  name: 'App',
  data: () => ({
    id: 123,
    overlay: false,
    drawer: null,
    links: [
      ['mdi-home', 'タイムライン', 'Home'],
      ['mdi-bullseye-arrow', '目標一覧', 'TargetList'],
      ['mdi-account', 'ユーザ一覧', 'UserList'],
      ['mdi-magnify', '検索', 'Search'],
      ['mdi-cog-outline', '設定', 'Setting'],
      ['mdi-wrench', 'システム', 'System']
    ],
    postTitle: '',
    postDetail: ''
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
      const uid = await getAuth().currentUser.uid
      let flag = 0
      await axios.get(URL + '/users/' + uid)
        .then((res) => {
          console.log('ok')
        })
        .catch((e) => {
          flag = 1
        })
      if (flag) {
        await axios.post(URL + '/users', {
          id: uid,
          name: uid
        })
          .then((res) => { console.log(res) })
        flag = 0
      }
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
    },
    postData: async function () {
      axios.defaults.headers.common['Authorization'] = await getAuth().currentUser.getIdToken()
      axios.post(URL + '/logs', {
        targetId: 0,
        title: this.postTitle,
        detail: this.postDetail
      })
        .then((res) => { console.log(res) })
        .catch((error) => { console.log(error) })
      this.postTitle = ''
      this.postDetail = ''
      this.overlay = false
    }
  }

}
</script>

<style>
</style>
