import React, {Component} from 'react'

class Select_ extends Component {
  constructor (props) {
    super(props);
    const safeOptions = this.getSafeOptions(props);
    this.state = {
      show: false,
      selectValue: safeOptions[0] ? safeOptions[0].value : ''
    }
  }

  getSafeOptions (props = this.props) {
    const {options} = props;
    if (!Array.isArray(options)) {
      return [];
    }
    return options.filter(item => item && typeof item.value !== 'undefined');
  }

  componentDidUpdate (prevProps) {
    if (prevProps.options !== this.props.options) {
      const safeOptions = this.getSafeOptions();
      if (!safeOptions.length) {
        if (this.state.selectValue !== '') {
          this.setState({selectValue: '', show: false});
        }
        return;
      }
      const hasCurrent = safeOptions.some(item => item.value === this.state.selectValue);
      if (!hasCurrent) {
        this.setState({selectValue: safeOptions[0].value});
      }
    }
  }

  render () {
    const height_ = 50;
    const options = this.getSafeOptions();
    return (
      <div
        onClick={() => {
          if (!options.length) {
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
        <p style={styles.p1}>{this.state.selectValue || '-'}</p>
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