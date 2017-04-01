import React from 'react'
import ReactDOM from 'react-dom'
import Table from './components/Table.jsx'
import data from './data'

class App extends React.Component {
  render() {
    const titleStyle = {
      textAlign: 'center',
      fontVariant: 'small-caps',
      fontSize: '1em',
      fontWeight: 900
    }
    return (
      <div>
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <h1 style={titleStyle}>FCC TOP 100</h1>
          </div>
        </div>
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
