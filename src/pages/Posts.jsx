import { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PostContext } from '../context/PostContext';

const Posts = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const { posts } = useContext(PostContext);
  const isLargerScreen = width > 1008;
  const isMediaScreen = width < 1007 && width > 642;

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });
  const postsForLarge = isLargerScreen
    ? posts.slice(0, 3)
    : isMediaScreen
    ? posts.slice(0, 2)
    : posts.slice(0, 1);
  return (
    <Container>
      <h2 className="text-center mb-2">List of Posts</h2>
      <Container>
        {posts &&
          Object.keys(postsForLarge).map(post => (
            <Row>
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
                <img src={posts[post].image} alt="img" width="160px" height="100px" />
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
