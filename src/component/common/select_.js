import React, {Component} from 'react'

class Select_ extends Component {
  constructor (props) {
    super(props);
    const options = this.getOptions(props);
    this.state = {
      show: false,
      selectValue: this.getInitialValue(options)
    }
  }

  componentDidUpdate (prevProps) {
    const prevOptions = this.getOptions(prevProps);
    const options = this.getOptions(this.props);
    if (prevOptions !== options) {
      const hasSelectedValue = options.some((item) => item.value === this.state.selectValue);
      if (!hasSelectedValue) {
        this.setState({
          selectValue: this.getInitialValue(options)
        })
      }
    }
  }

  getOptions (props) {
    return Array.isArray(props.options) ? props.options : []
  }

  getInitialValue (options) {
    return options[0] ? options[0].value : ''
  }

  render () {
    const height_ = 50;
    const options = this.getOptions(this.props);
    const showText = this.state.selectValue === '' ? '请选择' : this.state.selectValue;
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
        <p style={styles.p1}>{showText}</p>
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