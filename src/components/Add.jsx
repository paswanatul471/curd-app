import React, {useState } from 'react'
import {Form,Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import books from './Books';
import { v4 as uuid } from 'uuid'


function Add() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [published, setPublished] = useState('');
    const [isbn, setIsbn] = useState('');

    let history = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0.8);
        let a = title,
            b = author,
            c = published,
            d = isbn;
        books.push({ id: uniqueId, Title: a, Author: b, Published: c, ISBN: d });
        history('/');
    }

    return (
        <div className="container" id='add'>
            <Form className='d-grid gap-2'>
            <Form.Group className="mb-3" controlId="fromTitle">
                <Form.Control type="text" placeholder="Enter Title" required onChange={(e)=> setTitle(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="fromAuthor">
                <Form.Control type="text" placeholder="Enter Author" required onChange={(e)=> setAuthor(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="fromPublished">
                <Form.Control type="text" placeholder="Enter Published" required onChange={(e)=> setPublished(e.target.value)}></Form.Control>
            </Form.Group> 
            <Form.Group className="mb-3" controlId="fromISBN">
                <Form.Control type="text" placeholder="Enter ISBN" required onChange={(e)=> setIsbn(e.target.value)}></Form.Control>
            </Form.Group>
            <Button onClick={(e) => handleSubmit(e)} type='submit'>Submit</Button>
        </Form>
            
        </div>
    )
}

export default Add