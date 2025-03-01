import React, {useEffect, useRef, useState} from 'react';
import {observer} from 'mobx-react-lite';
import {useStore} from '@/stores/useStore';
import './index.less'
import DynamicFormWithValidation from "../../components/DynamicFormWithValidation/index";

function BlogPage() {
    const {counterStore} = useStore();
    const [count, setCount] = useState(0);
    const progressBarRef = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        // setCount(count + 1);
        // setCount(count + 1); // 仍然加 1（同步闭包）
        setCount((pre) => pre + 1);
        setCount((pre) => pre + 1);
    };
    useEffect(() => {
        console.log('count', count)
    }, [count])

    let start = 0
    let allInterval = []

    const progress = () => {
        progressBarRef.current.style.width = progressBarRef.current.offsetWidth + 1 + 'px'
        progressBarRef.current.innerHTML = (progressBarRef.current.offsetWidth) + '%'
        if (progressBarRef.current.offsetWidth < 100) {
            let current = Date.now()
            allInterval.push(current - start)
            start = current
            requestAnimationFrame(progress)
        } else {
            console.log(allInterval) // 打印requestAnimationFrame的全部时间间隔
        }
    }

    const startAnimation = () => {
        let currrent = Date.now()
        console.log('progressBarRef', progressBarRef)
        start = currrent
        window.requestAnimationFrame(progress)
        console.log(allInterval)
    }

    return (
        <div>
            <button onClick={() => counterStore.increment()}>Increment</button>
            <button onClick={() => counterStore.decrement()}>Decrement</button>


            <div>
                count:{count}
                <button onClick={handleClick}>add</button>
            </div>
            <div ref={progressBarRef} className={'progressBar'}></div>
            <button onClick={startAnimation}>开始动画</button>


            <DynamicFormWithValidation/>


        </div>
    );
}

export default observer(BlogPage); // 使用 observer 包裹组件