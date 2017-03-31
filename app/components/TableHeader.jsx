import React, {Component} from 'react'

class TableHeader extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let arrow = this.props.isAscending ? '▲' : '▼' // '↑' : '↓'
    return (
      <tr>
        <th>Rank</th>
        <th>Username</th>
        <th><a href="#" onClick={this.props.handleRecent}>Recent {this.props.isRecentSelected ? arrow : ''}</a></th>
        <th><a href="#" onClick={this.props.handleAlltime}>All-Time {!this.props.isRecentSelected ? arrow : ''}</a></th>
      </tr>
    )
  }
}

export default TableHeader
