// miniprogram/pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoItems:[]
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     var images = this.loadImages();
     this.setData({videoItems:images});
  },

  loadImages: function(){
    var title = "我是一个视频";
    var subTitle = "我是一个视频简介，视频的音乐很欢快，可可可，哈哈哈，么么哒，你喜欢就点一个赞！";
    var images = [];
    for(var i = 1;i < 21;i++){
       var item = new Object();
       item.title = title+i;
       item.subTitle = subTitle+i;
       item.image = "./videoImage.jpg";
       images[i-1] = item;
    }
    return images;
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
})