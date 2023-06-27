import React from 'react';


class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      pNumber: '',
      email: '',
      message: '',
      pContact: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <br />
          <input name='Name' type="text" value={this.state.value} onChange={this.handleChange} />
          <br /><br />
        </label>
        <label>
          Phone Number:
          <br />
          <input name='pNumber' type="text" value={this.state.value} onChange={this.handleChange} />
          <br /><br />
        </label>
        <label>
          Email:
          <br />
          <input name='email' type="text" value={this.state.value} onChange={this.handleChange} />
          <br /><br />
        </label>
        <label>
          Message:
          <br />
          <input name='message' type="text" value={this.state.value} onChange={this.handleChange} />
          <br /><br />
        </label>
        <label>
          Prefered Contact Method:
          <br />
          <select name='pContact' value={this.state.value} onChange={this.handleChange}>
            <option value='Email'>Email</option>
            <option value='Text'>Text</option>
            <option value='Call'>Call</option>
          </select>
          <br /><br />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default ContactForm;