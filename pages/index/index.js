//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    verifyImg:""
  },
  //事件处理函数
  bindViewTap: function() {
   
  },
  onLoad: function () {
    let that = this
    this.setData({app,app})
    wx.getStorage({
      key: 'examNum',
      success: function(res) {
        console.log(res)
        that.setData({ examNumValue:res.data })
      },
    })
    wx.request({
      url: app.globalData.host + "getNoticeList",
      success(res){
        that.setData({notices:res.data})
      }
    })
  },
  submit:function(res){
    var number = res.detail.value.examNum.trim()
    if(number == '' || number.length < 8)
      wx.showModal({
        title: '准考证号错误',
        content: "请填入正确的准考证号",
        showCancel: false
      })
    else{
      wx.setStorage({
        key: 'examNum',
        data: number,
      })
      wx.navigateTo({
        url: '/pages/result/result?examNum=' + number
      })
    }
  },

  about: function(){
    wx.navigateTo({
      url: '/pages/about/about',
    })
  },

  showAuthor:function(){
    // wx.showModal({
    //   title: '联系我们',
    //   content: 'QQ：603631695',
    //   showCancel:false
    // })
    wx.navigateTo({
      url: '/pages/about/about',
    })
  },
  preview: function (e) {
    console.log(e)
    wx.previewImage({
      urls: ["https://www.tunan.work/qrcode.jpg"]
    })
  }
})
