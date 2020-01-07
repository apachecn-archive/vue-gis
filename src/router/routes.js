const routes = [
  {
    path: '/',
    name: 'home',
    text: '首页',
    icon: 'el-icon-s-home',
    component: () => import('@/views/home')
  },
  {
    path: '/marker',
    redirect: '/marker/one',
    name: 'marker',
    text: '打点',
    icon: 'el-icon-s-help',
    component: () => import('@/views/marker'),
    children: [
      {
        path: '/marker/one',
        name: 'oneMarker',
        text: '打一个点',
        component: () => import('@/views/marker/one')
      },
      {
        path: '/marker/markers',
        name: 'markers',
        text: '打多个点',
        component: () => import('@/views/marker/markers')
      },
      {
        path: '/marker/markercluster',
        name: 'markercluster',
        text: '聚合',
        component: () => import('@/views/marker/markercluster')
      }
    ]
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
  }
]

export default routes
