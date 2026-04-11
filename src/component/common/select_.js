import React, {Component} from 'react'

class Select_ extends Component {
  constructor (props) {
    super(props);
    const options = this.getOptions(props.options);
    this.state = {
      show: false,
      selectValue: options.length > 0 ? options[0].value : ''
    }
  }

  getOptions = (options) => {
    if (!Array.isArray(options)) {
      return [];
    }
    return options.filter(item => item && item.value !== undefined && item.value !== null);
  };

  componentDidUpdate (prevProps) {
    if (prevProps.options !== this.props.options) {
      const options = this.getOptions(this.props.options);
      const hasSelectedValue = options.some(item => item.value === this.state.selectValue);
      if (!hasSelectedValue) {
        this.setState({
          selectValue: options.length > 0 ? options[0].value : '',
          show: false
        });
      }
    }
  }

  render () {
    const height_ = 50;
    const options = this.getOptions(this.props.options);
    const showText = this.state.selectValue === '' ? '暂无选项' : this.state.selectValue;
    return (
      <div
        onClick={() => {
          this.setState({show: options.length > 0 ? !this.state.show : false})
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