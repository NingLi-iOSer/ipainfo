
function getBrowserType() {
  var Sys = {};
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('iphone') > -1 || ua.indexOf('ipod') > -1 || ua.indexOf('ipad') > -1) {
    open('itms-services://?action=download-manifest&url=https://coding.net/u/lining2017/p/ipainfo/git/raw/master/manifest.plist')
  } else {
    alert('请使用 iOS 设备下载')
  }
}
