import React, {useEffect, useRef, useState} from 'react';
import {observer} from 'mobx-react-lite';
import './index.less'
import {Image} from "antd";
import {ProCard} from '@ant-design/pro-components';
import {MediumOutlined, PhoneOutlined, RedditOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

const avatar = import('@/assets/react.svg')

function HomePage() {


    return (
        //简洁明了地介绍自己，包括姓名、职业、联系方式等基本信息。可以添加一张专业的个人照片，提升亲和力。
        <div>
            <ProCard
                title="web前端工程师"
                extra="extra"
                tooltip="这儿有一个小彩蛋"
                style={{maxWidth: 700}}
                headerBordered
            >
                <div>
                    <h1>尹琴</h1>
                    <div><Image src={avatar} alt=""/></div>
                    <h3><PhoneOutlined/> 1580283067</h3>
                    <h3><MediumOutlined/> 694516293@qq.com</h3>
                    <h4>
                        <RedditOutlined/> 我从事前端已经九年啦，拥有众多专业技能，like：React/Vue/Angular（及其配套周边）、Node、webSocket、webWorker等等。在离职的这段时间我终于有空搞一个我的个人网站出来了。我还有许多奇思妙想终于也能在这个时间一一实现了。
                    </h4>
                    <div><Link to={'/portfolio'}>部分作品集点这里</Link></div>
                    <div><Link to={'https://github.com/sowelly'}>我的github点这里</Link></div>
                    <div><Link to={'https://juejin.cn/user/563421643020807'}>我的掘金点这里</Link></div>
                    <div><Link to={'https://juejin.cn/user/563421643020807'}>想找到志同道合的圈子吗点这里</Link></div>
                </div>
            </ProCard>


        </div>
    );
}

export default observer(HomePage); // 使用 observer 包裹组件