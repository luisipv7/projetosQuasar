
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'usuario/:id', component: () => import('pages/Editar.vue') }
    ]
  },
  {
    path: '/User',
    component: () => import('layouts/Main.vue'),
    children: [
      { path: '', component: () => import('pages/Principal.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
