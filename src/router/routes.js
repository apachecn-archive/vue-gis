const routes = [
  {
    path: '/',
    name: 'home',
    text: '首页',
    icon: 'el-icon-s-home',
    component: () => import('@/views/home')
  },
  {
    path: '/base',
    redirect: '/base/start',
    name: 'base',
    text: '基础',
    icon: 'el-icon-s-help',
    component: () => import('@/views/base'),
    children: [
      {
        path: '/base/start',
        name: 'start',
        text: '起步',
        component: () => import('@/views/base/start')
      }
    ]
  },
  {
    path: '/test',
    redirect: '/test/test1',
    name: 'test',
    text: '测试',
    icon: 'el-icon-s-help',
    component: () => import('@/views/test'),
    children: [
      {
        path: '/test/test1',
        name: 'test1',
        text: '测试1',
        component: () => import('@/views/test/test1')
      },
      {
        path: '/test/test2',
        name: 'test2',
        text: '测试2',
        component: () => import('@/views/test/test2')
      },
      {
        path: '/test/hh',
        name: 'hh',
        text: 'hh',
        component: () => import('@/views/test/hh')
      }
    ]
  }
]

export default routes
