// Import Dependencies
import React, {useState} from 'react';
import styled from 'styled-components';

// Import Components
import LSK_Header from './components/LSK_Header';
import LSK_Nav from './components/LSK_Nav';
import {BookmarkData} from './BookmarkData';
import Bookmark from './components/Bookmark';

function App() {

  const [bookmarks, setBookmarks] = useState(BookmarkData.results);

  console.log(bookmarks);

  function handleBookmarks(event) {
    console.log(event.target);

  }

  const BookmarksContainer = styled.div`
  
  `

  return (
    <div className="container">
      <LSK_Header />
      <LSK_Nav handleBookmarks={handleBookmarks}/>
      
      {/* {Render Filtered Bookmarks} */}
      <BookmarksContainer className="bookmark-container">
        {bookmarks.map(bookmarkData => {
          return <Bookmark key={bookmarkData.id} bookmarkData={bookmarkData}/>
        })}
      </BookmarksContainer>
    </div>
  );
}

export default App;

