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


export {toTime, formateData}
