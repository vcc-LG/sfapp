import React from 'react';

class NewUserForm extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!event.target.checkValidity()) {
    	this.setState({
        invalid: true,
        displayErrors: true,
      });
      return;
    }
    const form = event.target;

    var myform = new FormData(form);

    this.setState({
    	res: stringifyFormData(myform),
      invalid: false,
      displayErrors: false,
    });


    var formBody = [];
    for ( var key of myform.keys()){
        var encodedKey = encodeURIComponent(key);
        var encodedValue = encodeURIComponent(myform.get(key));
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    fetch('http://localhost:3000/users', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      body: formBody,
    });
  }

  render() {
  	const { res, invalid, displayErrors } = this.state;
    return (
    	<div>
        <form
          onSubmit={this.handleSubmit}
          noValidate
          className={displayErrors ? 'displayErrors' : ''}
         >
         <ul>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            name="username"
            type="text"
            data-parse="none"
            required
          />
</ul>
<ul>
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="text" required />
</ul>
<ul>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            data-parse="none"
            required
          />
</ul>
        <button class="button">Create user</button>
        </form>



        <div className="res-block">
          {invalid}
          {!invalid && res && (
          	<div>
              <h3>Transformed data to be sent:</h3>
              <pre>FormData {res}</pre>
          	</div>
          )}
        </div>
    	</div>
    );
  }
}

function stringifyFormData(fd) {
  const data = {};
	for (let key of fd.keys()) {
  	data[key] = fd.get(key);
  }
  return JSON.stringify(data, null, 2);
}

export default NewUserForm;
