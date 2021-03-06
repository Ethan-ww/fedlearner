import React from 'react'
import { Redirect } from 'react-router-dom'
import Dashboard from 'views/Dashboard'
import Projects from 'views/Projects'
import Workflows from 'views/Workflows'
import Datasets from 'views/Datasets'
import Settings from 'views/Settings'

const routes: FedRouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/projects" />,
    auth: true,
    children: [],
  },
  {
    path: '/dashboard',
    exact: false,
    component: Dashboard,
    auth: true,
    children: [],
  },
  {
    path: '/settings',
    exact: false,
    component: Settings,
    auth: true,
    children: [],
  },
  {
    path: '/projects',
    exact: true,
    component: Projects,
    auth: true,
    children: [],
  },
  {
    path: '/workflows',
    exact: true,
    component: Workflows,
    auth: true,
    children: [],
  },
  {
    path: '/datasets',
    exact: true,
    component: Datasets,
    auth: true,
    children: [],
  },
]

export default routes
