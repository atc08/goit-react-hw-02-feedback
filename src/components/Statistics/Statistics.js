import React from 'react';
import s from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={s.FeedbackStats}>
      <p className={s.stats}>Good: {good}</p>
      <p className={s.stats}>Neutral: {neutral}</p>
      <p className={s.stats}>Bad: {bad}</p>
      <p className={s.stats}>Total: {total}</p>
      <p className={s.stats}>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
