import React from 'react';

export const ThreadsItems: React.FunctionComponent = () => {
  return (
  <div className="inbox">
    <div className="inbox__dialogues-container">
      <div className="inbox__dialogues">
        <div className="inbox__dialogue">
          <div className="inbox__dialogue-info">
            <div className="inbox__dialogue-user">
              <div className="inbox__dialogue-user-img">
                <img src="images/chat-avatar-2.png" alt="" className="img-responsive"/>
              </div>
              <span className="inbox__dialogue-user-text">Michelle Stewart</span>
            </div>
            <span className="inbox__dialogue-message-date">
                  Today, 5:32 PM
                </span>
          </div>
          <p className="inbox__dialogue-message">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.
          </p>
        </div>
      
        <div className="inbox__dialogue">
          <div className="inbox__dialogue-info">
            <div className="inbox__dialogue-user">
              <div className="inbox__dialogue-user-img">
                <img src="images/chat-avatar-1.png" alt="" className="img-responsive"/>
              </div>
              <span className="inbox__dialogue-user-text">Jolene Slater</span>
            </div>
            <span className="inbox__dialogue-message-date">
                  10 April
                </span>
          </div>
          <p className="inbox__dialogue-message">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
          </p>
        </div>
      
        <div className="inbox__dialogue inbox__dialogue_active">
          <div className="inbox__dialogue-info">
            <div className="inbox__dialogue-user">
              <div className="inbox__dialogue-user-img">
                <img src="images/chat-avatar-2.png" alt="" className="img-responsive"/>
              </div>
              <span className="inbox__dialogue-user-text">Lyall Roach</span>
            </div>
            <span className="inbox__dialogue-message-date inbox__dialogue-message-date_read">
                  8 April
                </span>
          </div>
          <p className="inbox__dialogue-message">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      
        <div className="inbox__dialogue">
          <div className="inbox__dialogue-info">
            <div className="inbox__dialogue-user">
              <div className="inbox__dialogue-user-img">
                <img src="images/chat-avatar-4.png" alt="" className="img-responsive"/>
              </div>
              <span className="inbox__dialogue-user-text">Dominic Lynton</span>
            </div>
            <span className="inbox__dialogue-message-date inbox__dialogue-message-date_read">
                  2 April
                </span>
          </div>
          <p className="inbox__dialogue-message">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
          </p>
        </div>
      
        <div className="inbox__dialogue">
          <div className="inbox__dialogue-info">
            <div className="inbox__dialogue-user">
              <div className="inbox__dialogue-user-img">
                <img src="images/chat-avatar-4.png" alt="" className="img-responsive"/>
              </div>
              <span className="inbox__dialogue-user-text">Dominic Lynton</span>
            </div>
            <span className="inbox__dialogue-message-date inbox__dialogue-message-date_read">
                  2 April
                </span>
          </div>
          <p className="inbox__dialogue-message">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
          </p>
        </div>
      
        <div className="inbox__dialogue">
          <div className="inbox__dialogue-info">
            <div className="inbox__dialogue-user">
              <div className="inbox__dialogue-user-img">
                <img src="images/chat-avatar-4.png" alt="" className="img-responsive"/>
              </div>
              <span className="inbox__dialogue-user-text">Dominic Lynton</span>
            </div>
            <span className="inbox__dialogue-message-date inbox__dialogue-message-date_read">
                  2 April
                </span>
          </div>
          <p className="inbox__dialogue-message">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
          </p>
        </div>
    
      </div>
      <div className="inbox__dialogues-btn-wrapper">
        <button className="inbox__dialogues-btn">
          <span className="inbox__dialogues-btn-sign">+</span>
          <span className="inbox__dialogues-btn-text">New conversation</span>
        </button>
      </div>
    </div>
  
    <div className="inbox__messages">
      <div className="inbox__messages-container">
      
        <div className="inbox__messages-message">
          <div className="inbox__messages-avatar">
            <img className="img-responsive" src="images/msg-sender-pic.png" alt=""/>
          </div>
          <div className="inbox__messages-message-container">
            <div className="inbox__messages-text">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ulla pariatur.
            </div>
            <div className="inbox__messages-date">
              4 April 2016, 5:32 PM
            </div>
          </div>
        </div>
      
        <div className="inbox__messages-message inbox__messages_right">
          <div className="inbox__messages-message-container">
            <div className="inbox__messages-text">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            </div>
            <div className="inbox__messages-date inbox__messages-date_right">
              4 April 2016, 5:32 PM
            </div>
          </div>
          <div className="inbox__messages-avatar">
            <img className="img-responsive" src="images/user-pic.png" alt=""/>
          </div>
        </div>
      
        <div className="inbox__messages-message">
          <div className="inbox__messages-avatar">
            <img className="img-responsive" src="images/msg-sender-pic.png" alt=""/>
          </div>
          <div className="inbox__messages-message-container">
            <div className="inbox__messages-text">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ulla pariatur.
            </div>
            <div className="inbox__messages-date">
              4 April 2016, 5:32 PM
            </div>
          </div>
        </div>
      
        <div className="inbox__messages-message inbox__messages_right">
          <div className="inbox__messages-message-container">
            <div className="inbox__messages-text">
              Ut enim ad minim veniam,ex ea commo! is aute irure dolor in re
            </div>
            <div className="inbox__messages-date inbox__messages-date_right">
              4 April 2016, 5:32 PM
            </div>
          </div>
          <div className="inbox__messages-avatar">
            <img className="img-responsive" src="images/user-pic.png" alt=""/>
          </div>
        </div>
      
        <div className="inbox__messages-message inbox__messages_right">
          <div className="inbox__messages-message-container">
            <div className="inbox__messages-text">
              Ut enim ad minim is aute irure dolor in reprehenderit in volu
            </div>
            <div className="inbox__messages-date inbox__messages-date_right">
              4 April 2016, 5:32 PM
            </div>
          </div>
          <div className="inbox__messages-avatar">
            <img className="img-responsive" src="images/user-pic.png" alt=""/>
          </div>
        </div>
      </div>
    
      <div className="inbox__messages-input-wrapper">
        <div className="inbox__messages-input-container">
          <textarea className="inbox__messages-input" placeholder="Write a message" name="message"></textarea>
          <i className="fas fa-paperclip fw inbox__messages-input-icon"></i>
      </div>
      </div>
    
      <div className="inbox__profile">
        <div className="inbox__profile-img">
          <img className="img-responsive" src="images/inbox-profile.png" alt=""/>
        </div>
        <span className="inbox__profile-name">Lyall Roach</span>
        <span className="inbox__profile-profession">UX/UI Designer</span>
        <p className="inbox__profile-about">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmoc tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad
        </p>
        <div className="inbox__profile-contacts">
          <div className="inbox__profile-contact">
            <span className="inbox__profile-contact-label">Email</span>
            <span className="inbox__profile-contact-text inbox__profile-contact-email" title="lyallroach@gmail.com">lyallroach@gmail.com</span>
          </div>
          <div className="inbox__profile-contact">
            <span className="inbox__profile-contact-label">Phone</span>
            <span className="inbox__profile-contact-text">+48 500 400 300</span>
          </div>
          <div className="inbox__profile-contact">
            <span className="inbox__profile-contact-label">Address</span>
            <span className="inbox__profile-contact-text">65 Lorem St, Warsaw, PL</span>
          </div>
          <div className="inbox__profile-contact">
            <span className="inbox__profile-contact-label">Organization</span>
            <span className="inbox__profile-contact-text">Symu.co</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
