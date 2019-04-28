import React from 'react';

class Skill extends React.Component {
  state = {
    percentage: ''
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        percentage: `${this.props.percentage}%`
      });
    }, this.props.delay);
  }
  render() {
    return (
      <div className="skill">
        <span className="skill__label">{this.props.label}</span>
        <div className="skill__bar" style={{ width: this.state.percentage }} />
        <div className="skill__percentage">{this.props.percentage}%</div>
      </div>
    );
  }
}

export default Skill;
