import React, {Component} from 'react'

class TableHeader extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <tr>
        <th>Rank</th>
        <th>Username</th>
        <th><a href="#" onClick={this.props.handleRecent}>Recent</a></th>
        <th><a href="#" onClick={this.props.handleAlltime}>All-Time</a></th>
      </tr>
    )
  }
}

export default TableHeader
