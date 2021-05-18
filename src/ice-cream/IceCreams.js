import React, { useEffect, useState } from 'react';
import Main from '../structure/Main';
import LoaderMessage from '../structure/LoaderMessage';
import { getIceCreams } from '../data/iceCreamData';

const IceCreams = () => {
  const [iceCreams, setIceCreams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    getIceCreams().then(iceCreams => {
      if (isMounted) {
        setIceCreams(iceCreams);
        setIsLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  console.log(iceCreams);

  return (
    <Main headingText="Choose you faaji lawa tonic">
      <LoaderMessage
        loadingMessage="Loading the stock list"
        doneMessage="Loading stock list complete"
        isLoading={isLoading}
      />
    </Main>
  );
};

export default IceCreams;
