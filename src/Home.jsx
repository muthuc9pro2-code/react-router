import React, { useState } from 'react'
import Feed from './Feed'
import  { useStoreState } from 'easy-peasy';

const Home = ({ isLoading, fetchError }) => {
    const  searchResult  = useStoreState((state) => state.searchResult);
    return (
        <main className='Home'>
          {!isLoading && fetchError && <p className='statusMsg' style={{color: "red"}}>{fetchError}</p>}
          {!isLoading && !fetchError && (searchResult.length ? <Feed posts={searchResult} /> 
          : <p className='statusMsg'>No posts to display.</p>)}
        </main>
    )
}

export default Home