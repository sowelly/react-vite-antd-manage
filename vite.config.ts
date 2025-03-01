import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'; // 引入 path 模块

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'), // 将 @ 指向 src 目录
        },
    },
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true, // 允许在 Less 里写 JS 语法
                modifyVars: {
                    '@primary-color': '#1890ff', // 自定义 Ant Design 主题色
                },
            },
        },
    },

})
