// Import Dependencies
import React, {useState} from 'react';
import styled from 'styled-components';

// Import Components
import LSK_Header from './components/LSK_Header';
import LSK_Nav from './components/LSK_Nav';
import {BookmarkData} from './BookmarkData';
import Subcategory from './components/Subcategory';

let previousState = "@";

function App() {

  const [data] = useState(BookmarkData.results); // initial import
  const [bookmarks, setBookmarks] = useState([]);  // this is DISPLAYED
  const [subcategories, setSubcategories] = useState([]);
  
  console.log("Imported Data",data);

  // handle navigation toggle
  function handleBookmarks(event) {

    console.log("Previous State:", previousState)
    console.log("Current State:", event.target.getAttribute('class'))

    let isClose = event.target.getAttribute('class').toLowerCase().includes(previousState.toLowerCase());

    console.log("Close?", isClose)
    if (!isClose) {
      if (event.target.getAttribute('class').toLowerCase().includes('html')) {
        console.log("HTML clicked");
        
        let newBookmark = data.filter(bookmark => {
            return bookmark.category === "HTML";
          }
        )
        setBookmarks(newBookmark);
        previousState = "HTML"

        // Generate subcategories 
        let newSubcategories = newBookmark.map(item => {
          return item.subcategory;
        })
        setSubcategories(getUnique(newSubcategories));

      } else if (event.target.getAttribute('class').toLowerCase().includes('css')) {
        console.log("CSS-Style clicked");

        let newBookmark = data.filter(bookmark => {
          return bookmark.category === "CSS-Style";
          }
        )
        setBookmarks(newBookmark);
        previousState = "css"

        // Generate subcategories ()
        let newSubcategories = newBookmark.map(item => {
          return item.subcategory;
        })
        setSubcategories(getUnique(newSubcategories));

      } else if (event.target.getAttribute('class').toLowerCase().includes('javascript')) {
        console.log("JS clicked");

        let newBookmark = data.filter(bookmark => {
          return bookmark.category === "JS";
          }
        )
        setBookmarks(newBookmark);
        previousState = "javascript"

        // Generate subcategories
        let newSubcategories = newBookmark.map(item => {
          return item.subcategory;
        })
        setSubcategories(getUnique(newSubcategories));

      } else if (event.target.getAttribute('class').toLowerCase().includes('lambda')) {
        console.log("Lambda clicked")

        let newBookmark = data.filter(bookmark => {
          return bookmark.category === "Lambda";
          }
        )
        setBookmarks(newBookmark);
        previousState = "lambda"

        // Generate subcategories
        let newSubcategories = newBookmark.map(item => {
          return item.subcategory;
        })
        setSubcategories(getUnique(newSubcategories));
      }    
    } else {
      setSubcategories([]);

      //update previous state to null ("") when bookmarks are closed
      previousState = "@";
    }
  }


  // Style
  const BookmarksContainer = styled.div`
  
  `

  return (
    <div className="container" style={{border: "none"}}>
      <LSK_Header />
      <LSK_Nav handleBookmarks={handleBookmarks}/>
      
      {/* Render Filtered Bookmarks */}
      <BookmarksContainer className="bookmark-container">
        {
          subcategories.length !== 0 ? subcategories.map( (subcategory, index) => {
            return <Subcategory key={index} subcategory={subcategory} bookmarks={bookmarks}/>
          }) : null
        }
      </BookmarksContainer>
    </div>
  );
}

export default App;


function getUnique(array) {
  var uniqueArray = [];
  
  for (var i =0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i]) === -1) {
      uniqueArray.push(array[i]);
    }
  }

  return uniqueArray.sort();
}