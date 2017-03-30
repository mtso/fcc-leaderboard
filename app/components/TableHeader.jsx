const React = require('react');

const TableHeader = React.createClass({
  render: function() {
    return (
      <tr>
        <th>Rank</th>
        <th>Username</th>
        <th onClick={this.props.handleRecent}>Recent</th>
        <th onClick={this.props.handleAlltime}>All-Time</th>
      </tr>
    )
  }
})

module.exports = TableHeader;
