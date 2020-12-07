import React from 'react';
import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((option, index) => (
    <button
      key={index}
      type="button"
      className={s.FeedBtn}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
