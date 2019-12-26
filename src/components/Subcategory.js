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
        background: #55596d;

        color: white;
        cursor: pointer;
        padding: 12px 0px 12px 20px;
    `
    return(
        <SubcategoryContainer className="subcategoryContainer">
            <SubcategoryRow className="subcategoryRow"color="primary" onClick={toggle}>
                <span style={{marginRight: '5px'}}>{isOpen ? `\u25BC` : `►`}</span>
                                        {
                                            subcategory
                                        }
            </SubcategoryRow>
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
        </SubcategoryContainer>
    )
}
export default Subcategory;