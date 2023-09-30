"use client"
import { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { useTasksStore } from "./taskStore"

export default function AddTask() {
  const addTask = useTasksStore((state) => state.addTask)
  const [taskName, setTaskName] = useState<string>("")

  return (
    <div className="flex justify-center w-6/12 h-1/12 gap-3">
      <Input
        type="text"
        placeholder="Add Task"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <Button
        type="button"
        onClick={() => {
          addTask(taskName)
          setTaskName("")
        }}
      >
        Add
      </Button>
    </div>
  )
}