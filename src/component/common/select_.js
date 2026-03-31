import React, {Component} from 'react'

class Select_ extends Component {
  constructor (props) {
    super(props);
    const options = this.getNormalizedOptions(props.options);
    this.state = {
      show: false,
      selectValue: options.length > 0 ? options[0].value : ''
    }
  }

  getNormalizedOptions (options) {
    if (!Array.isArray(options)) {
      return [];
    }
    return options.filter((item) => item && typeof item.value !== 'undefined');
  }

  componentDidUpdate (prevProps) {
    if (prevProps.options === this.props.options) {
      return;
    }

    const options = this.getNormalizedOptions(this.props.options);
    if (options.length === 0) {
      if (this.state.selectValue !== '' || this.state.show) {
        this.setState({
          show: false,
          selectValue: ''
        });
      }
      return;
    }

    const selectedExists = options.some((item) => item && item.value === this.state.selectValue);
    if (!selectedExists) {
      this.setState({
        show: false,
        selectValue: options[0].value
      });
    }
  }

  render () {
    const height_ = 50;
    const options = this.getNormalizedOptions(this.props.options);
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
          height: this.state.show ? height_ * (options.length + 1) : height_,
          overflow: 'hidden',
          background: '#85E2FF',
          transition: 'all 0.4s ease',
        }}>
        <p style={styles.p1}>{this.state.selectValue || '请选择'}</p>
        {
          options.map((ele) => {
            return <p style={styles.p1} key={String(ele.value)}
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