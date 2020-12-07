import React, { Fragment } from 'react';
import s from './Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return (
    <Fragment>
      <p className={s.NotificationMassege}>{message}</p>
    </Fragment>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
