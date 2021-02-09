class Component {
  constructor(props) {
    this.props = props;
  }
  render(type) {
    return document.createElement(type);
  }
}

module.exports = Component;
