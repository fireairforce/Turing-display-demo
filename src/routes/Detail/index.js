import React ,{Fragment}from 'react';
import { Tabs, Icon} from 'antd';
import "antd/dist/antd.css";
import styles from './index.less';
const TabPane = Tabs.TabPane;
export default class Detail extends React.Component{
    render(){
        return(
            <Fragment>
                <header>
                  <h3>
                      第六届『图灵杯』NEUQ-ACM程序设计竞赛个人赛 暨蓝桥杯选拔赛
                      <br />
                       比赛规则 & 注意事项，请参赛选手认真阅读
                  </h3>
                  <hr style={{fontWeight:"bold"}}/>
                </header>
        
                <Tabs defaultActiveKey="1" size="large">
                    <TabPane tab={<span><Icon type="home" />大赛流程</span>} key="1">
                    <div className={styles.content}>
                        <div className={styles.wrapper}>
                            1、 使用浏览器访问 报名链接 进行线上报名
                            <br />
                            2、 等待短信通知参赛账号、比赛地点及座位
                            <br />
                            3、 在2018年12月02日12：30前至比赛地点签到
                            <br />
                            4、 打开电脑桌面上的“图灵杯”文件夹根据提示操作
                            <br />
                            5、 比赛时间3个小时，在最后40分钟封榜，不实时更新排名
                            <br />
                            6、 等待短信通知并出席颁奖典礼
                        </div>
                    </div>
                    </TabPane>
                    <TabPane tab={<span><Icon type="file-text" />比赛规则</span>} key="2">
                      <div className={styles.content}>
                        <div className={styles.wrapper}>
                            1.请各位参赛者携带一卡通进行签到。
                            <br />
                            2.保证比赛公平公正公开，参赛者在比赛期间不得上网，独立思考不得与他人交流，如有疑惑请及时练习志愿者或相关工作人员。
                            <br />
                            3.比赛可携带非电子类资料，比如纸质资料等。
                            <br />
                            4.比赛时间：12月2日下午13：00--16：00，比赛地点另行通知。
                            <br />
                            5.比赛规则说明：
                            <br />
                            编译环境：codeblocks和eclipse
                            <br />
                            本次比赛共设置八道题目，题目难度与顺序无关。
                            <br />
                            比赛期间，每位参赛者使用一台电脑在三个小时内使用判题系统支持的一种语言（C/C++/Java）编写程序，并提交oj评判，运行结果实时返回。排行榜规则：解题数越多者越靠前，当解题数一样时，用时越短者越靠前（每道题目花费的时间为比赛开始直至程序被判正确为止，期间运行结果未显示正确罚时20min，未正确解答的试题不计时，，每位参赛者花费的时间为所有正确解题花费的时间及其罚时之和）
                            <br />
                            6.奖励情况
                            <br />
                            > 一等奖3名
                            <br />
                            > 二等奖7名
                            <br />
                            > 三等奖15名
                            <br />
                            > 最佳女选手奖
                            </div>
                      </div>   
                    </TabPane>
                    <TabPane tab={<span><Icon type="notification" />参赛通知</span>} key="3">
                      <div className={styles.content}>
                        <div className={styles.wrapper}>
                            1、东北大学秦皇岛分校、燕山大学在校生可参加现场赛。
                            <br />
                            2、其余高校及社会人士可参加线上邀请赛，报名网络赛后周六统一短信发送比赛账号及密码。
                            <br />
                            3、入场验证：要求现场赛参赛选手携带学生证在赛前20分钟入场签到核验。网络赛xx点xx分准时开赛。
                            <br />
                            4、赛事工作人员将全程跟踪，如遇比赛系统崩溃，请保持秩序，工作人员将及时处理。
                            <br />
                            5、参赛人数较多，乘坐电梯及上下楼梯时请注意安全。
                        </div>  
                      </div> 
                    </TabPane>
                </Tabs>
                 <hr />
            </Fragment>    
        )
    }
}