// pages/QRcode/QRcode.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image:"",
    text:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({app:app})
    if(options.class == 'jishu'){
      this.setData({ image: app.globalData.host + "image/jishu.jpg"})
      this.setData({text: "技术部，用技术方便你的大学生活。"})
    }
    else if(options.class == 'tianshi'){
      this.setData({ image: app.globalData.host + "image/tianshi.jpg" })
      this.setData({
        text: "校园天使，一个送餐到床，真正服务于铁大学子的团队。" })
    }
    else if(options.class == 'yunying'){
      this.setData({ image: app.globalData.host + "image/yunying.jpg" })
      this.setData({ text: "运营部，让你付出就能够获得回报的部门。" })
    }
    else if(options.class == 'shichang'){
      this.setData({ image: app.globalData.host + "image/shichang.jpg" })
      this.setData({ text: "市场部：负责日常财务及营销策划等工作，并长期与校外商家企业和校内创业团队进行接洽合作。" })
    }
    else if(options.class == 'boss'){
      this.setData({ image: app.globalData.host + "image/boss.jpg" })
      this.setData({ text: "boss就这个" })
    }
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
  preview:function(e){
    console.log(e)
    wx.previewImage({
      urls: [e.currentTarget.dataset.image]
    })
  }
})