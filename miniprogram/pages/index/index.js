//index.js
const app = getApp()
Page({
  data:{
    avatarUrl: './user-unlogin.png',
    userInfo: {},
  },
  onLoad: function() {
    this.setData({
      avatarUrl:app.avatarUrl,
      userInfo:app.userInfo
    });
  },

  featuresChoose: function(e){
    var type = parseInt(e.target.id);
    switch (type){
        case 0://图片操作
        wx.navigateTo({
          url: '../image/image',
        });
        break; 
        case 1://网络操作
        wx.navigateTo({
          url: '../sockect/sokect',
        })
        break;
        case 2://视频操作
        wx.navigateTo({
          url: '../videos/videos',
        })
        break;
        case 3://数据操作
        break;
        case 4://特效操作
        break;

    }
  }



})
