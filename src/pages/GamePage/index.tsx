import {observer} from 'mobx-react-lite';
import './index.less'
import CustomStore from "./customStore";
import {Button} from "antd";

function GamePage() {

    const girlStore = new CustomStore({count: 0, name: 'lisa'})
    girlStore.addListener((key, value) => {
        console.log(`changed:${key}=${value}`)
    })


    const changeCount = () => {
        girlStore.getState().count = 1;  // 输出: State changed: count = 1
    }
    const changeName = () => {
        girlStore.getState().name = 'Bob';  // 输出: State changed: name = Bob
        girlStore.getState().sex = 'f';
    }
    const print = () => {
        console.log(`changed:`, girlStore.getState())
    }

    return (
        <div>
            <div>
                count:{girlStore.getState().count}
            </div>
            <div>
                name:{girlStore.getState().name}
            </div>
            <Button onClick={changeCount}>click to change count</Button>
            <Button onClick={changeName}>click to change name</Button>
            <Button onClick={print}>click to change print</Button>

        </div>
    );
}

export default observer(GamePage); // 使用 observer 包裹组件