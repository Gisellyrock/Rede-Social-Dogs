import React from 'react';
import FeedPhotos from './FeedPhotos';
import FeedModal from './FeedModal';

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  // const [pages, setPages] =
  React.useEffect(() => {
    function infiniteScroll(event) {
      console.log(event);
    }

    window.addEventListener('wheel', infiniteScroll);
    window.addEventListener('scroll', infiniteScroll);
    return () => {
      window.addEventListener('wheel', infiniteScroll);
      window.addEventListener('scroll', infiniteScroll);
    };
  }, []);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      <FeedPhotos user={user} page="1" setModalPhoto={setModalPhoto} />
      <FeedPhotos user={user} page="2" setModalPhoto={setModalPhoto} />
    </div>
  );
};

export default Feed;
