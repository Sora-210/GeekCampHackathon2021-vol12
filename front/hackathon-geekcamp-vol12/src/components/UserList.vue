<template>
  <v-container class="py-8 px-6" fluid>
    <v-card class="mx-auto" max-width="400">
      <v-list>
        <v-list-item-group v-model="model" mandatory color="indigo">
          <v-list-item v-for="user in userList" :key="user.id">
            <router-link :to="{name: 'Target', params: {id: user.id}}" class="signup-link">
              <v-list-item-icon>
                <v-icon v-text="user.name"></v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title v-text="user.name"></v-list-item-title>
              </v-list-item-content>
            </router-link>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios'
const URL = 'https://dev.mylog.sora210.dev/api'

export default {
  data: () => ({
    userList: '',
    model: 1
  }),
  mounted () {
    this.load()
  },
  methods: {
    load () {
      axios.get(URL + '/users')
        .then(response => { this.userList = response.data })
        .catch((error) => { console.log(error) })
      console.log(this.userList)
    }
  }
}

</script>
