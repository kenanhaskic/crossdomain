<template>
  <div id="app">
 <button @click="getime">send request</button>
 XX {{milisecond}} XX
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    milisecond:0
    }
  },
  methods:{
    getime(){
      let time=new Date().getMilliseconds();
      this.axios.get('http://output.jsbin.com/sucebovoka.json')
      .then((response)=>{
        console.log(response.data)
      let end=new Date().getMilliseconds();
      this.milisecond=end-time;
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
