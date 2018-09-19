import React,{Component} from 'react'
import styles from './index.css'
import {Tabs ,Icon} from 'antd';

const TabPane = Tabs.TabPane;

function callback(key) {
   // console.log(key);
  }

const AppRules=(props)=>{
    return(
        <div className="rules111">
               <div className="rules222">
               <p className="rules333">竞赛规则</p>
               </div>
                <div className="rules444"> 
                <Tabs defaultActiveKey="2" >
                    <TabPane tab={<span><Icon type="database" />竞赛组成</span>} key="1">
                    &nbsp;  &nbsp;  &nbsp;  &nbsp;中国大学生程序设计竞赛（简称CCPC）是由中国大学生程序设计竞赛组委会（以下简称组委会）组织的年度性系列赛事，由以下各项比赛组成：
<br /> &nbsp;  &nbsp;  &nbsp;  &nbsp;1） 每年8月举办1场网络赛；
<br /> &nbsp;  &nbsp;  &nbsp;  &nbsp;2） 每年9月~11月举办的3~4场分站赛；
<br/> &nbsp;  &nbsp;  &nbsp;  &nbsp;3） 每年11月~12月举办的年度总决赛；
<br /> &nbsp;  &nbsp;  &nbsp;  &nbsp;4） 每年举行的其他组委会认可的比赛，包括但不限于女生赛、省赛、地区邀请赛、全国邀请赛等。
<br />&nbsp;  &nbsp;  &nbsp;  &nbsp;网络赛、分站赛、年度总决赛的命题与裁判工作由组委会指定命题单位负责，其他比赛相关事项由比赛承办学校全权负责，组委会进行监督，保证比赛的公平公正公开。
                    </TabPane>
                    <TabPane tab={<span><Icon type="bell" />队伍组成</span>} key="2">
                    &nbsp;  &nbsp;  &nbsp;  &nbsp;组队参赛，每个参赛队由3名队员和1名教练组成，参赛队员必须是所属高校在籍的本科生、专科生和研一学生，教练必须是所属学校在职教师，教练有责任保证参赛成员身份的真实性。
                    <br /> &nbsp;  &nbsp;  &nbsp;  &nbsp;每个支参赛队员每年参加的分站赛不超过两场。
                    </TabPane>
                    <TabPane tab={<span><Icon type="trophy" />竞赛方式</span>} key="3">
                    &nbsp;  &nbsp;  &nbsp;  &nbsp;1） 比赛时长：5个小时。当比赛进行一定时间后，若出现不可预见的事件，组委会有权调整比赛时间长度，但必须及时通告所有参赛选手。
                    <br /> &nbsp;  &nbsp;  &nbsp;  &nbsp;2） 比赛模式：上机编程，实时评测，实时排名。
                    <br /> &nbsp;  &nbsp;  &nbsp;  &nbsp;3） 比赛题目：10~13题。年度总决赛、分站赛题目为英文描述（个别词句可附中文注释），其他比赛可采用中文描述。
                    <br /> &nbsp;  &nbsp;  &nbsp;  &nbsp;4） 比赛机器：每支参赛队共用1台机器。
                    <br /> &nbsp;  &nbsp;  &nbsp;  &nbsp;5） 比赛评测：采用机器实时评测，每通过一个题目升一个对应颜色的气球。
                    <br /> &nbsp;  &nbsp;  &nbsp;  &nbsp;6） 比赛封榜：比赛最后一小时不显示排名变化情况，但仍然升气球，颁奖后公布最终结果。
                    <br /> &nbsp;  &nbsp;  &nbsp;  &nbsp;7） 竞赛语言：至少支持C、C++、Java三种语言。
                    <br /> &nbsp;  &nbsp;  &nbsp;  &nbsp;8） 提交反馈：包括 Compilation Error（编译错误）、Runtime Error（运行错误）、Wrong Answer（答案错误）、Time Limit Exceeded（超时）、Accepted（正确）等。
                    </TabPane>
                    <TabPane tab={<span><Icon type="star" />排名细则</span>} key="4">
                    &nbsp;  &nbsp;  &nbsp;  &nbsp;所有正式参赛的参赛队按照解题数多少进行排名，解题数多的排名在前；若解题数相同，再比较总用时，总用时少的排名在前；若解题数和总用时都相同，则排名并列。<br />
                    &nbsp;  &nbsp;  &nbsp;  &nbsp;总用时为所有解出的赛题所用时间之和；每道赛题的用时是从竞赛开始到该题解答被判定为正确的提交时间为止，其间每一次被判为错误的提交将被加罚20分钟时间，没有解出的赛题不记罚时。<br />
                    &nbsp;  &nbsp;  &nbsp;  &nbsp;以各校排名第一队伍的名次为该学校的排名；各校其他队伍排名取相应位置的下一学校排名为并列名次。
                    </TabPane>
                    <TabPane tab={<span><Icon type="check-circle" />分站赛队伍确定</span>} key="5">
                    &nbsp;  &nbsp;  &nbsp;  &nbsp;1） 由组委会与承办学校商定参赛队伍总数。
                    <br /> &nbsp;  &nbsp;  &nbsp;  &nbsp;2） 参赛队伍总数的1/2根据当年网络赛的学校排名确定（每校一支队伍）；参赛队伍总数的1/6根据上一年度总决赛的学校排名确定（每校一支队伍）；参赛队伍总数的1/4根据当前分站赛所覆盖（由组委会确定）的当年其他CCPC比赛（省赛、地区赛、邀请赛、女生赛等）的学校排名确定（每校一支队伍）；参赛队伍总数的1/12由组委会和承办学校协调确定，其中包含比赛承办学校和命题学校的奖励名额，并优先考虑当年承办组委会会议和夏季教练论坛的学校。如果有学校放弃名额，则由组委会和承办学校再分配。
<br /> &nbsp;  &nbsp;  &nbsp;  &nbsp;3） 原则上每个学校每场分站赛不超过3支队伍；承办学校与命题学校不参加相关的分站赛；CCPC省赛或分站赛的承办学校和为网络赛或分站赛命题的学校，可在非相关的每场分站赛中额外奖励1个名额。
                    </TabPane>
                    <TabPane tab={<span><Icon type="pie-chart" />总决赛队伍确定</span>} key="6">
                    &nbsp;  &nbsp;  &nbsp;  &nbsp;1） 根据当年各分站赛的学校排名，形成总排名，取总排名前100的学校（若有并列，则可略微超出100；若排名前100的学校有放弃参赛的，可依排名取后续学校），各获得一个参赛名额。
                    <br /> &nbsp;  &nbsp;  &nbsp;  &nbsp;2） 上一年度总决赛的学校排名前10的学校，各获得一个奖励名额。
<br /> &nbsp;  &nbsp;  &nbsp;  &nbsp;3） 上一年度和本年度总决赛的承办学校，以及本年度分站赛的承办学校，若依据1)和2)没有获得参赛名额，则可获得一个奖励名额。
<br /> &nbsp;  &nbsp;  &nbsp;  &nbsp;4） 若有香港、澳门、台湾的参赛学校，则每个学校不超过两个参赛名额。
<br /> &nbsp;  &nbsp;  &nbsp;  &nbsp;5） 若有国外学校参赛，则每个学校不超过两个参赛名额，且参赛队伍打星。
<br /> &nbsp;  &nbsp;  &nbsp;  &nbsp;6） 在组委会同意的前提下，可接受其他打星队伍，但参赛队总数原则上不超过120。
                    </TabPane>
                    <TabPane tab={<span><Icon type="user" />分站赛奖项与排名</span>} key="7">
                    &nbsp;  &nbsp;  &nbsp;  &nbsp;1） 设置金奖、银奖、铜奖，各奖项数目分别为有效参赛队伍数的10%、20%、30%，颁发奖牌和获奖证书。有效参赛队伍定义为至少提交通过1个题目的正式参赛队伍。
                    <br />2） 可以设置最快解题奖，每个题目最快提交通过的正式参赛队伍获得该题目的最快解题奖，颁发奖牌。
<br /> &nbsp;  &nbsp;  &nbsp;  &nbsp;3） 当正式参赛女队（3名队员皆为女生）数目大于等于3时，可以设置优秀女队奖，排名最高且获得铜奖以上奖项的正式参赛女队获得优秀女队奖，颁发奖牌和获奖证书。
<br /> &nbsp;  &nbsp;  &nbsp;  &nbsp;4） 可以设置顽强拼搏奖，未获得金奖、银奖或铜奖的正式队伍中最晚解出题目的1或2支参赛队获得顽强拼搏奖，颁发奖牌。
<br /> &nbsp;  &nbsp;  &nbsp;  &nbsp;5） 按学校排名设置冠军、亚军、季军奖杯，授予赢得排名的相应队伍。
<br /> &nbsp;  &nbsp;  &nbsp;  &nbsp;6） 学校排名前30的队伍获得学校排名证书。
                    </TabPane>
                    <TabPane tab={<span><Icon type="team" />总决赛奖项与排名</span>} key="8">
                    &nbsp;  &nbsp;  &nbsp;  &nbsp;1） 按学校排名设置冠军、亚军、季军奖杯，授予赢得排名的相应队伍。
                    <br />2） 学校排名前10的队伍获得金奖（即获得金奖的学校数为10，但获得金奖的队伍数可能大于10），颁发奖牌和证书。
<br /> &nbsp;  &nbsp;  &nbsp;  &nbsp;3） 学校排名第11~第30的队伍获得银奖（即获得银奖的学校数为20，但获得银奖的队伍数可能大于20），颁发奖牌和证书。
<br /> &nbsp;  &nbsp;  &nbsp;  &nbsp;4） 学校排名第31~第60的队伍获得铜奖（即获得铜奖的学校数为30，但获得铜奖的队伍数可能大于30），颁发奖牌和证书。
<br /> &nbsp;  &nbsp;  &nbsp;  &nbsp;5） 学校排名低于60的队伍获得优胜奖，颁发证书。
<br /> &nbsp;  &nbsp;  &nbsp;  &nbsp;6） 学校排名前30的队伍获得学校排名证书。
                    </TabPane>
                    <TabPane tab={<span><Icon type="file-protect" />参赛纪律</span>} key="9">
                    &nbsp;  &nbsp;  &nbsp;  &nbsp;1） 参赛选手可以携带诸如书籍、字典、手册、程序清单等文字性参考资料；但是不能携带任何可用计算机处理的电子设备，也不能携带任何通讯工具；在比赛中应使用承办方提供的键盘鼠标，不得使用自带键盘鼠标。
<br /> &nbsp;  &nbsp;  &nbsp;  &nbsp;2） 当参赛选手出现妨碍比赛正常进行的行为时，诸如擅自移动赛场中的设备，未经授权修改比赛软硬件，干扰他人比赛等，组委会在评估行为后果后有权剥夺其参赛资格。
<br /> &nbsp;  &nbsp;  &nbsp;  &nbsp;3） 比赛期间，交流讨论仅限于本队的3位成员之间，严禁和其他队伍成员或场外人员有任何交流行为，否则视为违纪，裁判有权处罚。
<br /> &nbsp;  &nbsp;  &nbsp;  &nbsp;4） 比赛期间因故需暂时离开赛场同一时间同一学校不超过1人，由承办学校严格监督执行。
                    </TabPane>
                </Tabs>
               </div>
        </div>    
  )
}
export default AppRules