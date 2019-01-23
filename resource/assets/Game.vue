<template>
    <div class="game-item" id="myBtn">
            <img class="game-img"  src="https://cf.geekdo-images.com/itemrep/img/xW22wt5_wk_8sWLsVR_5E4t2v-g=/fit-in/246x300/pic3122349.jpg" alt="Italian Trulli">
            <h2 class="game-name">game.primaryGameName</h2>
            <div class="inner-game-box">
                <p class="player-count">1-8 Players</p>
                <p class="game-time">120-360 Min</p>            
            </div>           
        </div>
</template>

<script>
var btn = document.getElementById("myBtn");

export default {
    name: 'Game',
    props: ["game"],
}
</script>

<style scoped>
    .game-item {
    background-color: rgba(189, 189, 189, 0.603);
    border: 1px solid rgba(0, 0, 0, 0.8);
    border-radius: 5%;
    font-size: 20px;
    text-align: center;
    }
    
  ::-webkit-scrollbar {
      width: 0px;
      background: transparent;
  }
  
  .game-box{
      grid-template-columns: 1fr 1fr;
  }

  .inner-game-box {
    grid-column: col 3 /span 2;
    grid-row:  row 3;
    display: grid;
    grid-template-columns: 1fr 1fr;
}
  
  .game-img {
      grid-column: 1 / 3;
      grid-row: 1;
  }
  
  .game-text {
      grid-column: 1 / 3;
      grid-row: 2;
  }
  
  .player-count {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row: 1;
      padding: 5px;
  }
  
  .game-time {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row: 1;
      padding: 5px;
  }

  .grid-item h2 {
      font-size: 30px;
  }
  </style>

