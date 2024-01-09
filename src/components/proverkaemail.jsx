import React, { useState } from 'react';

function ProverkaEmail() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordColor, setPasswordColor] = useState('');
  const [emailError, setEmailError] = useState(false);

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail);
    setEmailError(!isValidEmail);
    if (!isValidEmail) {
      console.log('Неверный формат электронной почты');
    }
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    if (newPassword.length < 6) {
      setPasswordColor('red');
    } else if (newPassword.length < 10) {
      setPasswordColor('blue');
    } else {
      setPasswordColor('green');
    }
  };

  return (
    <div>
      <p>
        <label>
          Email:
          <input type="text" value={email} onChange={handleEmailChange} />
        </label>
        {emailError && <span style={{ color: 'red' }}>Неверный формат электронной почты</span>}
      </p>
      <p>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
      </p>
      <div style={{ height: '10px', backgroundColor: password ? passwordColor : 'transparent' }}></div>
    </div>
  );
}

export default ProverkaEmail;