import React, {useState, useEffect } from 'react'
import {Form,Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import Books from './Books';


function Edit() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [published, setPublished] = useState('');
    const [isbn, setIsbn] = useState('');
    const [id, setId] = useState('');
    let history = useNavigate();
    var index = Books.map(function(e){
        return e.id;
      }).indexOf(id);
    const handleSubmit = (e) => {
        
        let a = Books[index];
        a.Title = title;
        a.Author= author;
        a.Published = published;
        a.ISBN = isbn;

        history('/');
    }
    useEffect(()=>{
        setTitle(localStorage.getItem('title'))
        setAuthor(localStorage.getItem('author'))
        setPublished(localStorage.getItem('published'))
        setIsbn(localStorage.getItem('isbn'))
        setId(localStorage.getItem('id'))
    },[])

  return (
    <div className='container'>
        <Form className='d-grid gap-2' id="edit">
            <Form.Group className="mb-3" controlId="fromTitle">
                <Form.Control type="text" placeholder="Enter Title" value={title} required onChange={(e)=> setTitle(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="fromAuthor">
                <Form.Control type="text" placeholder="Enter Author" value={author} required onChange={(e)=> setAuthor(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="fromPublished">
                <Form.Control type="text" placeholder="Enter Published" value={published} required onChange={(e)=> setPublished(e.target.value)}></Form.Control>
            </Form.Group> 
            <Form.Group className="mb-3" controlId="fromISBN">
                <Form.Control type="text" placeholder="Enter ISBN" value={isbn} required onChange={(e)=> setIsbn(e.target.value)}></Form.Control>
            </Form.Group>
            <Button onClick={(e) => handleSubmit(e)} type='submit'>Update</Button>
        </Form>
    </div>
  )
}

export default Edit