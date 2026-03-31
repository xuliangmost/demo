import React, {Component} from 'react'

class Select_ extends Component {
  constructor (props) {
    super(props);
    const options = Array.isArray(props.options) ? props.options : [];
    const firstValue = options.length > 0 && options[0] && options[0].value !== undefined
      ? options[0].value
      : '';
    this.state = {
      show: false,
      selectValue: firstValue
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.options !== this.props.options) {
      const options = Array.isArray(this.props.options) ? this.props.options : [];
      const values = options.map(item => item && item.value);
      if (options.length === 0 && this.state.selectValue !== '') {
        this.setState({selectValue: ''});
      }
      if (options.length > 0 && values.indexOf(this.state.selectValue) === -1) {
        this.setState({
          selectValue: options[0] && options[0].value !== undefined ? options[0].value : ''
        });
      }
    }
  }

  render () {
    const height_ = 50;
    const options = Array.isArray(this.props.options) ? this.props.options : [];
    return (
      <div
        onClick={() => {
          this.setState({show: !this.state.show})
        }}
        style={{
          width: 100,
          height: this.state.show ? height_ * options.length + 50 : height_,
          overflow: 'hidden',
          background: '#85E2FF',
          transition: 'all 0.4s ease',
        }}>
        <p style={styles.p1}>{this.state.selectValue}</p>
        {
          options.map((ele, index) => {
            const value = ele && ele.value !== undefined ? ele.value : '';
            return <p style={styles.p1} key={index}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        this.setState({
                          selectValue: value,
                          show: false
                        });
                        this.props.onChange && this.props.onChange(value)
                      }}>{value}</p>
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