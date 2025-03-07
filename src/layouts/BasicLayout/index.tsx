import * as React from "react";
import {
    UserOutlined,
    SettingOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
import type {MenuDataItem} from '@ant-design/pro-components';
import {PageContainer, ProLayout} from '@ant-design/pro-components';
import {Space, Dropdown, Avatar} from 'antd';
import complexMenu from './complexMenu';
import {useNavigate, Outlet, useLocation} from 'react-router-dom'
import {WaterMark} from '@ant-design/pro-components';
import './index.less';

const filterByMenuData = (
    data: MenuDataItem[],
    keyWord: string,
): MenuDataItem[] =>
    data
        .map((item) => {
            if (item.name?.includes(keyWord)) {
                return {...item};
            }
            const children = filterByMenuData(item.children || [], keyWord);
            if (children.length > 0) {
                return {...item, children};
            }
            return undefined;
        })
        .filter((item) => item) as MenuDataItem[];

const loopMenuItem = (menus: any[]): MenuDataItem[] =>
    menus.map(({icon, routes, ...item}) => ({
        icon,
        ...item,
        children: routes && loopMenuItem(routes),
    }));

export default () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [keyWord, setKeyWord] = React.useState('');

    const getPageTitle = () => {
        const currentRoute = window.location.hash.slice(1);
        switch (currentRoute) {
            case '/question':
                return '题库';
            case '/modifyQuestion':
                return '新增题目';
            case '/video':
                return '视频库';
            case '/modifyVideo':
                return '新增视频';
            default:
                return '404';
        }
    };

    React.useEffect(() => {
        const currentRoute = window.location.hash.slice(1);
        const title = currentRoute === '/table' ? '高级表格' :
            currentRoute === '/interviewSummary' ? '面试总结' :
                currentRoute === '/form' ? '表单页面' :
                    '404';
        document.title = `${title} - AntMotion`;
    }, [location]);

    const userMenuItems = [
        {
            key: 'profile',
            icon: <UserOutlined/>,
            label: '个人中心',
        },
        {
            key: 'settings',
            icon: <SettingOutlined/>,
            label: '系统设置',
        },
        {
            key: 'logout',
            icon: <LogoutOutlined/>,
            label: '退出登录',
        },
    ];

    return (
        <div className="layout-container">
            <ProLayout
                layout="top"
                location={{
                    pathname: window.location.hash.slice(1),
                }}
                logo={false}
                title={''}
                menu={{
                    hideMenuWhenCollapsed: true,
                }}
                menuItemRender={(item, dom) => (
                    <a
                        onClick={() => {
                            navigate(item?.path ?? '/')
                        }}
                    >
                        {dom}
                    </a>
                )}
                menuDataRender={() => loopMenuItem(complexMenu)}
                postMenuData={(menus) => filterByMenuData(menus || [], keyWord)}
                contentWidth={'Fluid'}
            >
                <div className="page-container">
                    <PageContainer
                        header={{
                            title: getPageTitle(),
                            breadcrumb: {
                                routes: [
                                    {
                                        path: '/',
                                        breadcrumbName: '首页',
                                    },
                                    {
                                        path: '',
                                        breadcrumbName: getPageTitle(),
                                    },
                                ],
                            },
                        }}
                    >
                        <WaterMark content="web前端-YQ">
                            <Outlet/>
                        </WaterMark>
                    </PageContainer>
                </div>
            </ProLayout>
        </div>
    );
};