export const allMenu = [
    {
      name: '导航栏修改',
      url: 'manage/index',
      icon: 'home',
    }, {
      name: '图片修改',
      url: 'manage/slider',
      icon: 'bars',
      
    }, {
      name:'发布信息',
      url:'manage/publish',
      icons:'search',
      children:[
        {name:'比赛发布',url:'manage/game'},
        {name:'新闻发布',url:'manage/news'}
      ]
    }
    
     
    //, {
    //   name: '搜索模块',
    //   url: 'search',
    //   icon: 'search',
    //   children: [
    //     { name: '搜索引擎', url: 'searchEngine' },
    //   ],
    //  }
    ]