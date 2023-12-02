import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import MealSchedule from './pages/meal-schedule';
import Settings from './pages/settings';
import GeneralLayout from './layout/general-layout';

interface RouterElement {
  id: number;
  path: string;
  label: string;
  element: React.ReactNode;
}

const routerData: RouterElement[] = [
  {
    id: 0,
    path: '/',
    label: '홈',
    element: <Home />,
  },
  {
    id: 1,
    path: '/meal-schedule',
    label: '식단표',
    element: <MealSchedule />,
  },
  {
    id: 2,
    path: '/settings',
    label: '설정',
    element: <Settings />,
  },
];

export const routers = createBrowserRouter(
  routerData.map(router => {
    return {
      path: router.path,
      element: <GeneralLayout>{router.element}</GeneralLayout>
    }
  })
)