
function getBrowserType() {
  var Sys = {};
  var ua = navigator.userAgent.toLowerCase();
  var s;
  (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? Sys.ie = s[1] :
    (s = ua.match(/msie ([\d\.]+)/)) ? Sys.ie = s[1] :
      (s = ua.match(/edge\/([\d\.]+)/)) ? Sys.edge = s[1] :
        (s = ua.match(/firefox\/([\d\.]+)/)) ? Sys.firefox = s[1] :
          (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? Sys.opera = s[1] :
            (s = ua.match(/chrome\/([\d\.]+)/)) ? Sys.chrome = s[1] :
              (s = ua.match(/version\/([\d\.]+).*safari/)) ? Sys.safari = s[1] : 0;


  if (Sys.safari) {
    open('itms-services://?action=download-manifest&url=https://coding.net/u/lining2017/p/ipainfo/git/raw/master/manifest.plist')
  } else {
    alert('请使用 Safari 浏览器下载')
  }
}
