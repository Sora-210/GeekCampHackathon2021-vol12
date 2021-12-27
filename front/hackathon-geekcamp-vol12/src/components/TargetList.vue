<template>
  <v-container class="py-8 px-6" fluid>
    <v-card class="mx-auto" max-width="400">
      <v-list>
        <v-list-item-group mandatory color="indigo">
          <v-list-item v-for="target in targetList" :key="target.id">
            <router-link :to="{name: 'Target', params: {id: target.id}}" class="signup-link">
              <v-list-item-icon>
                <v-icon v-text="target.title"></v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title v-text="target.userId"></v-list-item-title>
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
    targetList: '',
    model: 1
  }),
  mounted () {
    this.load()
  },
  methods: {
    load () {
      axios.get(URL + '/targets')
        .then(response => { this.targetList = response.data })
        .catch((error) => { console.log(error) })
    }
  }
}

</script>
