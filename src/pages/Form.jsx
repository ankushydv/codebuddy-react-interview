import { useFormik } from 'formik';
import Button from 'react-bootstrap/Button';

const validate = values => {
  const errors = {};
  //   if (!values.firstName) {
  //     errors.firstName = 'Required';
  //   } else if (values.firstName.length > 15) {
  //     errors.firstName = 'Must be 15 characters or less';
  //   }

  //   if (!values.lastName) {
  //     errors.lastName = 'Required';
  //   } else if (values.lastName.length > 20) {
  //     errors.lastName = 'Must be 20 characters or less';
  //   }
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (!/^[a-zA-Z]{2,50}$/.test(values.firstName)) {
    errors.firstName = 'Invalid user name please use only alphabate';
  }

  if (!values.address) {
    errors.address = 'Required';
  } else if (values.address.length > 10) {
    errors.address = 'Invalid address please enter proper address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(values.password)) {
    errors.password = 'Invalid password';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const MultiForm = ({ active }) => {
  console.log('activeTab', active);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      address: '',
      countryCode: '',
      phoneNumber: '',
      acceptTermsAndCondition: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {active === 1 && (
        <div className="flex">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
      )}

      {formik.errors.email && active === 1 ? (
        <div style={{ color: 'red' }}>{formik.errors.email}</div>
      ) : null}

      {active === 1 && (
        <div className="flex">
          <label htmlFor="email">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
      )}
      {formik.errors.password && active === 1 ? (
        <div style={{ color: 'red' }}>{formik.errors.password}</div>
      ) : null}
      {active === 2 && (
        <div className="flex">
          <label htmlFor="email">firstName</label>
          <input
            id="firstName"
            name="firstName"
            type="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
        </div>
      )}
      {formik.errors.firstName && active === 2 ? (
        <div style={{ color: 'red' }}>{formik.errors.firstName}</div>
      ) : null}
      {active === 2 && (
        <div className="flex">
          <label htmlFor="email">lastName</label>
          <input
            id="lastName"
            name="lastName"
            type="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </div>
      )}
      {formik.errors.lastName && active === 2 ? (
        <div style={{ color: 'red' }}>{formik.errors.lastName}</div>
      ) : null}
      {active === 2 && (
        <div className="flex">
          <label htmlFor="email">address</label>
          <input
            id="address"
            name="address"
            type="address"
            onChange={formik.handleChange}
            value={formik.values.address}
          />
        </div>
      )}
      {formik.errors.address && active === 2 ? (
        <div style={{ color: 'red' }}>{formik.errors.address}</div>
      ) : null}
      {active === 3 && (
        <div className="flex">
          <label htmlFor="email">Country Code</label>
          <input
            id="countryCode"
            name="countryCode"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.countryCode}
          />
        </div>
      )}
      {formik.errors.countryCode && active === 3 ? (
        <div style={{ color: 'red' }}>{formik.errors.countryCode}</div>
      ) : null}
      {active === 3 && (
        <div className="flex">
          <label htmlFor="email">Phone Number</label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
          />
        </div>
      )}
      {formik.errors.phoneNumber && active === 3 ? (
        <div style={{ color: 'red' }}>{formik.errors.phoneNumber}</div>
      ) : null}
      {active === 3 && (
        <div className="flex-center">
          <label htmlFor="email">Accept Terms And Condition</label>
          <input
            id="acceptTermsAndCondition"
            name="acceptTermsAndCondition"
            type="checkbox"
            onChange={formik.handleChange}
            value={formik.values.acceptTermsAndCondition}
          />
        </div>
      )}
      {formik.errors.acceptTermsAndCondition && active === 3 ? (
        <div style={{ color: 'red' }}>{formik.errors.acceptTermsAndCondition}</div>
      ) : null}
      <div className="flex-center">
        <Button type="submit" className="mt-2">
          Save
        </Button>
      </div>
    </form>
  );
};

export default MultiForm;
