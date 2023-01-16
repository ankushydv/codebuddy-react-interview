import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PostContext } from '../context/PostContext';

const Posts = () => {
  const { posts } = useContext(PostContext);

  return (
    <Container>
      <h2 className="text-center mb-2">List of Posts</h2>
      <Container>
        {posts &&
          Object.keys(posts).map(post => (
            <Row>
              {' '}
              <Col className="md-4">
                {' '}
                <Row>
                  {' '}
                  <p>{posts[post].id} </p>{' '}
                </Row>{' '}
                <Row>
                  {' '}
                  <p>
                    {posts[post].firstName} {posts[post].lastName}{' '}
                  </p>{' '}
                </Row>{' '}
                <Row>
                  {' '}
                  <p>{posts[post].writeup}</p>{' '}
                </Row>{' '}
              </Col>
              <Col className="md-4">
                <img src={posts[post].image} alt="img" width="100px" height="100px" />
              </Col>
              <Col className="md-4">
                <img src={posts[post].avatar} alt="img2" width="100px" height="100px" />
              </Col>
            </Row>
          ))}
      </Container>
    </Container>
  );
};

export default Posts;
