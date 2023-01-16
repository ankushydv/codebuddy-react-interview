import { useState, useContext } from 'react';
// import { Formik, Field } from 'formik';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { MultiStepForm, Step } from 'react-multi-form';
import MultiForm from './Form';
import { FormContext } from '../context/FormContext';

const Home = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(1);

  const { disable } = useContext(FormContext);

  // custom styles
  // const prevStyle = { background: '#33c3f0' };
  // const nextStyle = { background: '#33c3f0' };

  const onSubmit = () => navigate('/posts');

  return (
    <main>
      <div className="bg-light p-5 mb-5">
        <Button onClick={onSubmit}>Go to Posts</Button>
      </div>
      <Container>
        <Form>
          <MultiStepForm activeStep={active}>
            <Step label="one">
              <MultiForm active={active} />
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
            <Button
              onClick={() => setActive(active + 1)}
              style={{ float: 'right' }}
              disabled={disable}
            >
              Save and Next
            </Button>
          )}
        </Form>
      </Container>
    </main>
  );
};

export default Home;
