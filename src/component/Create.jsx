import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, editToDo } from '../redux/reducer';
import { useSearchParams } from 'react-router-dom';


function Create() {
    let [title, setTitle] = useState('');
    let [description, setDescription] = useState('');
    let data = useSelector((state) => state.todo)
    let dispatch = useDispatch();
    let [searchParams, setSearchParams] = useSearchParams();
    let id = searchParams.get("id");
    const handleSubmit = () => {
        if (id) {
            const payload = {
                id,
                title,
                description
            }
            dispatch(editToDo(payload))
        }
        else {
            const payload = {
                title,
                description
            }

            dispatch(addTodo(payload));
        }
        setSearchParams({})
        setTitle('');
        setDescription('')
    }
    useEffect(() => {
        if(id){
        const index = +id - 1;
        setTitle(data[index].title);
        setDescription(data[index].description);
        }
    },[id])
    return (
        <>
            <Form>
                <Row>
                    <Col>
                        <Form.Control placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </Col>
                    <Col>
                        <Button variant="danger" onClick={handleSubmit}>Add Todo</Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default Create