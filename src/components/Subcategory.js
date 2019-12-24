import React, {useState} from 'react';
import styled from 'styled-components';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import Bookmark from './Bookmark';

function Subcategory({subcategory, bookmarks}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        console.log(subcategory, "clicked")
        return setIsOpen(!isOpen)};

    const subcategory_bookmark = bookmarks.filter(item => {
        return item.subcategory === subcategory;
    })
    return(
        <div>
            <button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>{subcategory}</button>
            <Collapse isOpen={isOpen}>
                <Card>
                <CardBody>
                    {
                        subcategory_bookmark.map(bookmark => {
                            return <Bookmark key={bookmark.id} bookmark={bookmark} />
                        })
                    }
                </CardBody>
                </Card>
            </Collapse>
        </div>
    )
}
export default Subcategory;