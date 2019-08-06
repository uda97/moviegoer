// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
	content:'',
	hidden:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	/* 请求后台取值并将值赋给content */
	wx.showLoading({
		title:"加载中...."
	})
	var page=this
	var id=options.id
	wx.request({
		url:'https://douban.uieee.com/v2/movie/subject/'+id,
		header:{
			'Content-Type':'json'
		},
		success:function(result){
			var subject=result.data
			var content=''
			var title=subject.title
			/* 导演 */
			var directors=subject.directors
			var directorsname=new Array()
			for (var j = 0; j < directors.length; j++) {
				directorsname.push(directors[j].name)
			}
			var directorsnameStr=directorsname.join('/');
			/* 主演 */
			var catssname=new Array()
			for (var j = 0; j < (subject.casts).length; j++) {
				catssname.push(subject.casts[j].name)
			}
			var catssnameStr=catssname.join('/');
			/* 类型 */
			var typeStr=subject.genres.join('/')
			/* 上映年份 */
			var date=subject.year
			var content='电影名：'+title+"\n导演："
			+directorsnameStr+'\n主演：'+catssnameStr+'\n类型：'
			+typeStr+'\n上映年份：'+date+'(中国大陆)'
			subject.content=content
			console.log(subject.content)
			page.setData({
				movie:subject,
				hidden:true
			})
			if(page.data.hidden){
				wx.hideLoading()
			}
			console.log(page.data.movie)
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

  },
  playvideo:function(e){
	  wx.navigateTo({
	  	url:'../video/video?videourl='+e.currentTarget.id
	  })
  }
})