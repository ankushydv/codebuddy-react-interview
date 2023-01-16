import { useState } from 'react';
// import { Formik, Field } from 'formik';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { MultiStepForm, Step } from 'react-multi-form';
import MultiForm from './Form';

const Home = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(1);

  // custom styles
  // const prevStyle = { background: '#33c3f0' };
  // const nextStyle = { background: '#33c3f0' };

  const onSubmit = () => navigate('/posts');

  return (
    <main>
      <div className="bg-light p-5 mb-5">
        <Button onClick={onSubmit}>Goto Posts</Button>
      </div>
      <Container>
        <Form>
          <MultiStepForm activeStep={active}>
            <Step label="one">
              <MultiForm active={active} />
              {/* <Formik
                initialValues={{ firstName: '', lastName: '' }}
                onSubmit={values => {
                  // handle form submission here
                  console.log('values', values);
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" type="text" />
                    {errors.firstName && touched.firstName ? <div>{errors.firstName}</div> : null}
                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" type="text" />
                    {errors.lastName && touched.lastName ? <div>{errors.lastName}</div> : null}
                    <button type="submit">Submit</button>
                  </Form>
                )}
              </Formik> */}
            </Step>
            <Step label="Two">
              <MultiForm active={active} />
            </Step>
            <Step label="Three">
              <MultiForm active={active} />
            </Step>
          </MultiStepForm>
          {active !== 1 && <Button onClick={() => setActive(active - 1)}>Previous</Button>}
          {active !== 3 && (
            <Button onClick={() => setActive(active + 1)} style={{ float: 'right' }}>
              Save and Next
            </Button>
          )}
        </Form>
      </Container>
    </main>
  );
};

export default Home;
