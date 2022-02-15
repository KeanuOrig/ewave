import {Navbar, Nav} from 'react-bootstrap'
import {Link, NavLink} from 'react-router-dom'



export default function AppNavbar() {
  return (
  	<Navbar bg="primary" expand="lg">
  	    <Navbar.Brand as={Link} to="/" >EWAVE TASKS</Navbar.Brand>
  	    <Navbar.Toggle aria-controls="basic-navbar-nav" />
  	    <Navbar.Collapse id="basic-navbar-nav">
  	      <Nav className="me-auto">
  	        <Nav.Link as={NavLink} to="/ewave/">Home</Nav.Link>
  	        <Nav.Link as={NavLink} to="/ewave/task1">Task-1</Nav.Link>
            <Nav.Link as={NavLink} to="/ewave/task2">Task-2</Nav.Link>
            <Nav.Link as={NavLink} to="/ewave/task3">Task-3</Nav.Link>
            <Nav.Link as={NavLink} to="/ewave/task4">Task-4</Nav.Link>
            <Nav.Link as={NavLink} to="/ewave/task5">Task-5</Nav.Link>
  	      </Nav>
  	    </Navbar.Collapse>
  	</Navbar>

  	)

}