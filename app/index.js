const React = require('react')
const ReactDOM = require('react-dom');

const Table = require('./components/Table.jsx')

const data = require('./data')

const App = React.createClass({
  // getInitialState: function() {
  //   this.rankByAlltime = this.rankByAlltime.bind(this);
  // },
  rankByRecent: function() {
    var self = this;
    data
      .getRecent()
      .then(function(users) {
        self.setState({users: users})
      })
  },
  rankByAlltime: function() {
    console.log('hello alltime clicked');
    var self = this;
    data
      .getAllTime()
      .then(function(users) {
        self.setState({users: users})
      })
  },
  render: function() {
    return (
      <div class='panel'>
        <a href="#" onclick={this.rankByAlltime}> click me 1 </a>
        <Table users={this.props.users}
               handleRecent={this.rankByRecent}
               handleAlltime={this.rankByAlltime} />
      </div>
    )
  }
})

data.getRecent()
  .then(function(users) {
    ReactDOM.render(<App users={users} />, document.getElementById('app'))    
  })
