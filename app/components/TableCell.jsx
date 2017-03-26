const React = require('react')

const TableCell = React.createClass({

  render: function() {
    console.log(Object.keys(this.props.user))
    return (
      <tr>
        <td>
          {this.props.rank}
        </td>
        <td>
          {this.props.user.username}
        </td>
        <td>
          {this.props.user.recent}
        </td>

        <td>
        <span> — </span>
          {this.props.user.alltime}
        </td>
      </tr>
    )
  }
});

module.exports = TableCell;