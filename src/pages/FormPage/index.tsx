import  {useEffect, useRef, useState} from 'react';
import {observer} from 'mobx-react-lite';
import './index.less'
import DynamicFormWithValidation from "../../components/DynamicFormWithValidation/index";

function BlogPage() {
    const [count, setCount] = useState(0);
    const progressBarRef = useRef<HTMLDivElement | null>(null);

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
    const allInterval = []

    const progress = () => {
        if (!progressBarRef||!progressBarRef.current) return
        progressBarRef.current.style.width = progressBarRef.current.offsetWidth + 1 + 'px'
        progressBarRef.current.innerHTML = (progressBarRef.current.offsetWidth) + '%'
        if (progressBarRef.current.offsetWidth < 100) {
            const current = Date.now()
            allInterval.push(current - start)
            start = current
            requestAnimationFrame(progress)
        } else {
            console.log(allInterval) // 打印requestAnimationFrame的全部时间间隔
        }
    }

    const startAnimation = () => {
        const current = Date.now()
        console.log('progressBarRef', progressBarRef)
        start = current
        window.requestAnimationFrame(progress)
        console.log(allInterval)
    }

    return (
        <div>
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