import { NavLink, Outlet } from 'react-router-dom'

import classNames from 'classnames'

const navLinkClassName = (isActive: boolean) =>
  classNames({
    'flex flex-row items-center gap-1 px-1 border-b-2': true,
    'border-zinc-900 dark:border-zinc-50': isActive,
    'dark:text-zinc-400 border-transparent hover:border-zinc-400 dark:hover:border-zinc-700':
      !isActive,
  })

const Root = () => {
  return (
    <div className="container mx-auto flex flex-col gap-10">
      <div className="flex flex-row pt-8 gap-4">
        <NavLink
          className={({ isActive }) => navLinkClassName(isActive)}
          to="projects"
        >
          <span className="text-base font-semibold">프로젝트</span>
        </NavLink>

        <NavLink
          className={({ isActive }) => navLinkClassName(isActive)}
          to="results"
        >
          <span className="text-base font-semibold">결과물</span>
        </NavLink>

        <NavLink
          className={({ isActive }) => navLinkClassName(isActive)}
          to="models"
        >
          <span className="text-base font-semibold">모델</span>
        </NavLink>
      </div>

      <Outlet />
    </div>
  )
}

export default Root
