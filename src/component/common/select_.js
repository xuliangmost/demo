import React, {Component} from 'react'

class Select_ extends Component {
  static defaultProps = {
    options: []
  };

  constructor (props) {
    super(props);
    const firstValue = this.getFirstValue(props.options);
    this.state = {
      show: false,
      selectValue: firstValue
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.options !== this.props.options) {
      const nextValue = this.getFirstValue(this.props.options);

      if (!this.hasOptionValue(this.props.options, this.state.selectValue) && nextValue !== this.state.selectValue) {
        this.setState({selectValue: nextValue});
      }
    }
  }

  getFirstValue (options) {
    if (!Array.isArray(options) || options.length === 0) {
      return '';
    }

    return options[0] && options[0].value ? options[0].value : '';
  }

  hasOptionValue (options, value) {
    if (!Array.isArray(options) || options.length === 0) {
      return false;
    }

    return options.some((item) => item && item.value === value);
  }

  render () {
    const height_ = 50;
    let options = Array.isArray(this.props.options) ? this.props.options : [];
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