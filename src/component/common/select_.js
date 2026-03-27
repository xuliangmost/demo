import React, {Component} from 'react'

class Select_ extends Component {
  constructor (props) {
    super(props);
    const firstOption = props.options && props.options.length > 0 ? props.options[0].value : '';
    this.state = {
      show: false,
      selectValue: firstOption
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.options !== this.props.options) {
      const nextValue = this.props.options && this.props.options.length > 0 ? this.props.options[0].value : '';
      if (!this.props.options || this.props.options.length === 0) {
        if (this.state.selectValue !== '') {
          this.setState({selectValue: ''});
        }
        return;
      }
      const hasCurrentValue = this.props.options.some(option => option.value === this.state.selectValue);
      if (!hasCurrentValue) {
        this.setState({selectValue: nextValue});
      }
    }
  }

  render () {
    const height_ = 50;
    let {options = []} = this.props;
    const panelHeight = this.state.show ? height_ * options.length + 50 : height_;
    return (
      <div
        onClick={() => {
          this.setState({show: !this.state.show})
        }}
        style={{
          width: 100,
          height: panelHeight, overflow: 'hidden',
          background: '#85E2FF',
          transition: 'all 0.4s ease',
        }}>
        <p style={styles.p1}>{this.state.selectValue}</p>
        {
          options.map((ele, index) => {
            return <p style={styles.p1} key={index}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        this.setState({
                          selectValue: ele.value,
                          show: false
                        });
                        this.props.onChange && this.props.onChange(ele.value)
                      }}>{ele.value}</p>
          })
        }
      </div>
    )
  }
}

const styles = {
  p1: {
    width: 100, height: 50,
    lineHeight: '50px',
    textAlign: 'center'
  }
};
export default Select_