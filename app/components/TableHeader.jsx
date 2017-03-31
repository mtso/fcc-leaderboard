import React, {Component} from 'react'

class TableHeader extends Component {
  render() {
    return (
      <tr>
        <th>Rank</th>
        <th>Username</th>
        <th><a href="#">Recent</a></th>
        <th><a href="#">All-Time</a></th>
      </tr>
    )
  }
}

export default TableHeader
