import React from 'react';
import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((option, index) => (
    <div className={s.FeedbackBtns} key={index}>
      <button
        type="button"
        className={s.FeedBtn}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    </div>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
