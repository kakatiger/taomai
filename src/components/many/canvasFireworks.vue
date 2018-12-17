<template>
  <div class='fireWorks'>
      <canvas id="canvas_title" width="300px" height="130px"></canvas>
  </div>
</template>
<script>
  export default{
    data(){
      return{h1:100,r1:5,
      timer:setInterval(()=>this.printFireworks_up(40),10) 
      }
    },
    methods:{
      printFireworks_up(x){
        var c3 = document.getElementById('canvas_title')
        var ctx = c3.getContext('2d')
        ctx.clearRect(0,0,150,130)
        ctx.beginPath()
        ctx.lineWidth = 1
        ctx.fillStyle='#c4d3ec'
        ctx.arc(x,this.h1,8,0,360)
        ctx.fill();
        this.h1-=1
      },
      fireWorksBigger(x,y,r){
        if(this.h1<50){
          var that = this
          var c3 = document.getElementById('canvas_title')
          var ctx = c3.getContext('2d')
          clearInterval(this.timer)
          ctx.beginPath()
          ctx.clearRect(0,0,300,130)
          var p3 = new Image()
          p3.src = 'static/img/canvas/fire1.png'
          p3.onload = function(){
            ctx.save()
            ctx.translate(x,y)
            ctx.drawImage(p3,r,r,8,8)
            var deg=0
            var t2=setInterval(function(){
              ctx.beginPath()
              ctx.rotate(30*Math.PI/180)
              deg+=30
              ctx.drawImage(p3,r,r,8,8)
              if(deg>=360){
                ctx.restore()                
                var t3=setTimeout(function(){ that.r1+=3},1000)
                if(that.r1>=25){
                  clearTimeout(t3)
                  ctx.clearRect(0,0,300,130)
                  deg=0
                  that.r1=5
                }
                clearInterval(t2)
              }
            },10)
            
          }
        }
      }
    },
    watch:{
      h1(){
        this.fireWorksBigger(40,50,this.r1)
      },
      r1(){
        this.fireWorksBigger(40,50,this.r1)
      }
    },
    mounted(){
    }
  }
</script>
<style>
  #canvas_title{
    border:1px solid red;
  }
</style>