//设置头像的默认图片
let defaultImg = function (value) {
  if (value === "") {
    return "/static/img/ok-icon-red.png";
  } else {
    return value;
  }
}

//时间格式过滤器
let toTime = function (ns) {
  var d = new Date(ns);
  var dformat = [d.getFullYear(), d.getMonth() + 1, d.getDate()].join('-');
  return dformat;
}


//格式化时间(yyyy-MM-dd)
let formateData = function (value) {
  return value.substring(0, 10);

}

//元素的补零计算
function addZero(val){
  if(val < 10){
    return "0" +val;
  }else{
    return val;
  }
}
//格式化时间
let formateTime = function (value,type) {
  var dataTime="";
  var data = new Date();
  data.setTime(value);
  var year   =  data.getFullYear();
  var month  =  addZero(data.getMonth() + 1);
  var day    =  addZero(data.getDate());
  var hour   =  addZero(data.getHours());
  var minute =  addZero(data.getMinutes());
  var second =  addZero(data.getSeconds());
  if(type == "YMD"){
    dataTime =  year + "-"+ month + "-" + day;
  }else if(type == "YMDHMS"){
    dataTime = year + "-"+month + "-" + day + " " +hour+ ":"+minute+":" +second;
  }else if(type == "YMDHM"){
    dataTime = year + "-"+month + "-" + day + " " +hour+ ":"+minute;
  }else if(type == "HMS"){
    dataTime = hour+":" + minute+":" + second;
  }else if(type == "YM"){
    dataTime = year + "-" + month;
  }
  return dataTime;//将格式化后的字符串输出到前端显示
}

//格式化金额(￥xxx.xx)
let formateMoney = function (value) {
  var money=value.toString();
  var moneyArray=money.split('.');
  if(moneyArray.length==1){
    return money+'.00';
  }
  else if(moneyArray[1].length==1){
    return money+'0';
  }else {
    return money;
  }
}

export {defaultImg,toTime, formateData,formateMoney,formateTime}
