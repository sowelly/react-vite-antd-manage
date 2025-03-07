import * as React from "react";
import {Card, Input} from 'antd';
import {FileTextOutlined, FileOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom'
import './index.less';

const {Search} = Input;

function HomePage() {
    return (
        <div className="home-container">
            <div className="cards-container">
                <Link to={'/video'}>
                    <Card className="feature-card">
                        <FileTextOutlined style={{fontSize: '32px'}}/>
                        <div className="card-text">视频库</div>
                    </Card>
                </Link>
                <Link to={'/question'}>
                    <Card className="feature-card">
                        <FileOutlined style={{fontSize: '32px'}}/>
                        <div className="card-text">题库</div>
                    </Card>
                </Link>
            </div>
            <div className="search-container">
                <h1>start exploring</h1>
                <Search
                    placeholder="输入搜索关键词"
                    allowClear
                    enterButton
                    size="large"
                    style={{width: 500}}
                />
            </div>
        </div>
    );
}

export default HomePage;