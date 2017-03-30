const Table = require('./components/Table.jsx')
const ReactDOM = require('react-dom')
const data = require('./data')

ReactDOM.render(
  <Table />,
  document.getElementById('app')
)
data.getTopUsers()
  .then(function(users) {
    console.log(users)
  })
  .catch(function(err) {
    console.error(err)
  })
