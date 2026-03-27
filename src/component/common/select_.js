import React, {Component} from 'react'

class Select_ extends Component {
  constructor (props) {
    super(props);
    const options = this.getOptions(props);
    this.state = {
      show: false,
      selectValue: options.length > 0 ? options[0].value : ''
    }
  }

  getOptions (props = this.props) {
    if (!Array.isArray(props.options)) {
      return [];
    }
    return props.options;
  }

  componentDidUpdate (prevProps) {
    if (prevProps.options !== this.props.options) {
      const options = this.getOptions();
      const matchedOption = options.find((item) => item.value === this.state.selectValue);
      if (!matchedOption) {
        this.setState({
          selectValue: options.length > 0 ? options[0].value : ''
        });
      }
    }
  }

  render () {
    const height_ = 50;
    let options = this.getOptions();
    return (
      <div
        onClick={() => {
          if (options.length === 0) {
            return;
          }
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