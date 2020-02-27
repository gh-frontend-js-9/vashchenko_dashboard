import React from 'react';

import TopNav from '../main/TopNav';
import SideNav from '../main/SideNav';
import ThreadInfoNav from './ThreadInfoNav';
import ThreadContent from './ThreadContent';

export default class Thread extends React.Component {
  constructor(props: any) {
    super(props)
  }
  
  render() {
    return <div className='thread container'>
      <TopNav/>
      <SideNav/>
      <ThreadInfoNav/>
      <ThreadContent/>
    </div>
  }
}
