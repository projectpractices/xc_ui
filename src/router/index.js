import Vue from 'vue'
import Router from 'vue-router'
import PageList from "../views/cms/page/PageList";
import Home from "../views/home/page/Home";
import PageAdd from "../views/cms/page/PageAdd";
import PageEdit from "../views/cms/page/PageEdit";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {path: "/cms/page/pagelist/", name: 'PageList', component: PageList},
        {path: "/cms/page/add", name: 'PageAdd', component: PageAdd},
        {path: "/cms/page/edit/:pageId", name: 'PageEdit', component: PageEdit}
      ]
    }
  ]
})
