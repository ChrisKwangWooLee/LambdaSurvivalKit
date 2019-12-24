import React from 'react';
import styled from 'styled-components';

function Bookmark({bookmarkData}) {
    console.log(bookmarkData);
    return(
        <div className="bookmark-container">
            <a href={bookmarkData.url} target="_blank"><h2>{bookmarkData.name}</h2></a>
            
        </div>
    )
}
export default Bookmark;