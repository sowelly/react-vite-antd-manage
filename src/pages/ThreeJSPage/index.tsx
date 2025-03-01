import React, {useEffect, useRef, useState} from 'react';
import {observer} from 'mobx-react-lite';
import {useStore} from '@/stores/useStore';
import  './index.less'

function GithubPage() {


    return (
        <div>
            GithubPage

        </div>
    );
}

export default observer(GithubPage); // 使用 observer 包裹组件