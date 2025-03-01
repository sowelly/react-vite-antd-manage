import React, {useEffect, useRef, useState} from 'react';
import {observer} from 'mobx-react-lite';
import './index.less'

function DonutPage() {

    return (
        <div>
            <h3>这是我的首个独立app，我给它取名为甜甜圈。开发这个app的灵感主要来源于自己现在的生活状态。<br/>
                我已经离职数月，在这几个月里我有痛快的昼夜颠倒玩过，也有为了生计未来而苦恼过。<br/>
                在快乐的时候我抽空刷着抖音，在发愁的时候我抽空刷着抖音。总之，只要有空闲时间我一定是在短视频海洋里面遨游……<br/>
                日复一日的重复动作让我开始思考，正该三十而立的我耗费了大量的时间在短视频带来的多巴胺里。<br/>
                什么也没有收获到。<br/>
                或许我空闲的时间可以做更多有意义的事情，而不是一味的上滑上滑……<br/>
                我想到一个点子，如果我还有一些爱好，如果我能通过某个媒介找到共同爱好的朋友，如果天南地北的人都能通过某个媒介展现自己的爱好交到更多的朋友，是不是一件有意思的事？<br/>
                那我自己来创建一个APP，给它取名圈子，圈子不太好听，我希望使用它的朋友们都能收获甜甜的笑容，那就叫甜甜圈。<br/>
                下载地址如下：<br/>
            </h3>

        </div>
    );
}

export default observer(DonutPage); // 使用 observer 包裹组件