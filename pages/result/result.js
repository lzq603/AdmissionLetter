// pages/result/result.js
let app = getApp()
var that = null
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this
    this.setData({app:app})
    console.log(options)
    this.getAdmission(options.examNum)
    //this.getAdmission(18130827110336)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  
  getAdmission(examNum){
    wx.request({
      url: app.globalData.host + "getAdmission",
      data:{
        examNum:examNum
      },
      method: "get",
      success(res){
        that.setData({admission:res.data})
        if(res.data.id)
          that.loadMail()
      },
      fail(res){
        wx.showToast({
          title: '网络错误，请检查',
          image: '/image/close.png'
        })
      }
    })
  },
  loadMail:function(){
    let that = this
    let url = app.globalData.host + 'getLogistical?postid=' + that.data.admission.mailSign + '&com=youzhengguonei'
    
    wx.request({
      url: url,
      method: 'get',
      success(res) {
        console.log(res.data)
        that.setData({logistics:res.data})
      }
    })
  },

  copy:function(e){
    wx.setClipboardData({
      data: e.currentTarget.dataset.num,
      fail(res){
        wx.showToast({
          title: '复制失败',
          image:"/image/close.png"
        })
      }
    })
  }
})