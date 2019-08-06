// pages/newmovie/newovie.js
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

    /*
      数据请求
    */
    var that = this
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/coming_soon',
      header: {
        'Content-Type': 'json'
      },
      success: function (result) {
        var subjects = result.data.subjects;
        console.log(subjects)
        for (var i = 0; i < subjects.length; i++) {
          /* 电影名 */
          var title = subjects[i].title
          /* 导演 */
          var directors = subjects[i].directors
          var directorsname = new Array()
          for (var j = 0; j < directors.length; j++) {
            directorsname.push(directors[j].name)
          }
          var directorsnameStr = directorsname.join('/');
          /* 主演 */
          var catssname = new Array()
          for (var j = 0; j < (subjects[i].casts).length; j++) {
            catssname.push(subjects[i].casts[j].name)
          }
          var catssnameStr = catssname.join('/');
          /* 类型 */
          var typeStr = subjects[i].genres.join('/')
          /* 上映年份 */
          var date = subjects[i].year
          var content = '电影名：' + title + "\n导演："
            + directorsnameStr + '\n主演：' + catssnameStr + '\n类型：'
            + typeStr + '\n上映年份：' + date + '(中国大陆)'
          subjects[i].content = content
        }
        /* 向data中的数据赋值 */
        that.setData({
          movieList: subjects
        })
      }
    })
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