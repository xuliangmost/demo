import React, {Component} from 'react'

class Select_ extends Component {
  constructor (props) {
    super(props);
    const options = Array.isArray(props.options) ? props.options : [];
    const firstOption = options[0];
    this.state = {
      show: false,
      selectValue: firstOption && firstOption.value !== undefined ? firstOption.value : ''
    }
  }

  render () {
    const height_ = 50;
    const options = Array.isArray(this.props.options) ? this.props.options : [];
    const selectedText = this.state.selectValue === '' ? '请选择' : this.state.selectValue;
    return (
      <div
        onClick={() => {
          this.setState({show: !this.state.show})
        }}
        style={{
          width: 100,
          height: this.state.show ? height_ * options.length + height_ : height_, overflow: 'hidden',
          background: '#85E2FF',
          transition: 'all 0.4s ease',
        }}>
        <p style={styles.p1}>{selectedText}</p>
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