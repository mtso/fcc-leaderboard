import React, {Component} from 'react'
import TableHeader from './TableHeader.jsx'
import TableCell from './TableCell.jsx'

class Table extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    let cells = this.props.users.recent.map(
      (user, index) => <TableCell user={user} rank={index + 1} key={user.username} />
    )
    return (
      <table>
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          {cells}
        </tbody>
      </table>
    )
  }
}

export default Table
