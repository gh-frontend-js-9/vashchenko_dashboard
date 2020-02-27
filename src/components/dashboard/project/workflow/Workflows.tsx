import React from 'react';

export default class Workflows extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      list: [],
    }
  }
  
  render() {
    return <div className="workflow">
      <div className="workflow-content">
        <div className="quened workflow-content-table">
          <div className="title">
            <h2>Quened</h2>
            <h5>1 project <span className="dotSpacing">&#9679;</span> <span className="totalPrice">$1500</span></h5>
          </div>
          <ul className="quened-list workflow-content-table-list">
            <li>
              <div className="pic">
              </div>
              <div className="info">
                <h4>Wordpress theme</h4>
                <span className="info-co-price">Symu.co <span className="dotSpacing">&#9679;</span> $1500</span>
              </div>
              <div className="edit">
              </div>
            </li>
          </ul>
        </div>
        <div className="quened workflow-content-table">
          <div className="title">
            <h2>Planned</h2>
            <h5>1 project <span className="dotSpacing">&#9679;</span> <span className="totalPrice">$1500</span></h5>
          </div>
          <ul className="quened-list workflow-content-table-list">
            <li>
              <div className="pic"></div>
              <div className="info">
                <h4>Wordpress theme</h4>
                <span className="info-co-price">Symu.co <span className="dotSpacing">&#9679;</span> $1500</span>
              </div>
              <div className="edit"></div>
            </li>
          </ul>
        </div>
        <div className="quened workflow-content-table">
          <div className="title">
            <h2>Desing</h2>
            <h5>1 project <span className="dotSpacing">&#9679;</span> <span className="totalPrice">$1500</span></h5>
          </div>
          <ul className="quened-list workflow-content-table-list">
            <li>
              <div className="pic"></div>
              <div className="info">
                <h4>Wordpress theme</h4>
                <span className="info-co-price">Symu.co <span className="dotSpacing">&#9679;</span> $1500</span>
              </div>
              <div className="edit"></div>
            </li>
          </ul>
        </div>
        <div className="quened workflow-content-table">
          <div className="title">
            <h2>Development</h2>
            <h5>1 project <span className="dotSpacing">&#9679;</span> <span className="totalPrice">$1500</span></h5>
          </div>
          <ul className="quened-list workflow-content-table-list">
            <li>
              <div className="pic"></div>
              <div className="info">
                <h4>Wordpress theme</h4>
                <span className="info-co-price">Symu.co <span className="dotSpacing">&#9679;</span> $1500</span>
              </div>
              <div className="edit"></div>
            </li>
          </ul>
        </div>
        <div className="quened workflow-content-table">
          <div className="title">
            <h2>Testing</h2>
            <h5>1 project <span className="dotSpacing">&#9679;</span> <span className="totalPrice">$1500</span></h5>
          </div>
          <ul className="quened-list workflow-content-table-list">
            <li>
              <div className="pic"></div>
              <div className="info">
                <h4>Wordpress theme</h4>
                <span className="info-co-price">Symu.co <span className="dotSpacing">&#9679;</span> $1500</span>
              </div>
              <div className="edit"></div>
            </li>
          </ul>
        </div>
        <div className="quened workflow-content-table">
          <div className="title">
            <h2>Completed</h2>
            <h5>1 project <span className="dotSpacing">&#9679;</span> <span className="totalPrice">$1500</span></h5>
          </div>
          <ul className="quened-list workflow-content-table-list">
            <li>
              <div className="pic"></div>
              <div className="info">
                <h4>Wordpress theme</h4>
                <span className="info-co-price">Symu.co <span className="dotSpacing">&#9679;</span> $1500</span>
              </div>
              <div className="edit"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
  }
}
