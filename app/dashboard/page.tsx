"use client"

import { useState } from "react"
import { Plus, X, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

// Types for our data structure
type Task = {
  id: string
  content: string
  completed: boolean
}

type Board = {
  id: string
  title: string
  tasks: Task[]
}

export default function Dashboard() {
  // Sample data for boards and tasks
  const [boards, setBoards] = useState<Board[]>([
    {
      id: "board-1",
      title: "Project Alpha",
      tasks: [
        { id: "task-1", content: "Design user interface mockups", completed: false },
        { id: "task-2", content: "Create component library", completed: false },
        { id: "task-3", content: "Implement authentication flow", completed: true },
        { id: "task-4", content: "Write API documentation", completed: true },
      ],
    },
    {
      id: "board-2",
      title: "Marketing Campaign",
      tasks: [
        { id: "task-5", content: "Create social media graphics", completed: false },
        { id: "task-6", content: "Schedule posts for next week", completed: false },
        { id: "task-7", content: "Analyze campaign performance", completed: true },
      ],
    },
    {
      id: "board-3",
      title: "Website Redesign",
      tasks: [
        { id: "task-8", content: "Gather user feedback", completed: false },
        { id: "task-9", content: "Create wireframes", completed: true },
        { id: "task-10", content: "Design homepage", completed: true },
      ],
    },
    {
      id: "board-4",
      title: "Product Launch",
      tasks: [
        { id: "task-11", content: "Finalize feature list", completed: false },
        { id: "task-12", content: "Prepare press release", completed: false },
        { id: "task-13", content: "Create launch timeline", completed: true },
      ],
    },
  ])

  // State for new board dialog
  const [newBoardTitle, setNewBoardTitle] = useState("")
  const [newTaskContent, setNewTaskContent] = useState("")
  const [activeBoardId, setActiveBoardId] = useState<string | null>(null)

  // Function to add a new board
  const addBoard = () => {
    if (newBoardTitle.trim() === "") return

    const newBoard: Board = {
      id: `board-${Date.now()}`,
      title: newBoardTitle,
      tasks: [],
    }

    setBoards([...boards, newBoard])
    setNewBoardTitle("")
  }

  // Function to add a new task to a board
  const addTask = (boardId: string) => {
    if (newTaskContent.trim() === "") return

    const newTask: Task = {
      id: `task-${Date.now()}`,
      content: newTaskContent,
      completed: false,
    }

    setBoards(
      boards.map((board) => {
        if (board.id === boardId) {
          return {
            ...board,
            tasks: [...board.tasks, newTask],
          }
        }
        return board
      }),
    )

    setNewTaskContent("")
    setActiveBoardId(null)
  }

  // Function to toggle task completion
  const toggleTaskCompletion = (boardId: string, taskId: string) => {
    setBoards(
      boards.map((board) => {
        if (board.id === boardId) {
          return {
            ...board,
            tasks: board.tasks.map((task) => {
              if (task.id === taskId) {
                return { ...task, completed: !task.completed }
              }
              return task
            }),
          }
        }
        return board
      }),
    )
  }

  // Function to delete a task
  const deleteTask = (boardId: string, taskId: string) => {
    setBoards(
      boards.map((board) => {
        if (board.id === boardId) {
          return {
            ...board,
            tasks: board.tasks.filter((task) => task.id !== taskId),
          }
        }
        return board
      }),
    )
  }

  return (
    <div>
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">Task Boards</h1>
        <p className="text-gray-500">Manage your projects and tasks in one place</p>
      </header>

      {/* Boards Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 items-start">
        {boards.map((board) => (
          <Card key={board.id} className="overflow-hidden border-none shadow-md">
            <div className="border-b border-gray-100 bg-white p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-800">{board.title}</h2>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 bg-gray-50 p-4">
              {/* To Do Column */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500">To Do</h3>
                <div className="space-y-2">
                  {board.tasks
                    .filter((task) => !task.completed)
                    .map((task) => (
                      <TaskCard
                        key={task.id}
                        task={task}
                        onToggle={() => toggleTaskCompletion(board.id, task.id)}
                        onDelete={() => deleteTask(board.id, task.id)}
                      />
                    ))}
                </div>
              </div>

              {/* Done Column */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500">Done</h3>
                <div className="space-y-2">
                  {board.tasks
                    .filter((task) => task.completed)
                    .map((task) => (
                      <TaskCard
                        key={task.id}
                        task={task}
                        onToggle={() => toggleTaskCompletion(board.id, task.id)}
                        onDelete={() => deleteTask(board.id, task.id)}
                      />
                    ))}
                </div>
              </div>
            </div>

            {/* Add Task Button */}
            <div className="border-t border-gray-100 bg-white p-3">
              <Dialog
                open={activeBoardId === board.id}
                onOpenChange={(open) => (open ? setActiveBoardId(board.id) : setActiveBoardId(null))}
              >
                <DialogTrigger asChild>
                  <Button variant="ghost" className="w-full justify-start text-sm text-gray-500 hover:text-teal-600">
                    <Plus className="mr-1 h-4 w-4" />
                    Add Task
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Task</DialogTitle>
                    <DialogDescription>Create a new task for {board.title}</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="task-content">Task Description</Label>
                      <Textarea
                        id="task-content"
                        placeholder="Enter task details..."
                        value={newTaskContent}
                        onChange={(e) => setNewTaskContent(e.target.value)}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="secondary" onClick={() => setActiveBoardId(null)}>
                      Cancel
                    </Button>
                    <Button onClick={() => addTask(board.id)}>Add Task</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </Card>
        ))}

        {/* Add New Board Card */}
        <Dialog>
          <DialogTrigger asChild>
            <Card className="flex h-full min-h-[240px] cursor-pointer flex-col items-center justify-center border-2 border-dashed border-gray-200 bg-white p-6 text-gray-400 transition-colors hover:border-gray-300 hover:text-gray-500">
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="rounded-full bg-gray-100 p-2">
                  <Plus className="h-6 w-6" />
                </div>
                <span className="font-medium">Add New Board</span>
              </div>
            </Card>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Board</DialogTitle>
              <DialogDescription>Add a new board to organize your tasks</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="board-title">Board Title</Label>
                <Input
                  id="board-title"
                  placeholder="Enter board title..."
                  value={newBoardTitle}
                  onChange={(e) => setNewBoardTitle(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setNewBoardTitle("")}>
                Cancel
              </Button>
              <Button onClick={addBoard}>Create Board</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Floating Action Button */}
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-teal-500 p-0 shadow-lg hover:bg-teal-600"
            size="icon"
          >
            <Plus className="h-6 w-6" />
            <span className="sr-only">Add New Task</span>
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Quick Add Task</DialogTitle>
            <DialogDescription>Quickly add a task to any board</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="quick-board-select">Select Board</Label>
              <select
                id="quick-board-select"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                onChange={(e) => setActiveBoardId(e.target.value)}
                value={activeBoardId || ""}
              >
                <option value="" disabled>
                  Select a board
                </option>
                {boards.map((board) => (
                  <option key={board.id} value={board.id}>
                    {board.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="quick-task-content">Task Description</Label>
              <Textarea
                id="quick-task-content"
                placeholder="Enter task details..."
                value={newTaskContent}
                onChange={(e) => setNewTaskContent(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setNewTaskContent("")
                setActiveBoardId(null)
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                if (activeBoardId) {
                  addTask(activeBoardId)
                }
              }}
              disabled={!activeBoardId}
            >
              Add Task
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

// Task Card Component
function TaskCard({
  task,
  onToggle,
  onDelete,
}: {
  task: Task
  onToggle: () => void
  onDelete: () => void
}) {
  return (
    <Card
      className={`border-l-4 ${task.completed ? "border-l-green-500" : "border-l-teal-500"} bg-white p-3 shadow-sm`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-2">
          <Checkbox checked={task.completed} onCheckedChange={onToggle} className="mt-1" />
          <p className={`text-sm ${task.completed ? "text-gray-400 line-through" : "text-gray-700"}`}>{task.content}</p>
        </div>
        <Button variant="ghost" size="icon" className="h-6 w-6 text-gray-400 hover:text-red-500" onClick={onDelete}>
          <X className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  )
}
