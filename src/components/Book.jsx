import React from "react";

function Book() {
    return (
        <>
            <nav className="navbar navbar-expand-lg " id="book">
                <div className="container-fluid">
                    <a className="navbar-brand app-name" href="/">
                        Book Management
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                </div>
            </nav>
        </>
    );
}

export default Book;
