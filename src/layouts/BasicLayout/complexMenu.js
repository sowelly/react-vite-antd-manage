export default [
    {
        path: '/',
        name: '首页',
        locale: 'menu.home',
    }, {
        path: '/question',
        name: '题库',
        locale: 'menu.question',
        child: [
            {
                path: '/modifyQuestion',
                name: '新增题目',
                locale: 'menu.question.modify',
            },
            {
                path: '/question',
                name: '列表',
                locale: 'menu.question.list',
            }
        ]
    },
    {
        path: '/video',
        name: '视频库',
        locale: 'menu.video',
        child: [
            {
                path: '/modifyVideo',
                name: '新增视频',
                locale: 'menu.video.modify',
            },
            {
                path: '/video',
                name: '列表',
                locale: 'menu.video.list',
            }
        ]

    }
];
