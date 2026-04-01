import React, {Component} from 'react'

function getInitialSelectValue(options) {
  return options && options.length > 0 ? options[0].value : null;
}

class Select_ extends Component {
  constructor (props) {
    super(props);
    this.state = {
      show: false,
      selectValue: getInitialSelectValue(props.options)
    }
  }

  componentDidUpdate (prevProps) {
    const prevOptions = Array.isArray(prevProps.options) ? prevProps.options : [];
    const nextOptions = Array.isArray(this.props.options) ? this.props.options : [];
    if (
      prevOptions.length === 0 &&
      nextOptions.length > 0 &&
      this.state.selectValue === null
    ) {
      this.setState({
        selectValue: nextOptions[0].value
      });
    }
  }

  render () {
    const height_ = 50;
    const options = Array.isArray(this.props.options) ? this.props.options : [];
    const selectValue = this.state.selectValue === null ? '请选择' : this.state.selectValue;
    return (
      <div
        onClick={() => {
          this.setState({show: !this.state.show})
        }}
        style={{
          width: 100,
          height: this.state.show ? height_ * options.length + 50 : height_, overflow: 'hidden',
          background: '#85E2FF',
          transition: 'all 0.4s ease',
        }}>
        <p style={styles.p1}>{selectValue}</p>
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

Select_.defaultProps = {
  options: []
};

export default Select_