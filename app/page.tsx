import AddTask from "@/components/taskList/addTask"
import TaskList from "@/components/taskList/taskLists"
import Toolbar from "@/components/toolbar"

export default function Home() {
  return (
    <div className="flex flex-col gap-5 items-center">
      <Toolbar />
      <AddTask />
      <TaskList />
    </div>
  )
}