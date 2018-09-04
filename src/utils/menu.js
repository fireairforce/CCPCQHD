export const allMenu = [
    {
      name: '导航栏修改',
      url: 'manage/index',
      icon: 'home',
    }, {
      name: '媒体库',
      url: 'manage/slider',
      icon: 'bars',
      
    }, {
      name:'发布信息',
      url:'manage/publish',
      icon:'plus',
      children:[
        {name:'比赛发布',url:'manage/game'},
        {name:'新闻发布',url:'manage/news'}
      ]
    }
    , {
      name: '信息修改',
      url: 'manage/modify',
      icon: 'delete',
      children: [
        { name: '比赛修改', url: 'manage/competemodify' },
        {name:'信息修改',url:'manage/focusnewsmodify'}
      ],
     }
    ]
