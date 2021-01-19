import Layout from '@/layout'

const finance = {
  path: '/provide',
  component: Layout,
  redirect: '/provide/index',
  children: [
    {
      path: 'list',
      component: () => import('@/views/provide/customer/index'),
      name: 'provide',
      meta: { title: '供应商', icon: 'form', noCache: true },
    },

  ],

};

export default
  finance