import React from 'react'
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';


function Cards() {
    let data = useSelector((state) => state.todo)
    let [searchParams, setSearchParams] = useSearchParams();
    return (
        <div className='row'>
            {
                data.map((item, index) => {
                   return <Card style={{ width: '18rem', margin:'10px' }} key={index}>
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                               {item.description}
                            </Card.Text>
                            <Card.Link onClick={() => setSearchParams({id:item.id})}>Edit</Card.Link>
                        </Card.Body>
                    </Card>
                })
            }

        </div>
    )
}

export default Cards