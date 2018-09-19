import React, { Component } from 'react'
import { Row, Col, Anchor } from 'antd'
import { Link } from 'react-router-dom'
import AppHeader from '../AppHeader/AppHeader'
import './index.less'

const title2015 = `首届中国大学生程序设计竞赛在南阳理工举行`
const content2015 = `     　在首届中国大学生程序设计竞赛开幕式上，中国大学生程序设计竞赛协会执行主席、哈尔滨工业大学教授孙大烈说：“今天是个值得纪念的日子，从今天开始，中国大学生程序设计竞赛将谱写新的篇章！”孙大烈激情的开场白，引爆全场，偌大会场顿时掌声雷动。

　　10月17日到18日，地处豫西南盆地的南阳理工学院迎来一场盛会：来自清华大学、北京大学、中国科学院、浙江大学、复旦大学、武汉大学、上海交通大学、同济大学、吉林大学、中山大学、国防科学技术大学、哈尔滨工业大学等134所知名高校的245个代表队齐聚于此，国内各大名校的735名IT精英同台竞技，引来微信朋友圈一片刷屏。

　　比赛结果更加振奋人心：冠军、亚军和季军，分别由上海交通大学、北京航空航天大学、北京大学摘取。金奖由上海交通大学、北京航空航天大学、北京大学、清华大学、中山大学等24支代表队获得；银奖由复旦大学、南京航空航天大学、北京邮电大学、吉林大学、南京大学等48支代表队获得；铜奖由东道主南阳理工学院、上海大学、郑州大学、郑州轻工业学校等72支代表队获得。据了解，河南共有8所大学参赛，其中郑州大学、郑州轻工业学院、河南工业大学、南阳理工学院获得5项铜奖。

　　在开幕式上，清华大学邬晓钧博士说，以前我带队参加过很多比赛，但都是给其他国家“打工”，今天，中国终于有了自己的赛事，值得庆贺！

　　“本次中国大学生程序设计竞赛是中国程序设计方面的第一场比赛，各个学校选派的全部都是首席教练，参赛代表队是各个学校的最强阵容，代表了目前中国大学生程序设计的最高水平和最高规格，可谓是历届大学生程序设计竞赛参加学校最多、最全、规模最大的一场比赛。”中国大学生程序设计竞赛协会理事长、上海交通大学教授俞勇激情澎湃地说。

　　“中国大学生程序设计竞赛，作为首届国赛，放在南阳理工学院举行，对学校而言，无疑是一次不小的挑战。”南阳理工学院校长刘荣英说，我们举全校之力办好这场国赛，学校整个班子和老师们都热血沸腾，全身都涌动战斗的力量。我们用一个多月的时间，筹备这场最高赛事，这场比赛必将成为南阳理工学校历史上具有里程碑意义的一个崭新的开端。

　　南阳理工学院志愿者谷凯说，能在自己的大学校园里服务这样一场“国赛”，是我做梦也没有想到的，这有力证明了母校的实力、水平和声誉，我和同学们都感到无比的骄傲和自豪。

　　这样一场备受瞩目的“国赛”为何放在南阳理工学院这所非重点大学举办？面对大大的问号，孙大烈说，我们早已注意到，南阳理工学生这几年在国际国内各种赛事中摘金夺银，创造了很多奇迹，他们不甘示弱的进取和创新精神令我们为之赞叹，一个多月筹备一场国赛，南阳理工的速度再次让我们刮目相看。

　　2011年，南阳理工学院计算机科学与技术专业学生张云聪荣获全国软件人才设计与开发大赛一等奖，全国总排名第三，而这并非个案。据统计，在河南省ACM大学生程序设计竞赛中，南阳理工学院奖牌总数夺得五六七届三连冠，并于2013年成功举办第六届河南省ACM大学生程序设计竞赛；2013—2014年计算机与信息工程学院获得省级以上赛事奖项48个；2014—2015年获得省级以上赛事奖项55个……以创新和实力著称的南工学子早已享誉中原内外。

　　不仅如此，南阳理工学院计算机与信息工程学院毕业生高薪就业现象曾引发热议，并被各界媒体争相报道。

　　据相关数据显示，2015年全国高校毕业生749万，再创历史新高。一些毕业生毕业时一职难求，作为最难就业季的现实注解，戳中了很多人的痛处。而在南阳理工学院的计算机与信息工程学院，看到的却是一幅幅让人顿时热血沸腾的画面：南阳理工学院2012级计算机与信息工程学院学生杨闯亮大四未开学便被北京百度网讯 科技有限公司录用实习，实习结束，通过转正面试，被百度高薪录用。

　　与杨闯亮同一届的于红飞已被腾讯“抢走”，安鹏程也被赶集网“预订”……而他们的学长，2015届毕业生丁国强，被北京蓝汛通讯有限公司相中，第一年年薪就高达22万元；罗同龙也是南阳理工学院计算机与信息工程学院2015届毕业生，被国内最大的智能手机广告平台录用，年薪25万元……

　　据统计，在南阳理工学院，仅2014届计算机科学与技术专业50名应届毕业生中，年薪超过10万元的就有26人，毕业生被高薪聘用屡见不鲜，已经成为一种南工现象。

　　南阳理工学院党委书记邢勇说，南工现象的背后，饱含着南阳理工历届领导的高瞻远瞩，闪烁着无数南工人的智慧与汗水，更是南阳理工学院十几年来坚持“应用型本科办学”路子结出的硕果。`

const title2016total = `2016年中国大学生程序设计竞赛(长春站)在吉林大学开幕`
const content2016total = `9月26日和27日中国大学生程序设计大赛（China Collegiate Programming Contest， 简称CCPC）长春站在吉林大学举办。这是由中国大学生程序设计竞赛协会主办的面向世界大学生的国际性年度赛事，旨在激励当代大学生运用计算机编程技术和技能来解决实际问题，激发其学习算法和程序设计的兴趣，培养其团队合作意识、创新能力和挑战精神。
在会场里我们认识了来自清华大学、复旦大学、浙江大学、中山大学、北京航空航天大学、北京师范大学、哈尔滨工业大学、天津大学、武汉大学、吉林大学等等90多所高校，180多支队伍的学生朋友。`

const title2017total = `2017年中国大学生程序设计竞赛(秦皇岛站)在东秦开幕`
const content2017total = `       10月28日，2017年中国大学生程序设计竞赛（秦皇岛站）在东北大学秦皇岛分校体育馆开幕。大赛由中国大学生程序设计竞赛协会主办，东北大学秦皇岛分校承办，厦门吉比特网络技术股份有限公司、东软睿道教育信息技术有限公司协办，共有来自北京大学、清华大学、复旦大学、上海交通大学、武汉大学等全国163所高校的252支代表队参赛。
    东北大学秦皇岛分校党委副书记王斌出席开幕式并致欢迎辞。王斌表示，作为承办单位，学校将严格按照大赛组织实施方案的总体要求，把组织服务工作做细、做实、做好。同时希望，参赛选手相互交流学习、切磋技艺，赛出风格、赛出水平，充分展示中国大学生的精神面貌和专业技能。
    中国大学生程序设计竞赛委员会副主席、中山大学郭嵩山教授，中国大学生程序设计竞赛委员会执行主席、哈尔滨工业大学孙大烈教授，中国大学生程序设计竞赛委员会秘书长、清华大学邬晓钧教授，东北大学秦皇岛分校教务处处长李明亚，学生工作处处长史学军，计算机与通信工程学院院长刘杰民，大学生创新创业中心主任张淑梅出席开幕式。
    邬晓钧教授代表组委会感谢承办单位对本次比赛的全力支持、精心准备和周到服务。他指出，中国大学生程序设计竞赛协会的宗旨是希望通过竞赛实践推动和助力中国计算机创新人才的培养，实现价值塑造、能力培养和知识传授的目的。希望同学们享受比赛，以坚持不懈的努力创造优异的比赛成绩。
    据悉，中国大学生程序设计竞赛是由中国大学生程序设计竞赛协会组织的年度性赛事，旨在通过竞赛来提高并展示中国大学生程序设计创新与解决实际问题的能力，发现优秀的计算机人才，引领并促进中国高校程序设计教学改革与人才培养。2017年中国大学生程序设计竞赛维持全国分站赛的办赛场次与规模，分站赛分别由哈尔滨理工大学、东北大学秦皇岛分校、浙江理工大学承办，总决赛由哈尔滨工业大学承办。`
const LinkTo = Anchor.Link
export default class SecondpageDetail extends Component {
  showTitle = (id, type) => {
    switch (id) {
      case '2015' :
        return title2015
      case '2016':
        switch (type) {
          // case 'girl' :
          //   return title2016_girl
          // case 'net':
          //   return title2016_net
          // case 'part' :
          //   return title2016_part
          case 'total' :
            return title2016total
        }
      case '2017':
        switch (type) {
          // case 'girl' :
          //   return title2017_girl
          // case 'net':
          //   return title2017_net
          // case 'part' :
          //   return title2017_part
          case 'total' :
            return title2017total
        }
      case '2018':
        switch (type) {
          // case 'girl' :
          //   return title2018_girl
          // case 'net':
          //   return title2018_net
          // case 'part' :
          //   return title2018_part
          // case 'total' :
          //   return title2018_total
        }
    }
  }
  showContent = (id, type) => {
    switch (id) {
      case '2015' :
        return content2015
      case '2016' :
        switch (type) {
          // case 'girl' :
          //   return content2016_girl
          // case 'net' :
          //   return content2016_net
          // case 'part' :
            // return content2016_part
          case 'total' :
            return content2016total
        }
      case '2017' :
        switch (type) {
          // case 'girl' :
          //   return content2017_girl
          // case 'net' :
          //   return content2017_net
          // case 'part' :
          //   return content2017_part
          case 'total' :
            return content2017total
        }
      case '2018' :
        switch (type) {
          // case 'girl' :
          //   return content2018_girl
          // case 'net' :
          //   return content2018_net
          // case 'part' :
          //   return content2018_part
          // case 'total' :
          //   return content2018_total
        }
    }
  }

  render () {
    const { id, type } = this.props.match.params
    console.log('pros', this.props)
    console.log(id, type)
    return (
      <div>
        <AppHeader />
        <div style={{width: '1400px', margin: '0 auto'}} id='article-top'>
          <Row>
            <Col span={18}>
              <div className='title'>{
                  this.showTitle(id, type)
              }</div>
              <div className='content'>
                {this.showContent(id, type)}
              </div>
            </Col>
            <Col span={6}>
              <Anchor>
                <LinkTo href='#article-top' title='回到顶部' />
              </Anchor>
              <div className='article-pic'>
                <img src='http://img1.cache.netease.com/catchpic/3/34/34F4EAC82D3F7985DB6361CD8B02D8BC.jpg' alt='' />
              </div>
              <ul>
                <li>
                  <Link to='/'>
                    <div className='article-list'>
                    首页
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <div className='article-list'>
                      2016年总决赛信息
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <div className='article-list'>
                      2017年总决赛信息
                    </div>
                  </Link>
                </li>
                <li>
                  <a href='http://board.acmicpc.info/icpc2015/nyist_onsite.php'>
                    <div className='article-list'>
                      2015年总决赛排行榜
                    </div>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
