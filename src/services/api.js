import axios from "axios";
import useEffect from 'react';

const CancelToken = axios.CancelToken;
const cancelSource = CancelToken.source();

const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}),
        token: cancelSource.token
};

export const fetchData = () => {
    return useEffect(() => {
        axios.get('/testUser/charuka', 
          requestOptions,
        )
          .catch(function (thrown) {
            if (axios.isCancel(thrown)) {
              console.log('Request is cancelled', thrown.message);
            } else {
              // handle errors here
            }
          });
          return () => {
            // cancel the request before component unmounts
            cancelSource.cancel('Request cancelled by the test user.');
          };
      }, []);
};