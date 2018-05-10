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
export {defaultImg,toTime, formateData,formateMoney}
