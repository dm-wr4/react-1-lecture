import React, { Component } from 'react'

class Directory extends Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      name: '',
      image: '',
    }
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value,
    })
  }

  handleImageChange(e) {
    this.setState({
      image: e.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const newFriend = {
      name: this.state.name,
      image: this.state.image,
    }

    this.setState({
      friends: [...this.state.friends, newFriend],
    })
  }

  render() {
    const friendList = this.state.friends.map((element) => {
      return (
        <div>
          <img style={{ width: '100px' }} src={element.image} />
          <span>{element.name}</span>
        </div>
      )
    })

    return (
      <div>
        <h1>A list of my friends</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            onChange={(e) => this.handleNameChange(e)}
            placeholder="Name"
          />
          <input
            onChange={(e) => this.handleImageChange(e)}
            placeholder="Image"
          />
          <button>Submit</button>
        </form>
        {friendList}
      </div>
    )
  }
}

export default Directory
