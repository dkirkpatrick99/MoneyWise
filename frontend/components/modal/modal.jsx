
import React from 'react';
import { closeModal } from '../../actions/modal_action';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import ContributionModalContainer from '../contribution/contribution_modal_container';


function Modal({modal, closeModal, campaignId}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'contribution':
      component = <ContributionModalContainer campId={campaignId}/>
      break;
    default:
      return null;
  }
  return (
    <div onClick={closeModal}>
      <div onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
    modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);