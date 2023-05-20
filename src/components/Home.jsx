import React,{Fragment} from "react";
import Books from "./Books";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  let history = useNavigate();
  const handleDelete= (id)=>{
    var index = Books.map(function(e){
      return e.id;
    }).indexOf(id);
    Books.splice(index,1);
    history('/')
  }
  const handleEdit = (id,title,author,published,isbn)=>{
    localStorage.setItem('Title',title);
    localStorage.setItem('Author',author);
    localStorage.setItem('Published',published);
    localStorage.setItem('ISBN',isbn);
    localStorage.setItem('Id',id);


  }
  return (
    <>
      <div className="container" id="home">
        <Fragment>
          <table class="table">
            <thead>
              <tr>
                <th scope="col" className="text-center">Title</th>
                <th scope="col" className="text-center">Author</th>
                <th scope="col" className="text-center">Published</th>
                <th scope="col" className="text-center">ISBN</th>
                <th scope="col" className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Books && Books.length > 0
                ? Books.map((item) => {
                    return (
                      <tr>
                        <td className="text-center">{item.Title}</td>
                        <td className="text-center">{item.Author}</td>
                        <td className="text-center">{item.Published}</td>
                        <td className="text-center">{item.ISBN}</td>
                        <td className="d-flex align-item-center justify-content-center">
                          <Link to={`/edit`}>
                          <button className="edit-button" onClick={() => handleEdit(item.id, item.Title, item.Author, item.Published, item.ISBN)}>EDIT</button>
                          </Link>
                          &nbsp;
                          <button className="delete-button" onClick={() => handleDelete(item.id)}>DELETE</button>
                        </td>
                      </tr>
                    );
                  })
                : "No data available"}
            </tbody>
          </table>
          <br />
          <Link className="d-grid gap-2" to='/create'>
            <button size="lg" className="createButton">Create</button>
          </Link>
        </Fragment>
      </div>
    </>
  );
}

export default Home;
