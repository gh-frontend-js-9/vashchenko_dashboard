import React from 'react';

import user from '../../../assets/images/photo1.png'

export const ThreadsItems: React.FunctionComponent = () => {
  return (
  <div className="threadContent">
    <div className="allMessages">
      <div className="message">
        <div className="messageInfo">
          <div className="messageInfo-left">
            <img src="" alt=""/>
            <h2>Michelele Stewart</h2>
          </div>
          <div className="messageInfo-right">
            <span>Today, 5:32 PM</span>
          </div>
        </div>
        <div className="messageLastText">
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ducimus eius error </span>
        </div>
      </div>
    </div>
    
    <div className="wholeChat">
    </div>
    
    <div className="chatUserInfo">
      <div className="chatUserInfo-details">
        <div>
          <img className="picture" src={user}/>
        </div>
        <div className="name">
          <h2>Lyall Roach</h2>
          <h3>UX/UI Designer</h3>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias commodi, corporis cumque id illo iusto molestiae numquam quibusdam rerum saepe, sequi sint tenetur veniam. At ducimus laudantium saepe sed temporibus.</p>
      </div>
      <div className="chatUserInfo-contact">
        <span>Email</span>
        <h4>lyallroach@gmail.com</h4>
        <span>Phone</span>
        <h4>+48 500 400 300</h4>
        <span>Adress</span>
        <h4>65 Lorem St, Warsaw, PL</h4>
        <span>Organization</span>
        <h4>Symu.co</h4>
      </div>
    </div>
  </div>
  );
};
