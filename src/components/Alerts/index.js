/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const joinClasses = (...classes) => {
  return classes.join(' ');
};

export const Alerts = ({ alerts, handleDismiss }) => {
  return (
    <TransitionGroup>
      {alerts.map((alert, index) => (
        <CSSTransition
          key={index}
          timeout={100}
          classNames={{
            enterActive: 'in',
            enterDone: 'in',
            exit: '',
          }}
        >
          <Alert
            key={index}
            alert={alert}
            handleDismiss={event => {
              event.stopPropagation();
              handleDismiss(index);
            }}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export const Alert = ({ alert, handleDismiss }) => {
  return (
    <div className={joinClasses('alert', 'alert-dismissible fade', alert.type)}>
      <a
        className="close"
        data-dismiss="alert"
        aria-label="close"
        title="close"
        onClick={handleDismiss}
      >
        ×
      </a>
      {alert.message}
    </div>
  );
};

export class CommonAlert {
  constructor(message = '', type = alertTypes.SUCCESS) {
    this.message = message;
    this.type = type;
  }
}

export class AlertDanger extends CommonAlert {
  constructor(message) {
    super(message, alertTypes.DANGER);
  }
}

export class AlertSuccess extends CommonAlert {
  constructor(message) {
    super(message, alertTypes.SUCCESS);
  }
}

export const alertTypes = {
  SUCCESS: 'alert-success',
  DANGER: 'alert-danger',
};

const useAlerts = () => {
  const [alerts, setAlerts] = useState([]);

  const handleDismissAlert = index => {
    const newAlerts = alerts.filter((alert, nextIndex) => nextIndex !== index);
    setAlerts(newAlerts);
  };

  const addAlert = alert => {
    let newAlert;
    if (typeof alert === 'string') {
      newAlert = new AlertSuccess(alert);
    } else if (alert instanceof CommonAlert) {
      newAlert = alert;
    } else if (typeof alert === 'object' && alert.hasOwnProperty('message')) {
      newAlert = new CommonAlert(
        alert.message,
        alert.type || alertTypes.SUCCESS,
      );
    } else {
      console.error('Cannot add alert of unknown type: ', alert);
      return;
    }

    const newAlerts = [...alerts, newAlert];
    setAlerts(newAlerts);
  };

  const success = message => addAlert(message);
  const danger = message => addAlert(new AlertDanger(message));

  return [
    <Alerts alerts={alerts} handleDismiss={handleDismissAlert} />,
    success,
    danger,
    addAlert,
  ];
};

export default useAlerts;
