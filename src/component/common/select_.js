import React, {Component} from 'react'

function normalizeOptions (options) {
  if (!Array.isArray(options)) {
    return [];
  }
  return options.filter(item => item && typeof item === 'object' && Object.prototype.hasOwnProperty.call(item, 'value'));
}

function getFirstValue (options) {
  return options[0] ? options[0].value : '';
}

class Select_ extends Component {
  constructor (props) {
    super(props);
    const options = normalizeOptions(props.options);
    this.state = {
      show: false,
      selectValue: getFirstValue(options)
    }
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    const options = normalizeOptions(nextProps.options);
    if (!options.length) {
      if (prevState.selectValue !== '' || prevState.show) {
        return {
          selectValue: '',
          show: false
        };
      }
      return null;
    }

    const hasSelected = options.some(item => item && item.value === prevState.selectValue);
    if (!hasSelected) {
      return {
        selectValue: getFirstValue(options)
      };
    }

    return null;
  }

  render () {
    const height_ = 50;
    const options = normalizeOptions(this.props.options);
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

Select_.defaultProps = {
  options: []
};

export default Select_