const React = require('react');

const TableCell = require('./TableCell.jsx');
const TableHeader = require('./TableHeader.jsx');

const Table = React.createClass({
  getInitialState: function() {
    this.handleRecent = this.props.handleRecent
    this.handleAlltime = this.props.handleAlltime.bind(this)

    return {
      users: this.props.users
    }
  },
  render: function() {
    var cells = this.props.users.map(function(user, index) {
      return (
        <TableCell rank={index + 1} user={user} />
      )
    })
    return (
      <table class="table">
        <a href="#" onclick={this.props.handleAlltime}>click me</a>
        <TableHeader 
          handleRecent={this.props.handleRecent} 
          handleAlltime={this.props.handleAlltime} />
        {this.state.users.map(function(user, index) {
          return (
            <TableCell rank={index + 1} user={user} />
          )
        })}
      </table>
    )
  }
});

module.exports = Table;