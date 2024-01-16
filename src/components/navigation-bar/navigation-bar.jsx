import React, { useState } from 'react';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = ({ user, onLoggedOut }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async (query) => {
    try {
      const response = await fetch('https://movieapicf-30767e813dee.herokuapp.com/movies?Title=${query}', {
        headers: {
          Authorization: `Bearer ${token}`, // Include your authentication token if needed
        },
      });

      if (!response.ok) {
        throw new Error('Search failed');
      }

      const searchData = await response.json();
      // Update state with search results or perform other actions
      console.log('Search results:', searchData);
    } catch (error) {
      console.error('Error during search:', error);
      // Handle error
    }
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Movie App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!user && (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Signup
                </Nav.Link>
              </>
            )}
            {user && (
              <>
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/profile">
                  Profile
                </Nav.Link>
                <Nav.Link onClick={onLoggedOut}>Logout</Nav.Link>
              </>
            )}
          </Nav>
          <Form className="d-flex" onSubmit={(e) => { e.preventDefault(); handleSearch(searchQuery); }}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" variant="outline-success">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;




// import { Navbar, Container, Nav, Form, Button  } from "react-bootstrap";
// import { Link } from "react-router-dom";

// export const NavigationBar = ({ user, onLoggedOut }) => {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand as={Link} to="/">
//           Movie App
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             {!user && (
//               <>
//                 <Nav.Link as={Link} to="/login">
//                   Login
//                 </Nav.Link>
//                 <Nav.Link as={Link} to="/signup">
//                   Signup
//                 </Nav.Link>
//               </>
//             )}
//             {user && (
//               <>
//                 <Nav.Link as={Link} to="/">
//                   Home
//                 </Nav.Link>
//                 <Nav.Link as={Link} to="/profile">
//                   Profile
//                 </Nav.Link>
//                 <Nav.Link onClick={onLoggedOut}>Logout</Nav.Link>
//               </>
//             )}
            
//           </Nav>

//            {/* Search Form */}
//            <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//             <Button variant="outline-success">Search</Button>
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };
