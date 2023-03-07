<template>
  <div id="app">
    <div>

    </div>
    <div class="container" v-show='true'>
      <!-- <div>
        <p class="name">[CN] PATHFINDER 1v1 ChengDu_2</p>
        <p class="ip">43.136.173.202:37020</p>
        <p>playerCount <span class="now">34</span></p>
        <p>maxPlayers <span class="max">50</span></p>
      </div> -->
      <div v-for="(info,index) in infos[0]" :key="index">
        <p class="name">{{info.name}}</p>
        <p class="ip">{{info.ip}}:{{info.port}}</p>
        <p class="key">{{info.key}}</p>
        <p><strong>在线玩家数</strong> <span class="now">{{info.playerCount}}</span></p>
        <p><strong>最大玩家数</strong> <span class="max">{{info.maxPlayers}}</span></p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      infos:[]
    }
  },
  methods:{
    async getInfo(){
      let res = await axios.post('/servers',{
        data:{'version': 'VGameSDK007'}
        })
      console.log(res.data.servers)
      this.infos.push(res.data.servers)
      console.log(this.infos)
    }
  },
  mounted(){
    this.getInfo()
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 16px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

::selection {
    background: #ccc;
}

.container {
  width: 800px;
  padding: 50px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  margin: 50px auto;
  border-radius: 20px;
  position: relative;
  background: linear-gradient(to bottom, #e66465, #9198e5);
}

.container::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #22d3ee, #0ea5e9);
  left: 0;
  top: 0;
  border-radius: 20px;
  z-index: -1;
  transform: rotate(-3deg);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

.container div{
  margin-top: 20px;
  padding:13px 0;
  border-radius: 20px;
  border: 1px solid #fff;
  box-shadow: 5px 8px 3px teal;
}

.container div:nth-child(2n){
    background-color: rgb(0, 200, 200);
}
.container div:nth-child(2n+1){
    background-color: rgb(25, 221, 221);
}

.container div p{
  height:25px;
  line-height: 25px;
  color: rgb(95, 83, 83);
}

.container div .name,.container div .ip,.container div .key{
  color:#fff;
}

.container .now{
  color:rgb(0, 91, 0);
  font-size: 20px;
  font-weight:bold;
  vertical-align: -1px;
}
.container .max{
  color:red;
  font-size: 20px;
  font-weight:bold;
  vertical-align: -1px;
}
</style>
