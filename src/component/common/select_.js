import React, {Component} from 'react'

function normalizeOptions (options) {
  if (!Array.isArray(options)) {
    return [];
  }
  return options.filter(option => option && option.value !== undefined && option.value !== null);
}

function getDefaultSelectValue (options) {
  return options.length > 0 ? options[0].value : '';
}

class Select_ extends Component {
  constructor (props) {
    super(props);
    const options = normalizeOptions(props.options);
    this.state = {
      show: false,
      selectValue: getDefaultSelectValue(options)
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.options !== this.props.options) {
      const options = normalizeOptions(this.props.options);
      const hasCurrentValue = options.some(option => option.value === this.state.selectValue);
      if (!hasCurrentValue) {
        this.setState({selectValue: getDefaultSelectValue(options)});
      }
    }
  }

  render () {
    const height_ = 50;
    const options = normalizeOptions(this.props.options);
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

Select_.defaultProps = {
  options: []
};

const styles = {
  p1: {
    width: 100, height: 50,
    lineHeight: '50px',
    textAlign: 'center'
  }
};
export default Select_