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

  componentWillReceiveProps (nextProps) {
    const options = Array.isArray(nextProps.options) ? nextProps.options : [];
    if (options.length === 0) {
      if (this.state.selectValue !== '') {
        this.setState({selectValue: '', show: false});
      }
      return;
    }

    const currentValueExists = options.some((ele) => ele && ele.value === this.state.selectValue);
    if (!currentValueExists) {
      this.setState({selectValue: options[0].value});
    }
  }

  render () {
    const height_ = 50;
    let options = Array.isArray(this.props.options) ? this.props.options : [];
    return (
      <div
        onClick={() => {
          if (options.length > 0) {
            this.setState({show: !this.state.show})
          }
        }}
        style={{
          width: 100,
          height: this.state.show ? height_ * options.length + 50 : height_, overflow: 'hidden',
          background: '#85E2FF',
          transition: 'all 0.4s ease',
        }}>
        <p style={styles.p1}>{this.state.selectValue || '请选择'}</p>
        {
          options.map((ele, index) => {
            return <p style={styles.p1} key={ele && ele.value ? ele.value : index}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        this.setState({
                          selectValue: ele && ele.value ? ele.value : '',
                          show: false
                        });
                        if (ele && ele.value && this.props.onChange) {
                          this.props.onChange(ele.value)
                        }
                      }}>{ele && ele.value ? ele.value : ''}</p>
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