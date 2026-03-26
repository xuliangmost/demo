import React, {Component} from 'react'

class Select_ extends Component {
  constructor (props) {
    super(props);
    const options = this.getValidOptions(props.options);
    this.state = {
      show: false,
      selectValue: options.length > 0 ? options[0].value : ''
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.options !== this.props.options) {
      const options = this.getValidOptions(this.props.options);
      const hasCurrentValue = options.some((item) => item.value === this.state.selectValue);
      if (!hasCurrentValue) {
        this.setState({
          selectValue: options.length > 0 ? options[0].value : '',
          show: false
        });
      }
    }
  }

  getValidOptions (options) {
    if (!Array.isArray(options)) {
      return [];
    }
    return options.filter((item) => item && Object.prototype.hasOwnProperty.call(item, 'value'));
  }

  render () {
    const height_ = 50;
    const options = this.getValidOptions(this.props.options);
    return (
      <div
        onClick={() => {
          if (options.length > 0) {
            this.setState({show: !this.state.show})
          }
        }}
        style={{
          width: 100,
          height: this.state.show ? height_ * options.length + 50 : height_, overflow: 'hidden',
          background: '#85E2FF',
          transition: 'all 0.4s ease',
        }}>
        <p style={styles.p1}>{this.state.selectValue || '请选择'}</p>
        {
          options.map((ele, index) => {
            return <p style={styles.p1} key={`${ele.value}-${index}`}
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