import React from 'react'
import prisma from '@/utils/db'

const prismaHandlers = async () => {
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })
  return allTasks;
}
const PrismaExample = async () => {
  const tasks = await prismaHandlers();
  if (!tasks.length) {
    return <h2 className='mt-8 font0medium text-lg'>No tasks to show ...</h2>
  }
  return (
    <div>
      <h1 className='text-4xl'>Tasks</h1>
      {
        tasks.map((task) => {
          return (
            <h2 key={task.id} className='text-xl py-2 px-2'>
              {task.content}
            </h2>
          )
        })
      }
    </div>
  )
}

export default PrismaExample
