import React, {Component} from 'react'

class Select_ extends Component {
  constructor (props) {
    super(props);
    const options = this.getSafeOptions(props.options);
    this.state = {
      show: false,
      selectValue: this.getFirstOptionValue(options)
    }
  }

  getSafeOptions = (options) => {
    return Array.isArray(options) ? options : [];
  }

  getFirstOptionValue = (options) => {
    if (!options.length || options[0] === null || options[0] === undefined) {
      return '';
    }
    return options[0].value === undefined ? '' : options[0].value;
  }

  componentDidUpdate (prevProps) {
    if (prevProps.options !== this.props.options) {
      const options = this.getSafeOptions(this.props.options);
      const currentStillExists = options.some(item => item && item.value === this.state.selectValue);
      if (!currentStillExists) {
        this.setState({
          selectValue: this.getFirstOptionValue(options)
        });
      }
    }
  }

  render () {
    const height_ = 50;
    const options = this.getSafeOptions(this.props.options);
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

Select_.defaultProps = {
  options: []
};

const styles = {
  p1: {
    width: 100, height: 50,
    lineHeight: '50px',
    textAlign: 'center'
  }
};
export default Select_