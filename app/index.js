const React = require('react')
const ReactDOM = require('react-dom');

const Table = require('./components/Table.jsx')

const data = require('./data')

const App = React.createClass({
  render: function() {
    return (
      <div class='panel'>
        <Table users={this.props.users} />
      </div>
    )
  }
})

data.getRecent()
  .then(function(users) {
    ReactDOM.render(<App users={users} />, document.getElementById('app'))    
  })
