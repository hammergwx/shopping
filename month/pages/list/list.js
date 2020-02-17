Page({

  /**
   * 页面的初始数据
   */
  data: {
      currentid:0,
      list:["1.看一场私人电影","2.玩一次保龄球","3.玩一次射箭","4.练出几首自己的经典曲目","5.在大庭广众之下演讲一次"],
      
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  tap: function (e) {
    var that = this
    console.log(e.target.dataset.tapid)
    that.setData({ currentid: e.target.dataset.tapid })
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
    
  }
})