import React, { Component } from 'react';

class DogContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dogImage: '',
      dogRequest: false,
    };
  }

  fetchDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((data) => data.json())
      .then((dog) => {
        this.setState({ 
         dogImage: dog.message,
         dogRequest: true,
         });
      });
  };

  componentDidMount() {
    this.fetchDog();
  }

  render() {
    const { dogImage, dogRequest } = this.state;
    return (
     <div>
      { dogRequest ? <img src={dogImage} alt="" /> : <span>LOADING...</span> }
     </div>
    );
  }
}

export default DogContainer;
