//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    opacity:0,
    animation:'',
    pointerevents:false,
  },
  //事件处理函数

startAnimation:function(){

var animation=wx.createAnimation({
  duration:1000,
  delay:200,

})

this.setData({
  pointerevents:true,
  opacity:0,


},function(){
  this.setData({
    animation:animation.translateY(-220).opacity(1).step().export()
  })


})




},

jump:function(){

  console.log("haha");
var that=this;
  var random = Math.floor(Math.random()*(21-0+1)+0);
  var bool = Math.floor(Math.random()*(1-0+1)+0);


  wx.navigateTo({
    url:'../result/result?random='+random+'&weizhi='+bool,
    success:function(){
      that.setData({
        pointerevents:false,
        animation:"",
      })

    }
  })


},

onShareAppMessage: function() {

  return {
      title: '塔罗占卜运程，两性关系解读，快来抽卡吧~',

    }

},









  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
