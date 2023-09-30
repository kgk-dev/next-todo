export interface TaskState {
  id: number
  name: string
  done: boolean
}

export interface TasksState {
  tasks: Array<TaskState>
  length: number
  addTask: (task: string) => void
  updateTask: (task: TaskState) => void
  deleteTask: (id: number) => void
}