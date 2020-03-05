import React from 'react';

import {Header} from "../base/Header";
import {Sidebar} from "../base/Sidebar";

const Home: React.FunctionComponent = () => {
  return (
  <main className="container">
    <Header/>
    <Sidebar/>
  </main>
  )
};

export default Home
