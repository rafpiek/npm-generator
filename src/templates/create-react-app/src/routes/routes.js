import { LandingPage } from 'layout';
import { LoginView, RegistrationView } from 'views';
import Paths from './paths';
import { Inbox, Projects, Priorities, DevelopmentView } from 'views';

const publicRoutes = [
  { path: Paths.root, component: LandingPage, exact: true }
];

const authRoutes = [
  { path: Paths.login, component: LoginView, exact: true },
  { path: Paths.register, component: RegistrationView, exact: true }
];

const appRoutes = [
  {
    path: Paths.app,
    component: Inbox,
    exact: true,
    private: true,
    label: 'inbox'
  },
  {
    path: Paths.app_inbox,
    component: Inbox,
    exact: true,
    private: true,
    label: 'inbox'
  },
  {
    path: Paths.app_projects,
    component: Projects,
    exact: true,
    private: true,
    label: 'projects'
  },
  {
    path: Paths.app_priorities,
    component: Priorities,
    exact: true,
    private: true,
    label: 'priorities'
  },
  { path: Paths.dev_view, component: DevelopmentView, exact: true }
];

export { appRoutes, authRoutes, publicRoutes };
