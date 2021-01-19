import Customer from './Customer'
import Select from './Select'
import PageContainer from './PageContainer'
import Table from './Table'
import Dept from './Dept'
import NavMenu from './NavMenu'
import BeginChat from './BeginChat'
import Chat from './Chat'

import elDragDialog from '@/directive/el-drag-dialog' // base on element-ui
import Vue from 'vue'

Vue.component('Customer', Customer)
Vue.component('Select', Select)
Vue.component('PageContainer', PageContainer)
Vue.component('Table', Table)
Vue.component('Dept', Dept)
Vue.component('NavMenu', NavMenu)
Vue.component('BeginChat', BeginChat)
Vue.component('Chat', Chat)
Vue.directive('elDragDialog', elDragDialog);

export default Vue