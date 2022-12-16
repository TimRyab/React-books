import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div className='item'>
            <img src={"./img/" + this.props.item.img} />
            <h2>{this.props.item.title}</h2>
            <h3>{this.props.item.author}</h3>
            <h4><i>{this.props.item.category}</i></h4>
            <p>{this.props.item.year}</p>
            <p>{this.props.item.lang}</p>
            <p>{this.props.item.desc}</p>
            <div className='add-to-cart'>+</div>
      </div>
    )
  }
}

export default Item