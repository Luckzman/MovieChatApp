import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'Action', value: 1 },
  { key: 2, text: 'Horror', value: 2 },
  { key: 3, text: 'Adventure', value: 3 },
  { key: 4, text: 'Sci-Fi', value: 4 },
  { key: 5, text: 'Thriller', value: 5 },
  { key: 6, text: 'Animation', value: 6 },
  { key: 7, text: 'Comedy', value: 7 },
  { key: 8, text: 'Family', value: 8 },
  { key: 9, text: 'Drama', value: 9 },
  { key: 10, text: 'Music', value: 10 },
]

export default class FilterDropdown extends Component {
  state = {text: ''}

  handleChange = (e) => {
    this.setState({ text: e.target.children[0].innerText }, () => {this.props.getDropdownValue(this.state.text)})
    
  }

  render() {
    const { value } = this.state

    return (
      <Dropdown
        onChange={this.handleChange}
        options={options}
        placeholder='All'
        selection
        value={value}
      />
    )
  }
}
