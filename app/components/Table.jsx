import React, {Component} from 'react'
import TableHeader from './TableHeader.jsx'
import TableCell from './TableCell.jsx'

class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isRecent: true,
      isAscending: false
    }
    this.toggleType = this.toggleType.bind(this)
    this.toggleOrder = this.toggleOrder.bind(this)
    this.onRecentClick = this.onRecentClick.bind(this)
    this.onAlltimeClick = this.onAlltimeClick.bind(this)
  }
  toggleType() {
    this.setState({
      isRecent: !this.state.isRecent
    })
  }
  toggleOrder() {
    this.setState({
      isAscending: !this.state.isAscending
    })
  }
  onRecentClick() {
    if (this.state.isRecent) {
      this.toggleOrder()
    } else {
      this.toggleType()
    }
  }
  onAlltimeClick() {
    if (this.state.isRecent) {
      this.toggleType()
    } else {
      this.toggleOrder()
    }
  }
  render() {
    let type = this.state.isRecent ? 'recent' : 'allTime'
    let sorter = (a, b) => { return this.state.isAscending ?
      a[type.toLowerCase()] - b[type.toLowerCase()] :
      b[type.toLowerCase()] - a[type.toLowerCase()]
    }
    let users = this.props.users[type].sort(sorter)
    let cells = users.map(
      (user, index) => {
        let rank = this.state.isAscending ? 100 - index : index + 1
        return (
          <TableCell user={user} rank={rank} key={user.username} />
        )
      }
    )
    return (
      <table className='table'>
        <thead>
          <TableHeader
            handleRecent={this.onRecentClick}
            handleAlltime={this.onAlltimeClick}
            isRecentSelected={this.state.isRecent}
            isAscending={this.state.isAscending} />
        </thead>
        <tbody>
          {cells}
        </tbody>
      </table>
    )
  }
}

export default Table
