const React = require('react');

const TableCell = require('./TableCell.jsx');

const Table = React.createClass({
  render: function() {
    var cells = this.props.users.map(function(user, index) {
      return (
        <TableCell rank={index + 1} user={user} />
      )
    })
    console.log('hello from table')
    return (
      <table class="table">
        {cells}
      </table>
    )
  }
});

module.exports = Table;