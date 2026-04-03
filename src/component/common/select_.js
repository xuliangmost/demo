import React, {Component} from 'react'

class Select_ extends Component {
  constructor (props) {
    super(props);
    const options = Array.isArray(props.options) ? props.options : [];
    this.state = {
      show: false,
      selectValue: options.length > 0 ? options[0].value : ''
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.options === this.props.options) {
      return;
    }

    const options = Array.isArray(this.props.options) ? this.props.options : [];
    if (options.length === 0) {
      if (this.state.selectValue !== '' || this.state.show) {
        this.setState({
          selectValue: '',
          show: false
        });
      }
      return;
    }

    const hasCurrentValue = options.some((option) => option && option.value === this.state.selectValue);
    if (!hasCurrentValue) {
      this.setState({selectValue: options[0].value});
    }
  }

  render () {
    const height_ = 50;
    const options = (Array.isArray(this.props.options) ? this.props.options : [])
      .filter((option) => option && option.value !== undefined);
    const selectedValue = this.state.selectValue || (options[0] ? options[0].value : '请选择');
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
        <p style={styles.p1}>{selectedValue}</p>
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

Select_.defaultProps = {
  options: [],
  onChange: null
};

const styles = {
  p1: {
    width: 100, height: 50,
    lineHeight: '50px',
    textAlign: 'center'
  }
};
export default Select_