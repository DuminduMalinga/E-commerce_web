function validateForm() 
{
    const fullName = document.getElementById('FullName').value;
    const address = document.getElementById('Address').value;
    const contactNumber = document.getElementById('ContactNumber').value;
    const cardHolderName = document.getElementById('CardHolderName').value;
    const cardNumber = document.getElementById('CardNumber').value;
    const expiryDate = document.getElementById('ExpiryDate').value;
    const cyc = document.getElementById('CYC').value;

    if (!fullName || !address || !contactNumber || !cardHolderName || !cardNumber || !expiryDate || !cyc) {
       alert('Please fill in all fields.');
      return false;
    }
                
    if (contactNumber.length < 10 || isNaN(contactNumber)) {
      alert('Please enter a valid contact number.');
      return false;
    }
                
    if (cardNumber.length !== 16 || isNaN(cardNumber)) {
      alert('Card number must be 16 digits.');
      return false;
    }
                
    if (cyc.length !== 3 || isNaN(cyc)) {
      alert('CYC must be 3 digits.');
      return false;
    }
                
    alert('Thank you for your purchase!');
    return true;
}