import {Carousel, Image} from "antd";
import {useEffect, useState} from "react";
import * as React from "react";
import {observer} from "mobx-react-lite";
import './index.less'

function PortfolioPage() {
    const [random, setRandom] = useState<number>();


    useEffect(()=>{
        setRandom(Math.random)
    },[])
    return <div className={'portfolioWrap'}>
        {/*<Button*/}
        {/*    type="primary"*/}
        {/*    onClick={() => {*/}
        {/*        setRandom(Date.now());*/}
        {/*    }}*/}
        {/*>*/}
        {/*    Reload*/}
        {/*</Button>*/}
        <Carousel arrows infinite={false} >
            {
                [1, 2, 3, 4, 5].map(imgIndex => {
                    return <div
                        key={imgIndex}
                    >
                        <Image
                            width={200}
                            src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`}
                            placeholder={
                                <Image
                                    preview={false}
                                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                                    width={200}
                                />
                            }
                        />
                    </div>
                })
            }

        </Carousel>
    </div>

}

export default observer(PortfolioPage); // 使用 observer 包裹组件
