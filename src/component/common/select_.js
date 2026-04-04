import React, {Component} from 'react'

class Select_ extends Component {
  constructor (props) {
    super(props);
    const options = Array.isArray(props.options) ? props.options : [];
    this.state = {
      show: false,
      selectValue: options[0] ? options[0].value : ''
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.options !== this.props.options) {
      const options = Array.isArray(this.props.options) ? this.props.options : [];
      const hasCurrent = options.some(item => item.value === this.state.selectValue);
      if (!hasCurrent) {
        this.setState({
          selectValue: options[0] ? options[0].value : '',
          show: false
        });
      }
    }
  }

  render () {
    const height_ = 50;
    let {options} = this.props;
    options = Array.isArray(options) ? options : [];
    const dropdownHeight = this.state.show ? height_ * options.length + 50 : height_;
    return (
      <div
        onClick={() => {
          if (options.length > 0) {
            this.setState({show: !this.state.show})
          }
        }}
        style={{
          width: 100,
          height: dropdownHeight, overflow: 'hidden',
          background: '#85E2FF',
          transition: 'all 0.4s ease',
        }}>
        <p style={styles.p1}>{this.state.selectValue || '暂无数据'}</p>
        {
          options.map((ele, index) => {
            return <p style={styles.p1} key={`${ele.value}_${index}`}
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