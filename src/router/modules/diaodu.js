/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const diaoduRouter = {
  path: '/dispatch',
  component: Layout,
  meta: { title: '客户预报', icon: 'form', noCache: true },
  children: [
    {
      path: 'list',
      component: () => import('@/views/dispatch/customer/index'),
      name: 'dispatch',
      meta: { title: '客户预报', icon: 'form', noCache: true },
    },

  ],

}





export default
  diaoduRouter
