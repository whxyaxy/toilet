   const markers = [{
        icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b1.png',
        position: [114.438666,30.510833],
        number:1,
        type:'normal'
    }, {
        icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b2.png',
        position: [114.438954,30.50822],
        number:2,
        type:'normal'
    }, {
        icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b3.png',
        position: [114.445565,30.510087],
        number:3,
        type:'normal'
    }, {
        icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b4.png',
        position: [114.432199,30.5127],
        number:4,
        type:'normal'
    }, {
        icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b5.png',
        position: [114.45498,30.511705],
        number:5,
         type:'normal'
    }, {
        icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b6.png',
        position: [114.414664,30.511767],
        number:6,
        type:'normal'
    }, {
        icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b7.png',
        position: [114.441397,30.518736],
        number:7,
        type:'normal'
    }, {
        icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b8.png',
        position: [114.448943,30.507286],
        number:8,
        type:'warn'
    }, {
        icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b9.png',
        position: [114.457423,30.505482],
        number:9,
        type:'warn'
    }, {
        icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b10.png',
        position: [114.431767,30.494591],
        number:10,
        type:'danger'
    }];
    
  function intMap(){
   var map = new AMap.Map("container", {
        resizeEnable: true,
        center: [114.429037,30.505108],
        zoom:14
   });
 
   AMapUI.loadUI(['overlay/SimpleMarker'], function(SimpleMarker) {
   	 	for(var i = 0; i < markers.length; i++) {
		 	 		var marker = new SimpleMarker({
		 	 			iconLabel: {
                innerHTML: markers[i].number,
                style: {
                    color: '#fff',
                    fontSize: '120%',
                    marginTop: '2px'
                }
            },
		 	 			iconStyle: '<i class="iconfont" style="color:'+judgeColor(markers[i].type)+';font-size:30px;text-shadow: 0px 4px 5px rgba(0,0,0,.34);">&#xe62f;</i>',
		 	 			map: map,
		 	 			position: markers[i].position
		 	 		});
		 	 		//闭包
		 	 		!function(i){
			 	 			marker.on('click', function(e) {
			 	 			$('.detail').toggle();
			 	 			$('.detail').css({
			 	 				"margin-left": "-300px",
			 	 				"left": "50%",
			 	 				"top": "50%",
			 	 				"margin-top": "-" + $('.detail').height() / 2 + "px"
			 	 			})
			 	 			map.setCenter( markers[i].position);
			 	 		});
		 	 		}(i);
		 	 		/*marker.on('click', function(e) {
		 	 			$('.detail').toggle();
		 	 			$('.detail').css({
		 	 				"margin-left": "-300px",
		 	 				"left": "50%",
		 	 				"top": "50%",
		 	 				"margin-top": "-" + $('.detail').height() / 2 + "px"
		 	 			})
		 	 			map.setCenter( markers[i].position);
		 	 		});*/
		 	 		
 	 	     }
   	});
   	
    AMap.plugin(['AMap.ToolBar'], function() {
        map.addControl(new AMap.ToolBar({
            map: map
        }));
    });
 
    map.setFitView();
 }  
    
    
  $(function(){
    	intMap();
    	var barHeight=$('.sideNav').height(),
    	    autoHeight=$(window).height();
    	$("#container").css("height",(barHeight>autoHeight)?barHeight:autoHeight);
    	$('.bTime').html(getNowFormatDate());
    	 setInterval(function(){$(".sTime").html(current)},1000);
    	 intProgress();
    })
    
 //查看详情   
function showDis(e){
	$('.specificDescription').toggle();
	$(e).html($(e).html()=="点击查看更多"?"点击收起":"点击查看更多");

	$('.detail').css({
		"margin-left":"-300px",
		"left":"50%",
		"top":"50%",
		"margin-top":"-"+$('.detail').height()/2+"px"
		})
	
}

//获取当前时间
function current(){
         var d=new Date(),strMini='';
         strMini +=(d.getHours()>9)?(d.getHours()+':'):('0'+d.getHours()+':');
         strMini +=(d.getMinutes()>9)?(d.getMinutes()+':'):('0'+d.getMinutes()+':');
         strMini +=(d.getSeconds()>9)?(d.getSeconds()):('0'+d.getSeconds());
         return  strMini; 
     }

//获取当前时间h m s
function current(){
         var d=new Date(),strMini='';
         strMini +=(d.getHours()>9)?(d.getHours()+':'):('0'+d.getHours()+':');
         strMini +=(d.getMinutes()>9)?(d.getMinutes()+':'):('0'+d.getMinutes()+':');
         strMini +=(d.getSeconds()>9)?(d.getSeconds()):('0'+d.getSeconds());
         return  strMini; 
     }

//获取当前时间y m d
function getNowFormatDate() {
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year +"年"+ seperator1 + month + "月"+ seperator1 +strDate+"日";
        return currentdate;
    }

//初始化控制进度条
function intProgress(){
		setInterval(function() {
			$('.progress-box1').css({
				width:$('.percent1').html()
			})
			$('.progress-box2').css({
				width:$('.percent2').html()
			})
			$('.progress-box3').css({
				width:$('.percent3').html()
			})
		},2000)
 }

//根据状态判断颜色色织
function judgeColor(type){
	if(type=="normal"){
		return "#21af6e"
	}else if(type=="warn"){
		return "#ffd258"
	}else if(type=="danger"){
		return "#ff0012"
	}
}
