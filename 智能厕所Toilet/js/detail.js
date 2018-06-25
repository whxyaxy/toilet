intSmell();
	       	intHumidity();
	       	intWeather();
	       	intPower()
	       	intWater()
	       	intIn();
	       	intOut();
	       	intPerson();
        // 基于准备好的dom，初始化echarts实例
        //气味
        function intSmell(){
        var smellEchart = echarts.init(document.getElementById('smellEchart'));
		option = {
		    xAxis: {
		        type: 'category',
		        data: ['6:00', '10:00', '14:00', '18:00', '22:00', '02:00']
		    },
		    yAxis: {
		        type: 'value'
		    },
		    grid: {
			    	top:'10px',
			        left: '4%',
			        right: '4%',
			        bottom: '4%',
			        containLabel: true
			    },
		    series: [{
		        data: [11, 10, 30, 0, 20, 0],
		        type: 'line'
		    }]
		};
        smellEchart.setOption(option);
       }
        //湿度
        function intHumidity(){
         var humidityEchart = echarts.init(document.getElementById('humidityEchart'));
		option = {
		    xAxis: {
		        type: 'category',
		        data: ['6:00', '10:00', '14:00', '18:00', '22:00', '02:00']
		    },　　　　
		    yAxis: {
		        type: 'value'
		    },
		    grid: {
			    	top:'10px',
			        left: '4%',
			        right: '4%',
			        bottom: '4%',
			        containLabel: true
			    },
		    series: [{
		        data: [11, 10, 30, 0, 20, 0],
		        type: 'line',
		        smooth: true
		    }]
		};
        humidityEchart.setOption(option);
       }
        //温度
        function intWeather(){
	        var weatherEchart = echarts.init(document.getElementById('weatherEchart'));
	        option = {
			    xAxis: {
			        type: 'category',
			        boundaryGap: false,
			        data: ['6:00', '10:00', '14:00', '18:00', '22:00', '02:00']
			    },
			    yAxis: {
			        type: 'value'
			    }, 
			    grid: {
			    	top:'10px',
			        left: '4%',
			        right: '4%',
			        bottom: '4%',
			        containLabel: true
			    },
			    series: [{
			        data: [10, 18, 15, 5, 7, 6],
			        type: 'line',
			        areaStyle: {},
			         smooth: true
			    }]
			};
			weatherEchart.setOption(option);
       }
        
        //今日电量powerEchart
        function intPower(){
        	var powerEchart = echarts.init(document.getElementById('powerEchart'));
        	data = [["6:00",116],["7:00",129],["8:00",135],["9:00",86],["10:00",73],["11:00",85],["12:00",73],["13:00",68],["14:00",92],["15:00",130],["16:00",245],["17:00",139],["18:00",115],["19:00",111],["20:00",309],["21:00",206],["22:00",137],["23:00",128],["24:00",85],["00:00",94],["01:00",71],["02:00",106],["03:00",84],["04:00",93]];

			var dateList = data.map(function (item) {
			    return item[0];
			});
			var valueList = data.map(function (item) {
			    return item[1];
			});
			
			option = {
			    visualMap: [{
			        show: false,
			        type: 'continuous',
			        seriesIndex: 0,
			        min: 0,
			        max: 400
			    }],
			    tooltip: {
			        trigger: 'axis'
			    },
			    xAxis: [{
			        data: dateList
			    }],
			    yAxis: [{
			        splitLine: {show: false}
			    }],
			    grid: {
			    	top:'10px',
			        left: '4%',
			        right: '4%',
			        bottom: '4%',
			        containLabel: true
			    },
			    series: [{
			        type: 'line',
			        showSymbol: false,
			        data: valueList
			    }]
			};
          powerEchart.setOption(option);
        }
         //今日用水waterEchart
        function intWater(){
        	var waterEchart = echarts.init(document.getElementById('waterEchart'));
        	option = {
			    title: {
			        text: ''
			    },
			    tooltip: {},
			    xAxis: {
			    	data: ['6:00', '10:00', '14:00', '18:00', '22:00', '02:00']
			    },
			    yAxis: {},
			    grid: {
			    	top:'10px',
			        left: '4%',
			        right: '4%',
			        bottom: '4%',
			        containLabel: true
			    },
			    series: [{
			        name: '今日用水量',
			        type: 'bar',
			        data: [0.1, 0, 0.2, 0.3, 0.2, 0]
			    }]
			};
			waterEchart.setOption(option);
        }
        
        //今日入厕数
        function intIn(){
	        var inEchart = echarts.init(document.getElementById('inEchart'));
	        option = {
			    xAxis: {
			        type: 'category',
			        data: ['6:00', '10:00', '14:00', '18:00', '22:00', '02:00']
			    },　　　　
			    yAxis: {
			        type: 'value'
			    },
			    grid: {
			    	top:'10px',
			        left: '4%',
			        right: '4%',
			        bottom: '4%',
			        containLabel: true
			    },
			    series: [{
			        data: [11, 10, 30, 0, 20, 0],
			        type: 'line',
			        smooth: true
			    }]
			};
			inEchart.setOption(option);
       }
        
         //今日出厕数
        function intOut(){
	        var outEchart = echarts.init(document.getElementById('outEchart'));
	        option = {
			    xAxis: {
			        type: 'category',
			        data: ['6:00', '10:00', '14:00', '18:00', '22:00', '02:00']
			    },　　　　
			    yAxis: {
			        type: 'value'
			    },
			    grid: {
			    	top:'10px',
			        left: '4%',
			        right: '4%',
			        bottom: '4%',
			        containLabel: true
			    },
			    series: [{
			        data: [11, 10, 30, 0, 20, 0],
			        type: 'line',
			        smooth: true
			    }]
			};
			outEchart.setOption(option);
       }
        
        function intPerson(){
	        var personEchart = echarts.init(document.getElementById('personEchart'));
	        option = {
			    xAxis: {
			        type: 'category',
			        data: ['6:00', '10:00', '14:00', '18:00', '22:00', '02:00']
			    },　　　　
			    yAxis: {
			        type: 'value'
			    },
			    grid: {
			    	top:'10px',
			        left: '4%',
			        right: '4%',
			        bottom: '4%',
			        containLabel: true
			    },
			    series: [{
			        data: [11, 10, 30, 0, 20, 0],
			        type: 'line',
			        smooth: true
			    }]
			};
			personEchart.setOption(option);
       }
        