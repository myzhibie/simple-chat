define(function(){return{bind:function(obj,evtArgs){obj.ontouchstart=function(e){console.log("start"),e.preventDefault(),this.startX=e.targetTouches[0].pageX,this.startY=e.targetTouches[0].pageY},obj.ontouchmove=function(e){e.preventDefault(),e.targetTouches.length>1||e.scale&&1!==e.scale||(this.endX=e.targetTouches[0].pageX,this.endY=e.targetTouches[0].pageY)},obj.ontouchend=function(e){Math.abs(this.endX-this.startX)>Math.abs(this.endY-this.startY)&&(this.endX-this.startX>50?evtArgs.swiperight&&evtArgs.swiperight():this.endX-this.startX<-50&&evtArgs.swipeleft&&evtArgs.swipeleft(),this.endY-this.startY>50?evtArgs.swipedown&&evtArgs.swipedown():this.endY-this.startY<-50&&evtArgs.swipeup&&evtArgs.swipeup())}}}});