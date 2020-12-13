import Vue from 'vue'
import App from './App'
import router from './router'
// import './components/css/delivery-time-picker.css'
// import ViewUI from 'view-design'
import { Layout, Breadcrumb, BreadcrumbItem, Menu, MenuItem, Table, Sider, Submenu, Icon } from 'view-design'
import 'view-design/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.component('MenuItem', MenuItem)
Vue.component('Menu', Menu)
Vue.component('Table', Table)
Vue.component('Sider', Sider)
Vue.component('Submenu', Submenu)
Vue.component('Icon', Icon)
Vue.component('Layout', Layout)
Vue.component('Breadcrumb', Breadcrumb)
Vue.component('BreadcrumbItem', BreadcrumbItem)
// Vue.use(ViewUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
