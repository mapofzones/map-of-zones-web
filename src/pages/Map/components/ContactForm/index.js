/* eslint-disable jsx-a11y/anchor-is-valid,no-unused-vars,no-useless-escape */
import React, { useReducer, useState } from 'react';
import Modal from 'components/Modal';
import classNames from 'classnames/bind';

import styles from './index.module.css';
import useAlerts from '../../../../components/Alerts';
import { Textbox } from 'react-inputs-validation';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';

const cx = classNames.bind(styles);

const googleContactFormURI = process.env.GOOGLE_CONTACT_FORM_URI;

const sitePattern = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
const zoneRPCPattern = /^https?:\/\/(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]):[0-9]+$/;
const emailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const rowStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  padding: '2%',
  fontSize: '14px',
};
const rowWrapperStyle = {
  display: 'table',
  width: '100%',
};
const rowContainerStyle = {
  display: 'table-cell',
  verticalAlign: 'middle',
  borderBottom: '1px solid #e5e5e5',
};
const labelStyle = {
  display: 'inline-block',
};
const labelContentStyle = {
  verticalAlign: 'middle',
};

function ContactForm({ isOpen, onRequestClose }) {
  const reducer = (prevState, updatedProperty) => ({
    ...prevState,
    ...updatedProperty,
  });

  const [state, setState] = useReducer(reducer, {
    webSite: '',
    zoneRPC: '',
    contacts: '',
    auxiliaryInfo: '',
  });
  const [validate, setValidate] = useState(false);
  const [operating, setOperating] = useState(false);
  const [errors, setErrors] = useState({});
  const [alerts, success, danger] = useAlerts();

  const handleSubmit = event => {
    event.preventDefault();
    setValidate(true);

    // if (!all valid) {
    // axios
    //   .post(googleContactFormURI, {
    //     'entry.1591308327': state.webSite,
    //     'entry.1591308328': state.zoneRPC,
    //     'entry.1591308329': state.contacts,
    //     'entry.1591308330': state.auxiliaryInfo,
    //   })
    //   .then(function(response) {
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  };

  return (
    <Modal
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
        <h1>Let’s make your Star shining bright</h1>
        <h2>
          Please fill out the form below and our team will expedite the process
          of lighting up your Zone on the{' '}
          <a className={cx('bold-link')}>mapofzones.com</a> Any information you
          may consider relevant is encouraged to be provided in the “Auxiliary
          information” section.
        </h2>
        <form onSubmit={handleSubmit}>
          <div style={rowWrapperStyle}>
            <div style={rowContainerStyle}>
              <div style={rowStyle}>
                <div
                  style={{ ...labelStyle, flex: '3 3 0px', marginTop: '3px' }}
                >
                  <span
                    className="icon icon-person"
                    style={{ ...labelContentStyle, fontSize: '20px' }}
                  />
                  &nbsp;
                  <span style={labelContentStyle} className="required-label">
                    Website or GitHub
                  </span>
                </div>
                <div style={{ flex: '6 6 0px' }}>
                  <Textbox
                    attributesWrapper={{}}
                    attributesInput={{
                      name: 'webSite',
                      type: 'text',
                      placeholder: 'i. e. https://example.com',
                    }}
                    value={state.webSite}
                    validate={validate}
                    onChange={value => {
                      setState({ webSite: value });
                    }}
                    validationOption={{
                      reg: sitePattern,
                      max: 50,
                    }}
                  />
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
                  <span
                    className="icon icon-person"
                    style={{ ...labelContentStyle, fontSize: '20px' }}
                  />
                  &nbsp;
                  <span style={labelContentStyle}>Zone RPC</span>
                </div>
                <div style={{ flex: '6 6 0px' }}>
                  <Textbox
                    attributesWrapper={{}}
                    attributesInput={{
                      name: 'zoneRPC',
                      type: 'text',
                      placeholder: 'i. e. https://123.45.67.89:26657',
                    }}
                    value={state.zoneRPC}
                    validate={validate}
                    onChange={value => {
                      setState({ zoneRPC: value });
                    }}
                    validationOption={{
                      reg: zoneRPCPattern,
                      max: 50,
                      required: false,
                    }}
                  />
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
                  <span
                    className="icon icon-person"
                    style={{ ...labelContentStyle, fontSize: '20px' }}
                  />
                  &nbsp;
                  <span style={labelContentStyle}>Your Contacts</span>
                </div>
                <div style={{ flex: '6 6 0px' }}>
                  <Textbox
                    attributesWrapper={{}}
                    attributesInput={{
                      name: 'contacts',
                      type: 'text',
                      placeholder: 'i. e. Telegram, Twitter or Email',
                    }}
                    value={state.contacts}
                    validate={validate}
                    onChange={value => {
                      setState({ contacts: value });
                    }}
                    validationOption={{
                      reg: emailPattern,
                      max: 100,
                      required: false,
                    }}
                  />
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
                  <span
                    className="icon icon-person"
                    style={{ ...labelContentStyle, fontSize: '20px' }}
                  />
                  &nbsp;
                  <span style={labelContentStyle}>Auxiliary info</span>
                </div>
                <div style={{ flex: '6 6 0px' }}>
                  <Textbox
                    attributesWrapper={{}}
                    attributesInput={{
                      name: 'auxiliaryInfo',
                      placeholder:
                        'i. e. links to repositories, logo files, style guidelines, preferred communication channels and other information',
                    }}
                    value={state.auxiliaryInfo}
                    validate={validate}
                    onChange={value => {
                      setState({ auxiliaryInfo: value });
                    }}
                    validationOption={{
                      max: 500,
                      required: false,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div style={{ height: '10px' }} />
          <div
            className={cx('my-button', 'my-button__green', 'save-button')}
            onClick={handleSubmit}
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
