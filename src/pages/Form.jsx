import { useFormik } from 'formik';

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

const MultiForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? <div style={{ color: 'red' }}>{formik.errors.email}</div> : null}
      <label htmlFor="email">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.errors.password ? <div style={{ color: 'red' }}>{formik.errors.password}</div> : null}
      <button type="submit">Save</button>
    </form>
  );
};

export default MultiForm;
