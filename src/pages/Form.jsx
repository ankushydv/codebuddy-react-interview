import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { FormContext } from '../context/FormContext';

// const validate = values => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = 'Required';
//   } else if (!/^[a-zA-Z]{2,50}$/.test(values.firstName)) {
//     errors.firstName = 'Invalid user name please use only alphabate';
//   }

//   if (!values.address) {
//     errors.address = 'Required';
//   } else if (values.address.length > 10) {
//     errors.address = 'Invalid address please enter proper address';
//   }

//   if (!values.password) {
//     errors.password = 'Required';
//   } else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(values.password)) {
//     errors.password = 'Invalid password';
//   }

//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email address';
//   }

//   return errors;
// };

const MultiForm = ({ active }) => {
  const [emailErr, setEmailErr] = useState(undefined);
  const [passwordErr, setPasswordErr] = useState(undefined);
  const [firstNameErr, setFirstNameErr] = useState(undefined);
  const [lastNameErr, setLastNameErr] = useState(undefined);

  const {
    email,
    setEmail,
    password,
    setPassword,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    address,
    setAddress,
    countryCode,
    setCountryCode,
    phoneNumber,
    setPhoneNumber,
    acceptTermsAndCondition,
    setAcceptTermsAndCondition,
    disable,
    setDisable,
  } = useContext(FormContext);

  // const validate = () => {
  //   const errors = {};
  //   if (!firstName) {
  //     errors.firstName = 'Required';
  //   } else if (!/^[a-zA-Z]{2,50}$/.test(firstName)) {
  //     errors.firstName = 'Invalid user name please use only alphabate';
  //   }

  //   if (!address) {
  //     errors.address = 'Required';
  //   } else if (address.length > 10) {
  //     errors.address = 'Invalid address please enter proper address';
  //   }

  //   if (!password) {
  //     errors.password = 'Required';
  //   } else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(password)) {
  //     errors.password = 'Invalid password';
  //   }

  //   if (!email) {
  //     errors.email = 'Required';
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
  //     errors.email = 'Invalid email address';
  //   }

  //   return errors;
  // };

  // console.log('valu', validate.errors);a

  const handleSaveForm = () => {
    const values = {
      email,
      password,
      firstName,
      lastName,
      address,
      acceptTermsAndCondition,
      phoneNumber,
      countryCode,
    };
    axios
      .post('https://codebuddy.review/submit', values)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      {active === 1 && (
        <div className="flex">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={e => {
              setEmail(e.target.value);
              if (!e.target.value.length) {
                setEmailErr('Required');
                return setDisable(true);
              }

              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)) {
                setEmailErr('Invalid email address');
                return setDisable(true);
              }

              setDisable(false);

              return setEmailErr(undefined);
            }}
            value={email}
          />
        </div>
      )}

      {emailErr && <div style={{ color: 'red' }}>{emailErr}</div>}
      {/* {formik.errors.email && active === 1 ? (
        <div style={{ color: 'red' }}>{formik.errors.email}</div>
      ) : null} */}

      {active === 1 && (
        <div className="flex">
          <label htmlFor="email">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={e => {
              setPassword(e.target.value);
              if (!e.target.value) {
                setPasswordErr('Required');
                return setDisable(true);
              }

              if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(password)) {
                setPasswordErr('Invalid Password');
                return setDisable(true);
              }

              setDisable(false);
              return setPasswordErr(undefined);
            }}
            value={password}
          />
        </div>
      )}
      {passwordErr && <div style={{ color: 'red' }}>{passwordErr}</div>}

      {/* {formik.errors.password && active === 1 ? (
        <div style={{ color: 'red' }}>{formik.errors.password}</div>
      ) : null} */}
      {active === 2 && (
        <div className="flex">
          <label htmlFor="email">firstName</label>
          <input
            id="firstName"
            name="firstName"
            type="firstName"
            onChange={e => {
              setFirstName(e.target.value);
              if (!e.target.value) {
                setFirstNameErr('Required');
                return setDisable(true);
              }

              if (!/^[a-zA-Z]{2,50}$/.test(e.target.value)) {
                setFirstNameErr('Invalid Name');
                return setDisable(true);
              }

              setDisable(false);
              return setFirstNameErr(undefined);
            }}
            value={firstName}
          />
        </div>
      )}
      {firstNameErr && <div style={{ color: 'red' }}>{firstNameErr}</div>}

      {/* {formik.errors.firstName && active === 2 ? (
        <div style={{ color: 'red' }}>{formik.errors.firstName}</div>
      ) : null} */}
      {active === 2 && (
        <div className="flex">
          <label htmlFor="email">lastName</label>
          <input
            id="lastName"
            name="lastName"
            type="lastName"
            onChange={e => {
              setLastName(e.target.value);
              if (/^[a-zA-Z]+$/.test(e.target.value)) {
                setLastNameErr('Only alphabate is allow in lastName');
                return setDisable(true);
              }

              setDisable(false);
              return setLastNameErr(undefined);
            }}
            value={lastName}
          />
        </div>
      )}
      {lastNameErr && <div style={{ color: 'red' }}>{lastNameErr}</div>}
      {/* {formik.errors.lastName && active === 2 ? (
        <div style={{ color: 'red' }}>{formik.errors.lastName}</div>
      ) : null} */}
      {active === 2 && (
        <div className="flex">
          <label htmlFor="email">address</label>
          <input
            id="address"
            name="address"
            type="address"
            onChange={e => setAddress(e.target.value)}
            value={address}
          />
        </div>
      )}
      {/* {formik.errors.address && active === 2 ? (
        <div style={{ color: 'red' }}>{formik.errors.address}</div>
      ) : null} */}
      {active === 3 && (
        <div className="flex">
          <label htmlFor="email">Country Code</label>
          {/* <input
            id="countryCode"
            name="countryCode"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.countryCode}
          /> */}
          <select
            name="Country Code"
            value={countryCode}
            onChange={e => setCountryCode(e.target.value)}
            style={{ display: 'block' }}
          >
            <option value="" label="Select a country code" />
            <option value="+91" label="+91" />
            <option value="+1" label="+1" />
          </select>
        </div>
      )}
      {/* {formik.errors.countryCode && active === 3 ? (
        <div style={{ color: 'red' }}>{formik.errors.countryCode}</div>
      ) : null} */}
      {active === 3 && (
        <div className="flex">
          <label htmlFor="email">Phone Number</label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            onChange={e => setPhoneNumber(e.target.value)}
            value={phoneNumber}
          />
        </div>
      )}
      {/* {formik.errors.phoneNumber && active === 3 ? (
        <div style={{ color: 'red' }}>{formik.errors.phoneNumber}</div>
      ) : null} */}
      {active === 3 && (
        <div className="flex-center">
          <label htmlFor="email">Accept Terms And Condition</label>
          <input
            id="acceptTermsAndCondition"
            name="acceptTermsAndCondition"
            type="checkbox"
            onChange={() => setAcceptTermsAndCondition(!acceptTermsAndCondition)}
            value={acceptTermsAndCondition}
          />
        </div>
      )}
      {/* {formik.errors.acceptTermsAndCondition && active === 3 ? (
        <div style={{ color: 'red' }}>{formik.errors.acceptTermsAndCondition}</div>
      ) : null} */}
      <div className="flex-center">
        <Button type="button" disabled={disable} className="mt-2" onClick={handleSaveForm}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default MultiForm;
