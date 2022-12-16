import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'All1',
                    name: 'All'
                },
                {
                    key: 'Fantasy2',
                    name: 'Fantasy'
                },
                {
                    key: 'Novel3',
                    name: 'Novel'
                },
                {
                    key: 'Thriller4',
                    name: 'Thriller'
                },
                {
                    key: 'Horrors5',
                    name: 'Horrors'
                }
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
            {this.state.categories.map(el =>(
                <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>  
            ))}
      </div>
    )
  }
}

export default Categories