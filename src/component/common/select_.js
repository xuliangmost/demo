import React, {Component} from 'react'

class Select_ extends Component {
  constructor (props) {
    super(props);
    const options = Array.isArray(props.options) ? props.options : [];
    this.state = {
      show: false,
      selectValue: options.length > 0 ? options[0].value : ''
    }
  }

  componentDidUpdate (prevProps) {
    const prevValues = this.getOptionValues(prevProps.options);
    const nextValues = this.getOptionValues(this.props.options);
    const optionsChanged = prevValues.length !== nextValues.length || prevValues.some((value, idx) => {
      return value !== nextValues[idx];
    });
    if (optionsChanged && nextValues.indexOf(this.state.selectValue) === -1) {
      const nextValue = nextValues.length > 0 ? nextValues[0] : '';
      if (this.state.selectValue !== nextValue || this.state.show) {
        this.setState({
          selectValue: nextValue,
          show: false
        });
      }
    }
  }

  getOptionValues (options) {
    const safeOptions = Array.isArray(options) ? options : [];
    return safeOptions.map((option) => option && option.value).filter((value) => value !== undefined);
  }

  render () {
    const height_ = 50;
    let options = Array.isArray(this.props.options) ? this.props.options : [];
    return (
      <div
        onClick={() => {
          this.setState({show: !this.state.show})
        }}
        style={{
          width: 100,
          height: this.state.show ? height_ * options.length + 50 : height_, overflow: 'hidden',
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