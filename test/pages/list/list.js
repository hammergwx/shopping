// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nav: [{
        "name": "目标",
        "main": [{
            "id": 1,
            "title": "第一次汽车爆胎",
            "flag": false
          },
          {
            "id": 2,
            "title": "第一次汽车爆胎",
            "flag": false
          },
          {
            "id": 3,
            "title": "第一次汽车爆胎",
            "flag": false
          },
          {
            "id": 4,
            "title": "第一次汽车爆胎",
            "flag": false
          },
          {
            "id": 5,
            "title": "第一次汽车爆胎",
            "flag": false
          },
          {
            "id": 6,
            "title": "第一次汽车爆胎",
            "flag": false
          }
        ]
      },
      {
        "name": "习惯",
        "main": [{
            "id": 1,
            "title": "第一次汽车爆胎",
            "flag": false
          },
          {
            "id": 2,
            "title": "第一次汽车爆胎",
            "flag": false
          },
          {
            "id": 3,
            "title": "第一次汽车爆胎",
            "flag": false
          },
          {
            "id": 4,
            "title": "第一次汽车爆胎",
            "flag": false
          },
          {
            "id": 5,
            "title": "第一次汽车爆胎",
            "flag": false
          },
          {
            "id": 6,
            "title": "第一次汽车爆胎",
            "flag": false
          }
        ]
      },
      {
        "name": "手记",
        "main": []
      }
    ],
    ind: 0
  },
  onTab(e) {
    this.setData({
      ind: e.currentTarget.dataset.index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})