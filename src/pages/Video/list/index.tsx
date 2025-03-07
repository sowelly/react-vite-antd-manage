import {
    ProList,
} from '@ant-design/pro-components';
import {Progress, Tag} from 'antd';
import {useState} from 'react';
import IMG1 from '@/assets/1.png'
import IMG2 from '@/assets/2.png'
import IMG3 from '@/assets/3.png'

const images = [IMG1, IMG2, IMG3]
const data = [
    '语雀的天空',
    'Ant Design',
    '蚂蚁金服体验科技',
    'TechUI',
    'TechUI 2.0',
    'Bigfish',
    'Umi',
    'Ant Design Pro',
].map((item, index) => {
    const randomIndex = Math.floor(Math.random() * 3);
    return {
        title: item,
        subTitle: <Tag color="#5BD8A6">语雀专栏</Tag>,
        avatar:
            'https://gw.alipayobjects.com/zos/antfincdn/UCSiy1j6jx/xingzhuang.svg',
        content: (
            <div>
                <img width={'100%'} src={images[randomIndex]} alt="Random"/>
            </div>
        ),
    }
});

export default () => {

    return (
        <div
            style={{
                backgroundColor: '#eee',
                margin: -24,
                padding: 24,
            }}
        >
            <ProList<any>
                ghost={true}
                pagination={{
                    defaultPageSize: 8,
                    showSizeChanger: false,
                }}
                showActions="hover"
                rowSelection={{}}
                grid={{gutter: 16, column: 5}}
                onItem={(record: any) => {
                    return {
                        onMouseEnter: () => {
                            console.log(record);
                        },
                        onClick: () => {
                            console.log(record);
                        },
                    };
                }}
                metas={{
                    title: {},
                    subTitle: {},
                    type: {},
                    avatar: {},
                    content: {},
                }}
                dataSource={data}
            />
        </div>
    );
};