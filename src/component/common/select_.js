import React, {Component} from 'react'

class Select_ extends Component {
  constructor (props) {
    super(props);
    const options = this.normalizeOptions(props.options);
    this.state = {
      show: false,
      selectValue: options.length > 0 ? options[0].value : ''
    }
  }

  normalizeOptions (options) {
    return Array.isArray(options) ? options : []
  }

  componentDidUpdate (prevProps) {
    if (prevProps.options !== this.props.options) {
      const options = this.normalizeOptions(this.props.options);
      const hasCurrentValue = options.some(ele => ele && ele.value === this.state.selectValue);
      if (!hasCurrentValue) {
        this.setState({
          selectValue: options.length > 0 ? options[0].value : ''
        })
      }
    }
  }

  render () {
    const height_ = 50;
    const options = this.normalizeOptions(this.props.options);
    return (
      <div
        onClick={() => {
          this.setState({show: !this.state.show})
        }}
        style={{
          width: 100,
          height: this.state.show ? height_ * (options.length + 1) : height_, overflow: 'hidden',
          background: '#85E2FF',
          transition: 'all 0.4s ease',
        }}>
        <p style={styles.p1}>{this.state.selectValue}</p>
        {
          options.map((ele, index) => {
            const currentValue = ele && ele.value !== undefined ? ele.value : '';
            return <p style={styles.p1} key={index}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        this.setState({
                          selectValue: currentValue,
                          show: false
                        });
                        this.props.onChange && this.props.onChange(currentValue)
                      }}>{currentValue}</p>
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
  options: []
};

export default Select_