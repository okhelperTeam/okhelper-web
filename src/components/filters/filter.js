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
  var d = new Date(ns * 1000);
  var dformat = [d.getFullYear(), d.getMonth() + 1, d.getDate()].join('-');
  return dformat;
}


//格式化时间(yyyy-MM-dd)
let formateData = function (value) {
  return value.substring(0, 10);

}


export {defaultImg,toTime, formateData}
