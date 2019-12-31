import React from 'react';
import styled from 'styled-components';

function Bookmark({bookmark}) {

    const BookmarkContainer = styled.div`
        border-bottom: 1px solid white;
        background: #f2f4ff;
        padding: 10px 0px 10px 25px;
        display: flex;
        align-items: center;

        &:hover {
            background: #d5d7e3;
        }
    `

    return(
        <a href={bookmark.url} target="_blank" style={{textDecoration: "none", 
                                                       color: "black"}}>
            <BookmarkContainer className="bookmark">
            <img src={bookmark.favicon} style={{width: "20px", margin:"auto 10px auto 0"}}></img>
                {`${bookmark.name}`}
            </BookmarkContainer>
        </a>
    )
}
export default Bookmark