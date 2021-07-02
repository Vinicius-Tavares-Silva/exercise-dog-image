import React, { Component } from 'react';

class DogContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dogImage: '',
    };
  }

  fetchDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((data) => data.json())
      .then((dog) => {
        console.log(dog.message);
        this.setState({ dogImage: dog.message });
      });
  };

  componentDidMount() {
    this.fetchDog();
  }

  render() {
    const { dogImage } = this.state;
    return <img src={dogImage} alt="" />;
  }
}

export default DogContainer;
