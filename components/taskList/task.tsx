
import { Checkbox } from "../ui/checkbox"
import { EditIcon, SaveIcon, TrashIcon, XCircleIcon } from "lucide-react"
import { TaskState } from "./taskInterface"
import { useState } from "react"
import { Input } from "../ui/input"
import { useTasksStore } from "./taskStore"

export default function Task({ task }: { task: TaskState }) {
  const [done, setDone] = useState<boolean>(false)
  const updateTask = useTasksStore((state) => state.updateTask)
  const deleteTask = useTasksStore((state) => state.deleteTask)
  const [editTask, setEditTask] = useState<{ edit: boolean; name: string }>({
    edit: false,
    name: "",
  })

  return (
    <div
      className="
      bg-gray-700
      text-white
        flex 
        items-center
        rounded
        h-16
        p-3"
    >
      <Checkbox
        className="w-6 h-6 bg-white"
        checked={done}
        onClick={() => {
          setDone(!done)
          updateTask({ ...task, done: !done })
          console.log("done: ", done)
        }}
      />
      {
        editTask.edit
          ? <div className="flex flex-1 mr-2 ml-2 text-foreground gap-2 items-center font-semibold">
            <Input
              autoFocus
              type="text"
              value={editTask.name}
              onChange={(e) => setEditTask({ ...editTask, name: e.target.value })}
            />
            <SaveIcon
              className="w-6 h-6 text-green-700"
              onClick={() => {
                updateTask({ ...task, name: editTask.name })
                setEditTask({ edit: false, name: "" })
              }}
            />
          </div>
          : <h6 className="flex-1 ml-3 text-xl font-semibold tracking-tight">
            {task.name}
          </h6>
      }
      <div className="flex gap-2">
        {
          editTask.edit
            ? <XCircleIcon
              className="w-6 h-6 text-gray-400"
              onClick={() => {
                setEditTask({ edit: false, name: "" })
              }}
            />
            : <EditIcon
              className="w-6 h-6 text-yellow-600"
              onClick={() => {
                setEditTask({ edit: true, name: "" })
              }}
            />
        }
        <TrashIcon
          className="w-6 h-6 text-red-700"
          onClick={() => deleteTask(task.id)}
        />
      </div>
    </div>
  )
}