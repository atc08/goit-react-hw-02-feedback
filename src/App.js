import React, { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';
import Section from './components/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // show = () => {
  //   if (this.state.good > 0);
  // };
  // hide = () => {
  //   if (this.state.good < 1);
  // };

  leaveFeedback = value => {
    this.setState(prevState => {
      return { [value]: prevState[value] + 1 };
    });
  };

  render() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    const goodPersent = Math.round((this.state.good / total) * 100);

    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={goodPersent}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
