import { useState } from 'react';
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
