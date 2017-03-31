import React from 'react'
import ReactDOM from 'react-dom'
import Table from './components/Table.jsx'
import data from './data'

data.getTopUsers()
  .then(function(users) {
    // Render table here
    console.log(users) // inspect the retrieved data
    ReactDOM.render(
      <Table users={users} />,
      document.getElementById('app')
    )
  })
  .catch(function(err) {
    console.error(err)
  })
