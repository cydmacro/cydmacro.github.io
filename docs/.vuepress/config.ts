import { defineUserConfig,defaultTheme } from 'vuepress'
// 顶部导航栏的搜索框 需要install这个依赖  npm i -D @vuepress/plugin-search@next
import { searchPlugin } from '@vuepress/plugin-search'


export default defineUserConfig({
    // 插件配置  这里配置了那个搜索框
    plugins:[
        searchPlugin({
            locales: {
                '/': {
                    placeholder: 'Search',
                },
                '/zh/': {
                    placeholder: '搜索',
                },
            },
            // 排除首页
            isSearchable: (page) => page.path !== '/',
        }),
    ],

    // 打包后html内部资源访问路径
    base:'./cydmacro/',
    // 打包后的文件放哪
    dest:"dist/",
    lang: 'zh-CN',
    // 标题
    title: 'ReturnAC',
    description: '回归实践,才是最好的提升',
    // 头部配置
    head: [['link', { rel: 'icon', href: '/images/logo.png' }],
    ],
    //新增导航条的配置
    theme: defaultTheme({
        // tab栏的图标; 图片 / 会自动去public文件夹里找图片
        logo: '/images/logo.png',
        // 顶部导航条
        navbar: [
            {
                text: '首页',
                link: '/',
            },{
                text: '全局导航',
                link: '/'
            },
            {
                text: 'JAVA',
                link: '/'
            },
            {
                text: '算法',
                link: '/',
            },
            {
                text: '框架|中间件',
                link: '/'
            },
        ],
    }),
})