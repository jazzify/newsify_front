import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import Category from '../../components/Category';

function Home() {
  const [posts, setPosts] = useState([]);
  const [bannerPost, setBannerPost] = useState([]);

  useEffect(() => {
    const headers = new Headers();
    const fetchOptions = {
      headers,
      method: 'GET',
    };
    fetch('https://newsify-back.herokuapp.com/api/posts/', fetchOptions)
      .then((response) => response.json())
      .then((response) => {
        setPosts(response);
        const randomBanner = Math.round(Math.random() * 3);
        setBannerPost(Object.values(response)[randomBanner][0]);
      });
  }, []);


  function renderCategories() {
    const newPosts = Object.entries(posts);
    return (
      newPosts.map((categoryPosts) => <Category key={categoryPosts[0]} posts={categoryPosts} />)
    );
  }


  return (
    <>
      <Banner post={bannerPost} />
      {renderCategories()}
    </>
  );
}

export default Home;
