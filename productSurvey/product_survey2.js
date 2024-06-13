function getFormData() {
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
  
    return {
      username,
      age,
      email,
      job,
      designation,
      productType,
      feedback,
    };
  }
  
  function displayFeedback(formData) {
    document.getElementById('userName').innerHTML = formData.username;
    document.getElementById('userAge').innerHTML = formData.age;
    document.getElementById('userEmail').innerHTML = formData.email;
    document.getElementById('userJob').innerHTML = formData.job;
    document.getElementById('userDesignation').innerHTML = formData.designation;
    document.getElementById('userProductChoice').innerHTML = formData.productType;
    document.getElementById('userFeedback').innerHTML = formData.feedback;
  
    document.getElementById('userInfo').style.display = 'block';
  }
  
  function submitFeedback() {
    const formData = getFormData();
    displayFeedback(formData);
    document.getElementById('feedbackMessage').innerHTML = 'Thank you for your valuable feedback';
  }
  
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitFeedback();
    }
  });
  
  document.getElementById('submitBtn').addEventListener('click', submitFeedback);