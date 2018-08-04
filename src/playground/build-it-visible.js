// let boolean = false;
//
// const toggle = () => {
//   boolean = !boolean;
//   render();
// };
//
// const render = () => {
//   let template = (
    // <div>
    //   <h1>Visiblity Toggle</h1>
    //   <button onClick={toggle}>{boolean ? 'Hide details' : 'Show details'}</button>
    //   {boolean && <p>These are your details</p>}
    // </div>
//   );
//
//   ReactDOM.render(template, appRoot);
// };
//
// let appRoot = document.getElementById('app');
//
// render();

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
          visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visiblity Toggle</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
        {this.state.visibility && <p>These are your details</p>}
      </div>
    );
  }
};

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
