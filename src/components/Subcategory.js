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

    const SubcategoryContainer = styled.div`
        width: 384px;
    `

    const SubcategoryRow = styled.div`
        border-bottom: 0.5px solid white;
        background: #797e99;

        color: white;
        cursor: pointer;
        padding: 12px 0px 12px 20px;

        &:hover {
            background: #5d6175;
        }
    `
    return(
        <SubcategoryContainer className="subcategoryContainer">
            <SubcategoryRow className="subcategoryRow"color="primary" onClick={toggle}>
                <span style={{marginRight: '5px'}}>{isOpen ? `\u25BD` : `\u25B7`}</span>
                                        {
                                            subcategory 
                                        }
                                        {
                                            `       (${subcategory_bookmark.length})`
                                        }
            </SubcategoryRow>
            <Collapse isOpen={isOpen}>
                <Card style={{padding: "0", borderRadius: "0"}}>
                <CardBody style={{padding: "0", background: "#c9d0f5", borderRadius: "0"}}>
                    {
                        subcategory_bookmark.map(bookmark => {
                            return <Bookmark key={bookmark.id} bookmark={bookmark} />
                        })
                    }
                </CardBody>
                </Card>
            </Collapse>
        </SubcategoryContainer>
    )
}
export default Subcategory;