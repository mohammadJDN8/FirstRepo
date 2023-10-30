import React, { Component } from 'react';
import Navbar from './component/Navbar';
import Banner from './component/Banner';
import Cards from './component/Cards';
import Search from './component/search';
import Logos from './component/logos';
import Footer from './component/footer';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <Cards />
        <Search />
        <Logos />
        <Footer />
      </div>
    );
  }
}

export default App;