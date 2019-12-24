import React from 'react';

function Bookmark({bookmark}) {
    return(
        <div className="bookmark">
            <a href={bookmark.url} target="_blank">{bookmark.name}</a>
        </div>
    )
}
export default Bookmark