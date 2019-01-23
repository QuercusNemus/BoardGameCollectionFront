<template>
    <div class="grid-container">
        <div v-bind:key="game.primaryGameName" v-for="game in games">
            <Game v-bind:game="game" />
        </div>    
    </div>    
</template>

<script>
import Game from 'Game.vue'

var config = {
  headers: {'userName': 'Eurig'}
};
export default {
    name: "GameList",

    el: '#fetchCollection',
    data () {
      return {
        games: null
      }
    },
    mounted () {
      axios
        .get('http://127.0.0.1:8080/api/collection/read', config)        
        .then(response => {
          console.log(response.data[0].primaryGameName)          
          this.games = response.data       
          })
    }
}
</script>

<style scoped>
    .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 20px;
    padding: 10px;
    justify-items: center;
    margin-top: 150px;
  }

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
}
</style>

