/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const kfRouter = {
  path: '/workorder',
  component: Layout,
  meta: { title: '工单管理', icon: 'form', noCache: true },
  redirect: { name: 'workorder' },
  children: [
    {
      path: 'list',
      component: () => import('@/views/kf/workorder/index'),
      name: 'workorder',
      meta: { title: '工单列表', icon: 'form', noCache: true },
    },
    {
      path: 'handler/:workID',
      hidden: true,
      component: () => import('@/views/kf/workorder/handler/index'),
      name: 'workorderhandler',
      meta: { title: '处理工单', noCache: true }
    }
  ]
};

export default
  kfRouter
