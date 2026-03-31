import React, {Component} from 'react'

class Select_ extends Component {
  constructor (props) {
    super(props);
    const options = Array.isArray(props.options) ? props.options : [];
    const firstValue = options.length > 0 && options[0] && options[0].value !== undefined
      ? options[0].value
      : '';
    this.state = {
      show: false,
      selectValue: firstValue
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.options !== this.props.options && this.state.selectValue === '') {
      const options = Array.isArray(this.props.options) ? this.props.options : [];
      if (options.length > 0 && options[0] && options[0].value !== undefined) {
        this.setState({
          selectValue: options[0].value
        });
      }
    }
  }

  render () {
    const height_ = 50;
    const options = Array.isArray(this.props.options) ? this.props.options : [];
    const hasOptions = options.length > 0;
    return (
      <div
        onClick={() => {
          if (hasOptions) {
            this.setState({show: !this.state.show})
          }
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
            const optionValue = ele && ele.value !== undefined ? ele.value : '';
            return <p style={styles.p1} key={index}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        this.setState({
                          selectValue: optionValue,
                          show: false
                        });
                        this.props.onChange && this.props.onChange(optionValue)
                      }}>{optionValue}</p>
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

Select_.defaultProps = {
  options: [],
  onChange: null
};

export default Select_