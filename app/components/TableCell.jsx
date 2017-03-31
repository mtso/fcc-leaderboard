import React, {Component} from 'react'

class TableCell extends Component {
  render() {
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
          {this.props.user.alltime}
        </td>
      </tr>
    )
  }
}

export default TableCell
