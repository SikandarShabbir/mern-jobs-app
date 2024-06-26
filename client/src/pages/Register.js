import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterPage';
import { Alert, Logo } from '../components';
import FormRow from '../components/FormRow';
import { useAppContext } from '../context/appContext';
const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);

const {isLoading, showAlert, displayAlert} = useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
  //   const currentUser = { name, email, password };
  //   if (isMember) {
  //     setupUser({
  //       currentUser,
  //       endPoint: 'login',
  //       alertText: 'Login Successful! Redirecting...',
  //     });
  //   } else {
  //     setupUser({
  //       currentUser,
  //       endPoint: 'register',
  //       alertText: 'User Created! Redirecting...',
  //     });
  //   }
  };

  // useEffect (() => {
  //   if (user) {
  //     setTimeout(() => {
  //       navigate('/');
  //     }, 3000);
  //   }
  // }, [user, navigate]);

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {showAlert && <Alert />}
        {/* name input */}
        {!values.isMember && (
          <FormRow
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
          />
        )}

        {/* email input */}
        <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />
        {/* password input */}
        <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />
        <button type='submit' className='btn btn-block' 
        // disabled={isLoading}
        >
          submit
        </button>
        <button
          type='button'
          className='btn btn-block btn-hipster'
          // disabled={isLoading}
          // onClick={() => {
          //   setupUser({
          //     currentUser: { email: 'testUser@test.com', password: 'secret' },
          //     endPoint: 'login',
          //     alertText: 'Login Successful! Redirecting...',
          //   });
          // }}
        >
          {isLoading ? 'loading...' : 'demo app'}
        </button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register;