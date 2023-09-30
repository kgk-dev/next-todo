import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import { TaskState, TasksState } from "./taskInterface"

const generateId = ((i = 0) => () => ++i)()

export const createTask =
  (name: string, done = false): TaskState => ({ id: generateId(), name, done })

export const useTasksStore = create<TasksState>()(
  devtools(
    persist(
      (set) => ({
        tasks: [],
        length: 0,
        addTask: (newTask: string) => set((state) => ({
          tasks: [...state.tasks, createTask(newTask)],
          length: state.length + 1,
        })),
        updateTask: (updatedTask: TaskState) => set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task),
        })),
        deleteTask: (id: number) => set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
          length: state.length - 1,
        })),
      }),
      {
        name: "task_store",
      }
    )
  )
)