import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/actions';

function HomePage() {
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>HomePage</div>
  )
}

export default HomePage