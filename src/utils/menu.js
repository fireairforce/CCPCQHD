export const allMenu = [
    {
      name: '首页',
      url: 'index',
      icon: 'home',
    }, {
      name: 'wdnb',
      url: 'wdnb',
      icon: 'bars',
      children: [
        { name: 'wdnb', url: 'wdnb' },
      ]
    }, {
      name: '画廊模块',
      url: 'pic',
      icon: 'edit',
      children: [
        { name: '时光相片', url: 'album' },
      ]
     
    //, {
    //   name: '搜索模块',
    //   url: 'search',
    //   icon: 'search',
    //   children: [
    //     { name: '搜索引擎', url: 'searchEngine' },
    //   ],
     }]