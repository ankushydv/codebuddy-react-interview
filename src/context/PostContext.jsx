import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PostContext = createContext({});

const PostProvider = ({ children }) => {
  const [data, setData] = useState(undefined);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('https://codebuddy.review/posts')
      .then(response => {
        // if (response) {
        //   // eslint-disable-next-line guard-for-in
        //   for (const d in response.data) {
        //     console.log(d);
        //     for()
        //   }
        // }
        const result = Object.keys(response.data).map(p => response.data[p]);
        // console.log('pos', result);

        const postsArr = Object.keys(result).map(p => result[p]);
        // console.log('fff', postsArr);

        const x = Object.keys(postsArr).map(p => postsArr[p]);
        // console.log('x', x);

        const y = Object.keys(x).map(p => x[p]);

        setData(y);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    // eslint-disable-next-line guard-for-in
    for (const ox in data) {
      // console.log(data[ox].posts);
      // eslint-disable-next-line guard-for-in
      // for (const xo in data[ox].posts) {
      // console.log(data[ox].posts[xo]);
      // arrs.push(data[ox].posts[xo]);
      // setPosts(arr);
      // }

      setPosts(data[ox].posts);
    }
  }, [data]);

  const values = {
    data,
    posts,
  };

  return <PostContext.Provider value={values}>{children}</PostContext.Provider>;
};

export default PostProvider;
