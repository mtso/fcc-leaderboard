import React from 'react'
import ReactDOM from 'react-dom'
import Table from './components/Table.jsx'
import data from './data'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>FCC TOP 100</h1>
        <Table users={this.props.users} />
      </div>
    )
  }
}

data.getTopUsers()
  .then(function(users) {
    // Render table here
    console.log(users) // inspect the retrieved data
    ReactDOM.render(
      <App users={users} />,
      document.getElementById('app')
    )
  })
  .catch(function(err) {
    console.error(err)
  })
