import React from 'react';
import Modal, {ICustomModalStyle} from '@bdenzer/react-modal';

import {Button} from "../../login/elements/Button";

interface IState {
  isOpen: boolean;
}

export class ModalWindow extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  
  public render(): JSX.Element {
    const {children} = this.props;
    const modalStyle: ICustomModalStyle = {
      animationTime: 400,
      modalBackground: {
        height: '100vh'
      },
      modalInner: {
       width: '70%'
      },
      modalHeader: {
        backgroundColor: '#2196f3',
        color: '#ffffff'
      },
      modalBody: {
        backgroundColor: '#2f3242',
        fontFamily: 'Montserrat',
        fontSize: '16px',
        color: '#ffffff'
      },
      closeButtonText: {
        color: '#ffffff'
      }
    };
    
    return (
    <div>
      <Modal closeModal={() => this.closeModal()}
             customStyle={modalStyle}
             shouldShowModal={this.state.isOpen}
             title="Add project">
        {children}
      </Modal>
      <Button onClick={() => this.openModal()} className='topNav__content--add'>
        <span className="add">Add</span>
        <span className="plus">+</span>
      </Button>
    </div>
    );
  }
  
  private closeModal(): void {
    this.setState({isOpen: false});
  }
  
  private openModal(): void {
    this.setState({isOpen: true});
  }
}
