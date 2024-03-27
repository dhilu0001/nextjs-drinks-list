import TaskList from '@/components/TaskList'
import TaskFormCustom from '@/components/TaskFormCustom'
import React from 'react'
export const dynamic = 'force-dynamic'

const TasksPage = () => {
  return (
    <div className='max-w-lg'>
      <TaskFormCustom />
      <TaskList />
    </div>
  )
}

export default TasksPage
