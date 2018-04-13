/*var weather= '';
$.ajax({

	url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=吕梁",
	dataType:"jsonp",
	type:"get",
	success:function(obj){

		console.log(obj);
		weather=obj.data.weather;
		console.log(weather.dat_condition);
	}
})*/

$.ajax({
  url:"https://www.toutiao.com/stream/widget/local_weather/city/",
  dataType:"jsonp",
  type:"get",
  success:function(obj){ 
      city=obj.data;  
      redercity(city);
   }  
})

// 渲染数据函数
 function updata(weather){
 	var current_condition=document.querySelector(".continet");
 	current_condition.innerHTML=weather.current_condition;
 	var city_name=document.querySelector(".city");
 	city_name.innerHTML=weather.city_name;
    var current_temperature=document.querySelector(".temp");
    current_temperature.innerHTML=weather.current_temperature+"°";
    // 今天最高最低气温修改
    var day_condition=document.querySelector("#day_condition");
    day_condition.innerHTML=weather.day_condition;
    var dat_high_temperature=document.querySelector("#dat_high_temperature");
    dat_high_temperature.innerHTML=weather.dat_high_temperature;
    var dat_low_temperature=document.querySelector("#dat_low_temperature");
    dat_low_temperature.innerHTML=weather.dat_low_temperature+"°";
    // 明天最高最低气温修改
    var tomorrow_condition=document.querySelector("#tomorrow_condition");
    tomorrow_condition.innerHTML=weather.tomorrow_condition;
    var tomorrow_high_temperature=document.querySelector("#tomorrow_high_temperature");
    tomorrow_high_temperature.innerHTML=weather.tomorrow_high_temperature;
    var tomorrow_low_temperature=document.querySelector("#tomorrow_low_temperature");
    tomorrow_low_temperature.innerHTML=weather.tomorrow_low_temperature+"°";
    // 今明两天图片修改
    var dat_weather_icon_id=document.querySelector("#dat_weather_icon_id");
    dat_weather_icon_id.style=`background-image:url(img/${weather.dat_weather_icon_id}.png)`;
    var tomorrow_weather_icon_id=document.querySelector("#tomorrow_weather_icon_id");
    tomorrow_weather_icon_id.style=`background-image:url(img/${weather.tomorrow_weather_icon_id}.png)`;
   // 声明变量字符串类型
    var str="";
    // 魔板字符串 循环
    weather.hourly_forecast.forEach((item,index)=>{
      str=str+`
      <div class="now">
        <h1 class="now_time">${item.hour}:00</h1>
        <div class="now_icon" style="background-image:url(img/${item.weather_icon_id}.png)"></div>
        <h2 class="now_temp">${item.temperature}°</h2>
       </div>
      `
    })
    $(".wrap").html(str);
    // for(var i in weather.hourly_forecast ){
    // 	//创建now元素
    // 	//创建div
    // 	var now=document.createElement("div");
    // 	// 添加类名
    // 	now.className="now";
    // 	// 插入到页面中
    // 	// 获取父元素
    // 	var wrap=document.querySelector(".wrap");
    // 	wrap.appendChild(now);

    //     // 创建时间元素
    //     var h1=document.createElement("h1");
    //     h1.className="now_time";
    //     //这儿不用获取父元素，因为上面获取过了
    //     h1.innerHTML=weather.hourly_forecast[i].hour+":00";
    //     now.appendChild(h1);
    //     //创建背景元素
    //     var now_icon=document.createElement("div");
    //     now_icon.className="now_icon";
    //     now_icon.style=`background-image:url(img/${weather.hourly_forecast[i].weather_icon_id}.png)`;
    //     now.appendChild(now_icon);
    //     //创建最低温度元素
    //     var temperature=document.createElement("h2");
    //     temperature.className="now_temp";
    //     temperature.innerHTML=weather.hourly_forecast[i].temperature+"°";
    //     now.appendChild(temperature);
    // }
    var str2="";
    weather.forecast_list.forEach((item,index)=>{
       str2=str2+`
             <div class="con">               
                <div class="date">${item.date.slice(5,7)}/${item.date.slice(8)}</div>
                <div class="wealth">${item.condition}</div>
                <div class="www" style="background-image:url(img/${item.weather_icon_id}.png)"></div>
                <div class="con_high">${item.high_temperature}</div>
                <div class="con_low">${item.low_temperature}</div>
                <div class="wwww"></div>
                <div class="con_weaL">阴</div>
                <div class="con_wind">${item.wind_direction}</div>
                <div class="con_level">${item.wind_level}级</div>
            </div>
       `
      
    })
    $(".warp1").html(str2);
    // for(var i in weather.forecast_list){
    //    var con=document.createElement("div");
    //    con.className="con";
    //    var warp1=document.querySelector(".warp1"); 
    //    warp1.appendChild(con); 
    // //星期开始
    //    // 创建时间元素 字符串的拼接
    //     var date=document.createElement("div");
    //     date.className="date";  
    //    var cc =weather.forecast_list[i].date.substring(5,7);
    //    var bb=weather.forecast_list[i].date.substring(8,10); 
    //    date.innerHTML=cc+"/"+bb;
    //     con.appendChild(date);       
    //   /*  var aa=weather.forecast_list[i].date;
    //     console.log(aa);
    //     var c=aa.substring(5,10);
    //     console.log(c);//截取字符串的详细
    //     */
    //     // 修改天气
    //     var wealth=document.createElement("div");
    //     wealth.className="wealth";
    //     wealth.innerHTML=weather.forecast_list[i].condition;
    //     con.appendChild(wealth);
    //     // 修改背景图片
    
    //     var www=document.createElement("div");
    //     www.className="www";
    //     www.style=`background-image:url(img/${weather.forecast_list[i].weather_icon_id}.png)`;
    //     con.appendChild(www);

    //     // 修改最高温
    //     var con_high=document.createElement("div");
    //     con_high.className="con_high";
    //     con_high.innerHTML=weather.forecast_list[i].high_temperature;
    //     con.appendChild(con_high);
    //     //修改最低温
    //     var con_low=document.createElement("div");
    //     con_low.className="con_low";
    //     con_low.innerHTML= weather.forecast_list[i].low_temperature; 
    //     con.appendChild(con_low);
    //           //修改风
    //     var con_wind=document.createElement("div");
    //     con_wind.className="con_wind";
    //     con_wind.innerHTML=weather.forecast_list[i].wind_direction; 
    //     con.appendChild(con_wind); 
    //     //修改几级
    //     var con_level=document.createElement("div");
    //     con_level.className="con_level";
    //     con_level.innerHTML=weather.forecast_list[i].wind_level+"级";
    //     con.appendChild(con_level); 
    //  }   
    //星期结束
    //渲染城市开始
  
 }
   function redercity(city){
      for(var m in city){
      //创建省级div
      var remen=document.createElement("div");
      remen.className="remen";
         //获取父元素 
      var city1=document.querySelector(".city1");
      // 渲染省级内容
      remen.innerHTML=[m];
      // 创建市级div、
      var con1=document.createElement("div");
      con1.className="con1";
     // 遍历市级div
     for(var n in city[m]){
      // 创建市级元素
      var son=document.createElement("div");
       son.className="son";
       // 渲染市级内容
       son.innerHTML=n;
       // 插入到页面中
       con1.appendChild(son);
      }
      city1.appendChild(remen);
      city1.appendChild(con1);
      } 
    
     } 
function ajax(str){
  var url1=`https://www.toutiao.com/stream/widget/local_weather/data/?city=${str}`
  $.ajax({
    url:url1,
    dataType:"jsonp",
    type:"get",
    success:function(obj){
      // console.log(obj);
      // 获取数据
       var weather=obj.data.weather;
      updata(weather);
      
      $(".location").css({"display":"none"})
      $(".allnone").addClass('block');


    }
  })
}
 // 页面加载完成以后执行
 window.onload=function(){
 
 	// updata();
        $(".son").on("click",function(){  
            var cityh=this.innerHTML;
            ajax(cityh);       
        })
        $(".city").on("click",function(){
          $(".location").css({"display":"block"});
        }) 
        //点击搜索框变成搜索
        $("input").on("focus",function(){         
          $(".cancl").html("搜索");
        })
        $(".cancl").on("click",function(){
          var button=document.querySelector(".cancl");
          if(button.innerHTML=="取消"){
             $(".location").css({"display":"none"});

          }
          else if(button.innerHTML=="搜索"){        
            var text1=document.querySelector("input").value;
            // if(text1.innerHTML==".son"){
                 
            // }
            
            for(var i in city){
              for(var j in city[i]){
                 if(j==text1){
                      flagFind = true;
                     ajax(text1);
                     return; 
                  }
                 
                 }
              }        
              alert("没有该城市");
                     
          }
        })       
}     

 
