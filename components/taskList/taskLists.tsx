"use client"
import Task from "./task"
import { useTasksStore } from "./taskStore"

export default function TaskList() {
  const tasks = useTasksStore((state) => state.tasks)

  return (
    <div className="flex flex-col gap-1 w-1/2">
      {
        tasks.map((task) => <Task key={task.name} task={task} />)
      }
    </div>
  )
}