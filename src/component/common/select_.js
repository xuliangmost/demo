import React, {Component} from 'react'

function getDefaultSelectValue (options) {
  if (!Array.isArray(options) || options.length === 0) {
    return '';
  }
  const first = options[0];
  return first && first.value !== undefined && first.value !== null ? first.value : '';
}

class Select_ extends Component {
  constructor (props) {
    super(props);
    this.state = {
      show: false,
      selectValue: getDefaultSelectValue(props.options)
    }
  }

  componentDidUpdate (prevProps) {
    // Ensure async options updates can still render a default value.
    if (prevProps.options !== this.props.options && !this.state.selectValue) {
      const nextDefaultValue = getDefaultSelectValue(this.props.options);
      if (nextDefaultValue) {
        this.setState({selectValue: nextDefaultValue});
      }
    }
  }

  render () {
    const height_ = 50;
    const options = Array.isArray(this.props.options) ? this.props.options : [];
    const currentValue = this.state.selectValue || '请选择';
    return (
      <div
        onClick={() => {
          this.setState({show: !this.state.show})
        }}
        style={{
          width: 100,
          height: this.state.show ? height_ * options.length + height_ : height_, overflow: 'hidden',
          background: '#85E2FF',
          transition: 'all 0.4s ease',
        }}>
        <p style={styles.p1}>{currentValue}</p>
        {
          options.map((ele, index) => {
            const optionValue = ele && ele.value !== undefined && ele.value !== null ? ele.value : '';
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
export default Select_