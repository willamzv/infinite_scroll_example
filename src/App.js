import React, { Component } from 'react';
import './App.css';
import InfiniteScroll from 'react-infinite-scroller';

class App extends Component {
  state = {
    pages: [],
    hasMore: true,
    count: 0
  }

  loadFunc = () => {
    let { pages, count } = this.state;
    count++;
    pages.push(count);
    this.setState({ count, pages });
  }

  render() {
    const items = [];
    this.state.pages.map((page,i) => {
      items.push(
        <div
          key={i}
          style={{
            height: 200,
            borderBottom: '3px solid red',
            backgroun: 'rgb(233,203,230)'}} >
          {page}
        </div>
      )
    })
    return (
      <div className="App">
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadFunc}
          hasMore={this.state.hasMore}
          loader={<div className="loader">Loading ...</div>}>
            {items}
        </InfiniteScroll>
      </div>
    );
  }
}

export default App;
