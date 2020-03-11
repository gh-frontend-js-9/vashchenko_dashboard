import React from 'react';

import {Header} from "../base/Header";
import {Sidebar} from "../base/Sidebar";
import {InfoBar} from "./InfoBar";
import {ThreadsItems} from "./ThreadsItems"

const Thread: React.FunctionComponent = () => {
  return (
  <main className="container">
    <Header/>
    <Sidebar/>
    <div className='thread'>
      <InfoBar />
      <ThreadsItems />
    </div>
  </main>
  )
};

export default Thread
