import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
// import componentsRouter from './modules/components'
// import chartsRouter from './modules/charts'
import kfRouter from './modules/kf';
import diaoduRouter from './modules/diaodu'
import finance from './modules/finance'

// import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    hidden: true,
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '主页', affix: true }
      }
    ]
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: '个人信息', icon: 'user', noCache: true }
      }
    ]
  },


]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  /** when your routing map is too long, you can split it into small modules **/
  //componentsRouter,
  //chartsRouter,
  //nestedRouter,
  //tableRouter,
  {
    path: '/waybillquery',
    component: Layout,
    redirect: '/WayBillQuery/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/kf/waybillquery/index'),
        name: 'waybillquery',
        meta: { title: '运单查询', icon: 'user', noCache: true }
      }
    ]
  },
  {
    path: '/voucher',
    component: Layout,
    redirect: '/voucher/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/kf/voucher/index'),
        name: 'voucherone',
        meta: { title: '录单制单', icon: 'user', noCache: true }
      },
      {
        path: 'handler',
        hidden: true,
        component: () => import('@/views/kf/voucher/voucher'),
        name: 'voucherhandler',
        meta: { title: '录单', icon: 'user', noCache: true }
      }
    ]
  },
  {
    path: '/allocate',
    component: Layout,
    redirect: '/allocate/index',
    meta: { title: '分拨预报管理', icon: 'user', noCache: true },
    children: [
      {
        path: 'list',
        component: () => import('@/views/allocate/alloca/index'),
        name: 'auditone',
        meta: { title: '发出预报', icon: 'user', noCache: true }
      },
      {
        path: 'take',
        component: () => import('@/views/allocate/alloca/take'),
        name: 'audittwo',
        meta: { title: '接受预报', icon: 'user', noCache: true }
      },
    ]
  },
  {
    path: '/track',
    component: Layout,
    redirect: '/track/index',
    children: [
      {
        path: 'list',
        component: () => import('@/views/track/customer/index'),
        name: 'trackone',
        meta: { title: '轨迹管理', icon: 'form', noCache: true },
      },

    ],

  },
  {
    path: '/warehouse',
    component: Layout,
    redirect: '/warehouse/cancelsales',
    meta: { title: '仓库管理', icon: 'user', noCache: true },
    children: [
      {
        path: 'warehouse',
        component: () => import('@/views/warehouse/warehous/index'),
        name: 'warehouseone',
        meta: { title: '拆合票管理', icon: 'user', noCache: true }
      },
      {
        path: 'plan',
        component: () => import('@/views/warehouse/warehous/orderplan'),
        name: 'planOne',
        meta: { title: '订单计划', icon: 'user', noCache: true }
      },
      {
        path: 'unusual',
        component: () => import('@/views/warehouse/warehous/unusual'),
        name: 'unusualone',
        meta: { title: '异常件', icon: 'user', noCache: true }
      },
      {
        path: 'physical',
        component: () => import('@/views/warehouse/warehous/physical'),
        name: 'physicalone',
        meta: { title: '仓库盘点', icon: 'user', noCache: true }
      }
    ]
  },
  {
    path: '/audit',
    component: Layout,
    redirect: '/audit/index',
    meta: { title: '审核', icon: 'user', noCache: true },
    children: [
      {
        path: 'shouldS',
        component: () => import('@/views/audit/warehous/index'),
        name: 'auditone',
        meta: { title: '应收审核', icon: 'user', noCache: true }
      },
      {
        path: 'shouldP',
        component: () => import('@/views/audit/warehous/shouldPayof'),
        name: 'audittwo',
        meta: { title: '应付审核', icon: 'user', noCache: true }
      },
    ]
  },
  {
    path: '/monthly',
    component: Layout,
    redirect: '/warehouse/cancelsales',
    meta: { title: '月结', icon: 'user', noCache: true },
    children: [
      {
        path: 'payOff',
        component: () => import('@/views/monthy/warehous/index'),
        name: 'monthly',
        meta: { title: '应收月结', icon: 'user', noCache: true }
      },
      {
        path: 'payOrder',
        component: () => import('@/views/monthy/warehous/shouldfukuan'),
        name: 'monthlytwo',
        meta: { title: '应付账单', icon: 'user', noCache: true }
      },
    ]
  },
  {
    path: '/roll',
    component: Layout,
    redirect: '/warehouse/cancelsales',
    meta: { title: '轧账', icon: 'user', noCache: true },
    children: [
      {
        path: 'rollone',
        component: () => import('@/views/roll/warehous/index'),
        name: 'rollone',
        meta: { title: '应收轧账', icon: 'user', noCache: true }
      },
      {
        path: 'rolltwo',
        component: () => import('@/views/roll/warehous/shouldfukuan'),
        name: 'rolltwo',
        meta: { title: '应付轧账', icon: 'user', noCache: true }
      },
    ]
  },
  {
    path: '/delivery',
    component: Layout,
    redirect: '/delivery/cancelsales',
    meta: { title: '出库管理', icon: 'user', noCache: true },
    children: [
      {
        path: '/delivery',
        path: 'warehouse',
        component: () => import('@/views/delivery/warehous/delivey'),
        name: 'deliverytwo',
        meta: { title: '生成出库单', icon: 'user', noCache: true }
      },
      {
        path: 'plan',
        component: () => import('@/views/delivery/warehous/chuku'),
        name: 'plantwo',
        meta: { title: '出库管理', icon: 'user', noCache: true }
      },
    ]
  },
  {
    path: '/depart',
    component: Layout,
    redirect: '/track/index',
    children: [
      {
        path: 'list',
        component: () => import('@/views/facheguanli/customer/index'),
        name: 'depart',
        meta: { title: '发车单管理', icon: 'form', noCache: true },
      },
    ],

  },
  {
    path: '/orderManage',
    component: Layout,
    redirect: '/orderManage/index',
    children: [
      {
        path: 'list',
        component: () => import('@/views/orderManage/customer/index'),
        name: 'orderManage',
        meta: { title: '发票管理', icon: 'form', noCache: true },
      },

    ],

  },
  {
    path: '/costShare',
    component: Layout,
    redirect: '/costShare/index',
    children: [
      {
        path: 'list',
        component: () => import('@/views/costshare/customer/index'),
        name: 'costShare',
        meta: { title: '成本分摊', icon: 'form', noCache: true },
      },

    ],

  },
  {
    path: '/order',
    component: Layout,
    redirect: '/order/cancelsales',
    meta: { title: '账单', icon: 'user', noCache: true },
    children: [
      {
        path: '/order',
        path: 'shouldPay',
        component: () => import('@/views/bill/customer/index'),
        name: 'delivery',
        meta: { title: '应收账单', icon: 'user', noCache: true }
      },
      {
        path: 'order',
        path: 'shouldShou',
        component: () => import('@/views/bill/customer/shouldPay'),
        name: 'plan',
        meta: { title: '应付账单', icon: 'user', noCache: true }
      },
    ]
  },
  {
    path: '/visit',
    component: Layout,
    redirect: '/track/index',
    children: [
      {
        path: 'list',
        component: () => import('@/views/visit/customer/index'),
        name: 'depart',
        meta: { title: '上门提货', icon: 'form', noCache: true },
      },
    ],
  },

  kfRouter,
  diaoduRouter,
  finance,
  {
    path: '/salesservice',
    component: Layout,
    redirect: '/salesservice/cancelsales',
    meta: { title: '服务售后', icon: 'user', noCache: true },
    children: [
      {
        path: 'cancelsales',
        component: () => import('@/views/kf/salesservice/cancelsales'),
        name: 'cancelsales',
        meta: { title: '退仓', icon: 'user', noCache: true }
      },
      {
        path: 'claims',
        component: () => import('@/views/kf/salesservice/claims'),
        name: 'claims',
        meta: { title: '理赔', icon: 'user', noCache: true }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true },
  // {
  //   path: 'WebAdmin',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://webadmin.ipsexp.com/login',
  //       meta: { title: '官网后台', icon: 'link' }
  //     }
  //   ]
  // }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  mode: 'history',
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
