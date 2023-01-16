import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PostContext } from '../context/PostContext';

const Posts = () => {
  const { posts } = useContext(PostContext);

  return (
    <Container>
      <h2>List of Posts</h2>
      <Row>{posts && Object.keys(posts).map(post => <Col>{posts[post].firstName}</Col>)}</Row>
    </Container>
  );
};

export default Posts;
