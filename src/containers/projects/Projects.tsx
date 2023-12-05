import { FolderOpenIcon, PlusIcon } from '@heroicons/react/24/outline'

const Projects = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <h1 className="text-2xl font-bold">프로젝트</h1>

      <div className="flex flex-row gap-3">
        <button className="flex flex-row items-center gap-1 px-4 py-2 rounded hover:bg-zinc-200 dark:hover:bg-zinc-800">
          <FolderOpenIcon className="w-4 h-4" />
          <span className="text-sm font-medium">프로젝트 불러오기</span>
        </button>

        <button className="flex flex-row items-center gap-1 px-3 py-2 rounded drop-shadow bg-lime-500 active:bg-lime-600 hover:bg-lime-600 text-zinc-900">
          <PlusIcon className="w-4 h-4" />
          <span className="text-sm font-medium">새 프로젝트</span>
        </button>
      </div>
    </div>
  )
}

export default Projects
