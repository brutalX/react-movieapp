import React, { Component } from "react";
import ImageCard from "../Elements/ImageCard";
import styled from "styled-components";

const Container = styled.div`
  -webkit-flex-flow: row wrap;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  justify-content: space-evenly;
`;
const Item = styled.div`
  margin: 10px auto;
`;
class PopularMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=8936e84071adb244b8826f34badd40bb&language=en-US&page=1"
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.results
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;

    const baseurl = "https://image.tmdb.org/t/p/w500";

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div style={{ fontSize: "72px" }}>
          Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...Loading...
        </div>
      );
    } else {
      return (
        <Container>
          {console.log(items)}
          {items.map((item, idx) => (
            <Item key={idx}>
              <ImageCard
                key={item.id}
                image={baseurl + item.poster_path}
                title={item.original_title}
              />
            </Item>
          ))}
        </Container>
      );
    }
  }
}

export default PopularMovies;
