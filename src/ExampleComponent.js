import React from 'react'
import { useGetExampleDataQuery } from './apiSlice'

const ExampleComponent = () => {
  const { data, error, isLoading } = useGetExampleDataQuery()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>An error occurred: {error.message}</div>

  return (
    <div>
      <h2>Data from API</h2>
      {data && data.map((item) => <div key={item.id}>{item.name}</div>)}
    </div>
  )
}

export default ExampleComponent
