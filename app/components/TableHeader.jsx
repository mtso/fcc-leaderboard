const React = require('react');

const TableHeader = React.createClass({
  render: function() {
    return (
      <tr>
        <th>Rank</th>
        <th>Username</th>
        <th onclick={this.props.handleRecent}>Recent</th>
        <th onclick={this.props.handleAlltime}>All-Time</th>
      </tr>
    )
  }
})

module.exports = TableHeader;