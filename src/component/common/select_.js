import React, {Component} from 'react'

class Select_ extends Component {
  constructor (props) {
    super(props);
    const options = Array.isArray(props.options) ? props.options : [];
    this.state = {
      show: false,
      selectValue: options.length ? options[0].value : ''
    }
  }

  componentDidUpdate (prevProps) {
    const prevOptions = Array.isArray(prevProps.options) ? prevProps.options : [];
    const nextOptions = Array.isArray(this.props.options) ? this.props.options : [];
    if (prevOptions !== nextOptions && nextOptions.length && !nextOptions.some(item => item.value === this.state.selectValue)) {
      this.setState({
        selectValue: nextOptions[0].value,
        show: false
      });
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
        <p style={styles.p1}>{hasOptions ? this.state.selectValue : '暂无数据'}</p>
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