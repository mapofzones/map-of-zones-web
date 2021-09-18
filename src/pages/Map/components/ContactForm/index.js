/* eslint-disable jsx-a11y/anchor-is-valid,no-unused-vars,no-useless-escape */
import React, { useEffect, useReducer, useState } from 'react';
import axiosClient from '../../../../utils/axiosClient';
import Modal from 'components/Modal';
import classNames from 'classnames/bind';

import styles from './index.module.css';
import useAlerts from '../../../../components/Alerts';
import { ReactComponent as ErrorIcon } from 'assets/images/errorIcon.svg';
import { ReactComponent as SuccessIcon } from 'assets/images/successIcon.svg';
import { Textbox, Textarea } from 'react-inputs-validation';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';
import { ReactComponent as CloseIcon } from '../../../../assets/images/close-btn.svg';

const cx = classNames.bind(styles);

const googleContactFormURI = process.env.REACT_APP_GOOGLE_CONTACT_FORM_URI;

const sitePattern = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
const zoneRPCPattern = /^https?:\/\/(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]):[0-9]+$/;
const emailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const rowStyle = {
  display: 'flex',
  flexDirection: 'column',
  fontSize: '14px',
};
const rowWrapperStyle = {
  display: 'table',
  width: '100%',
  marginBottom: '10px',
};
const rowContainerStyle = {
  display: 'table-cell',
  verticalAlign: 'middle',
};
const labelStyle = {
  display: 'inline-block',
  marginBottom: '5px',
  color: '#828282',
  fontWeight: '600',
  fontSize: '12px',
  lineHeight: '19px',
};
const labelContentStyle = {
  verticalAlign: 'middle',
};

function ContactForm({
  isOpen,
  onRequestClose,
  handleCloseCircle,
  handleShowCircle,
}) {
  const reducer = (prevState, updatedProperty) => ({
    ...prevState,
    ...updatedProperty,
  });

  const initialState = {
    webSite: '',
    zoneRPC: '',
    contacts: '',
    auxiliaryInfo: '',
    hasWebSiteError: true,
    hasZoneError: false,
    hasContactError: false,
    hasWebSiteTouch: false,
    hasZoneTouch: false,
    hasContactTouch: false,
    hasAuxiliaryInfoTouch: false,
    hasNetworkError: false,
  };

  const [state, setState] = useReducer(reducer, initialState);
  const [validInputs, setValidateInputs] = useState([]);
  const [validate, setValidate] = useState(false);
  const [operating, setOperating] = useState(false);
  const [errors, setErrors] = useState({});
  const [alerts, success, danger] = useAlerts();

  const handleShowCircleTimer = () => {
    onRequestClose();
    setState(initialState);
    handleShowCircle();
    setTimeout(handleCloseCircle, 3000);
  };

  useEffect(() => {
    return () => setState({ hasNetworkError: false });
  }, []);

  const handleSubmit = async event => {
    event.preventDefault();
    setValidate(true);
    setState({ ...state, hasNetworkError: false });
    try {
      const data = new FormData();
      data.append('entry.87677407', state.webSite);
      data.append('entry.574402888', state.zoneRPC);
      data.append('entry.1004796790', state.contacts);
      data.append('entry.1483119905', state.auxiliaryInfo);

      await axiosClient
        .post(googleContactFormURI, data, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then(function(response) {
          handleShowCircleTimer();
        });
    } catch (err) {
      if (err.message === 'Network Error') {
        setState({ hasNetworkError: true });
      }
    }
  };

  return (
    <Modal
      backdropFilterBlur="blur(8px)"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentClassName={cx('content')}
      animations={{
        afterOpen: 'animate__slideInRight',
        beforeClose: 'animate__slideOutRight',
        overlayAfterOpen: 'overlayFadeIn',
        overlayBeforeClose: 'overlayFadeOut',
      }}
    >
      <div>
        <div className={cx('mobile-wrapper')}>
          <button
            type="button"
            onClick={onRequestClose}
            className={cx('closeButton')}
          >
            <CloseIcon />
          </button>
          <h1>Let’s make your Star shining bright</h1>
          <h2>
            Please fill out the form below and our team will expedite the
            process of lighting up your Zone on the{' '}
            <a
              href="https://mapofzones.com"
              target="_blank
          "
              className={cx('bold-link')}
            >
              mapofzones.com
            </a>
            <br />
            <br />
            Any information you may consider relevant is encouraged to be
            provided in the “Auxiliary information” section.
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={cx('mobile-wrapper')}>
            <div style={rowWrapperStyle}>
              <div style={rowContainerStyle}>
                <div style={rowStyle}>
                  <div
                    style={{ ...labelStyle, flex: '3 3 0px', marginTop: '3px' }}
                  >
                    <span className="required-label">
                      Website or GitHub <span style={{ color: 'red' }}>*</span>
                    </span>
                  </div>
                  <div
                    style={{
                      flex: '6 6 0px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Textbox
                      customStyleInput={{
                        padding: '15px 13px',
                        backgroundColor: '#E0E0E0',
                      }}
                      customStyleWrapper={{
                        width: '100%',
                        marginRight: state.hasWebSiteTouch ? '10px' : 0,
                      }}
                      attributesInput={{
                        id: 'webSite',
                        type: 'text',
                        placeholder: 'i. e. https://example.com',
                      }}
                      validationCallback={isNotValidate => {
                        setState({ hasWebSiteError: isNotValidate });
                      }}
                      onBlur={() => {
                        setState({ hasWebSiteTouch: true });
                      }}
                      value={state.webSite}
                      onChange={value => {
                        setState({ webSite: value });
                      }}
                      validationOption={{
                        reg: sitePattern,
                        regMsg: 'Please enter a valid Website or GitHub',
                        required: true,
                        max: 50,
                      }}
                    />
                    {state.hasWebSiteTouch &&
                      state.webSite &&
                      (state.hasWebSiteError ? (
                        <ErrorIcon
                          className={cx({
                            responseStatus:
                              state.hasWebSiteError && state.hasWebSiteTouch,
                          })}
                        />
                      ) : (
                        <SuccessIcon
                          className={cx({
                            responseStatus:
                              state.hasWebSiteError && state.hasWebSiteTouch,
                          })}
                        />
                      ))}
                  </div>
                </div>
              </div>
            </div>
            <div style={rowWrapperStyle}>
              <div style={rowContainerStyle}>
                <div style={rowStyle}>
                  <div
                    style={{ ...labelStyle, flex: '3 3 0px', marginTop: '3px' }}
                  >
                    <span style={labelContentStyle}>Zone RPC</span>
                  </div>
                  <div
                    style={{
                      flex: '6 6 0px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Textbox
                      attributesWrapper={{}}
                      customStyleInput={{
                        padding: '15px 13px',
                        backgroundColor: '#F4F4F5',
                      }}
                      customStyleWrapper={{
                        width: '100%',
                        marginRight: state.hasZoneTouch ? '10px' : 0,
                      }}
                      attributesInput={{
                        name: 'zoneRPC',
                        type: 'text',
                        placeholder: 'i. e. https://123.45.67.89:26657',
                      }}
                      value={state.zoneRPC}
                      onChange={value => {
                        setState({ zoneRPC: value });
                        setState({ hasZoneTouch: true });
                      }}
                    />
                    {state.hasZoneTouch && state.zoneRPC && (
                      <SuccessIcon
                        className={cx({
                          responseStatus:
                            state.hasZoneError && state.hasZoneTouch,
                        })}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div style={rowWrapperStyle}>
              <div style={rowContainerStyle}>
                <div style={rowStyle}>
                  <div
                    style={{ ...labelStyle, flex: '3 3 0px', marginTop: '3px' }}
                  >
                    <span style={labelContentStyle}>Your Contacts</span>
                  </div>
                  <div
                    style={{
                      flex: '6 6 0px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Textbox
                      attributesWrapper={{}}
                      customStyleInput={{
                        padding: '15px 13px',
                        backgroundColor: '#F4F4F5',
                      }}
                      customStyleWrapper={{
                        width: '100%',
                        marginRight: state.hasContactTouch ? '10px' : 0,
                      }}
                      attributesInput={{
                        name: 'contacts',
                        type: 'text',
                        placeholder: 'i. e. Telegram, Twitter or Email',
                      }}
                      value={state.contacts}
                      validate={validate}
                      onChange={value => {
                        setState({ ...state, contacts: value });
                        setState({ hasContactTouch: true });
                      }}
                    />
                    {state.hasContactTouch && state.contacts && (
                      <SuccessIcon
                        className={cx({
                          responseStatus:
                            state.hasContactError && state.hasContactTouch,
                        })}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div style={rowWrapperStyle}>
              <div style={rowContainerStyle}>
                <div style={rowStyle}>
                  <div
                    style={{ ...labelStyle, flex: '3 3 0px', marginTop: '3px' }}
                  >
                    <span style={labelContentStyle}>Auxiliary info</span>
                  </div>
                  <div
                    style={{
                      flex: '6 6 0px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Textarea
                      attributesWrapper={{}}
                      customStyleInput={{
                        padding: '15px 13px',
                        backgroundColor: '#F4F4F5',
                      }}
                      classNameInput={cx({
                        background: 'red',
                      })}
                      customStyleWrapper={{
                        width: '100%',
                        marginRight: state.hasAuxiliaryInfoTouch ? '10px' : 0,
                      }}
                      attributesInput={{
                        name: 'auxiliaryInfo',
                        rows: 5,
                        placeholder:
                          'i. e. links to repositories, logo files, style guidelines, preferred communication channels and other information',
                      }}
                      value={state.auxiliaryInfo}
                      validate={validate}
                      onChange={value => {
                        setState({ auxiliaryInfo: value });
                        setState({ hasAuxiliaryInfoTouch: true });
                      }}
                      validationOption={{
                        max: 500,
                        required: false,
                      }}
                    />
                    {state.hasAuxiliaryInfoTouch && state.auxiliaryInfo && (
                      <SuccessIcon
                        className={cx({
                          responseStatus: state.hasAuxiliaryInfoTouch,
                        })}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              height: '100%',
              margin: 0,
            }}
          >
            {state.hasNetworkError && (
              <p style={{ ...labelStyle, margin: 0, color: 'red' }}>
                if you experience difficulties sending your form, please contact
                us via Twitter @MapOfZones
              </p>
            )}
          </div>
          <div
            className={cx('my-button', 'my-button__green', 'save-button', {
              'my-button_disabled': state.hasWebSiteError,
            })}
            onClick={!state.hasWebSiteError ? handleSubmit : () => {}}
          >
            Submit
          </div>
          <input type="submit" style={{ display: 'none' }} />
        </form>
      </div>
    </Modal>
  );
}

export default ContactForm;
