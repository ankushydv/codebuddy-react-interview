import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PostContext = createContext({});

const PostProvider = ({ children }) => {
  const [data, setData] = useState(undefined);

  const values = {
    data,
  };

  console.log('data', data);
  useEffect(() => {
    axios
      .get('https://codebuddy.review/posts')
      .then(response => {
        const res = response.json();
        setData(res);
      })
      .catch(err => console.log(err));
  }, []);
  return <PostContext.Provider value={values}>{children}</PostContext.Provider>;
};

export default PostProvider;
