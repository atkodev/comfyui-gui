import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

import Root from './layout/Root'

import Projects from './containers/projects'
import Project from './containers/project'

import Results from './containers/results'
import Result from './containers/result'

import Models from './containers/models'
import Model from './containers/model'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Navigate to="projects" />,
      },
      {
        path: 'projects',
        children: [
          {
            index: true,
            element: <Projects />,
          },
          {
            path: ':projectId',
            children: [
              {
                index: true,
                element: <Project />,
              },
              {
                path: 'results',
                children: [
                  {
                    index: true,
                    element: <Results />,
                  },
                  {
                    path: ':resultId',
                    element: <Result />,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: 'results',
        children: [
          {
            index: true,
            element: <Results />,
          },
          {
            path: ':resultId',
            element: <Result />,
          },
        ],
      },
      {
        path: 'models',
        children: [
          {
            index: true,
            element: <Models />,
          },
          {
            path: ':modelId',
            element: <Model />,
          },
        ],
      },
    ],
  },
])

const App = () => <RouterProvider router={router} />

export default App
