import React, {Component} from 'react'

class Select_ extends Component {
  constructor (props) {
    super(props);
    const options = this.getSafeOptions(props.options);
    this.state = {
      show: false,
      selectValue: options.length > 0 ? options[0].value : ''
    }
  }

  getSafeOptions (options) {
    return Array.isArray(options) ? options : [];
  }

  componentDidUpdate (prevProps) {
    if (prevProps.options !== this.props.options) {
      const options = this.getSafeOptions(this.props.options);
      const hasSelected = options.some((option) => option.value === this.state.selectValue);
      if (!hasSelected) {
        this.setState({
          selectValue: options.length > 0 ? options[0].value : '',
          show: false
        });
      }
    }
  }

  render () {
    const height_ = 50;
    const options = this.getSafeOptions(this.props.options);
    const displayValue = this.state.selectValue || '暂无可选项';
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
        <p style={styles.p1}>{displayValue}</p>
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