(() => {
  const form = document.querySelector('form');
  const submitResponse = document.querySelector('#response');
  const formURL = 'https://6udush60s0.execute-api.us-east-1.amazonaws.com/Prod/submitForm';

  form.onsubmit = e => {
    e.preventDefault();

    // Capture the form data
    let data = {};
    //Array.from(form).map(input => (data[input.id] = input.value));
    let formArray = Array.from(form);
    for (var i = 0; i < formArray.length; i++) {
      let val = formArray[i];
      if (val.name == "attendance") {
        if (val.id == "attending" && val.checked) {
          data["attending"] = "yes";
        } else if (val.id == "attending") {
          data["attending"] = "no";
        } else {}
      } else {
        data[val.id] = val.value;
      }
    }

    // /console.log('Sending: ', JSON.stringify(data));
    submitResponse.innerHTML = 'Sending...'

    // Create the AJAX request
    var xhr = new XMLHttpRequest();
    xhr.open(form.method, formURL, true);
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    // Send the collected data as JSON
    xhr.send(JSON.stringify(data));

    xhr.onloadend = response => {
      if (response.target.status === 200) {
        form.reset();
        submitResponse.innerHTML = 'Thanks for RSVPing!';
      } else {
        submitResponse.innerHTML = 'Error! Please try again.';
        console.error(JSON.parse(response));
      }
    };
  };
})();
