import {
  Navbar as BNavbar,
  Container,
  Nav,
  NavDropdown,
  Row,
  Col,
} from "react-bootstrap";

import { useFavorites } from "../../contexts/FavoritesContext";

const Navbar: React.FC = () => {
  const { favorites } = useFavorites();
  console.log(favorites);
  return (
    <BNavbar bg="light" expand="lg">
      <Container>
        <BNavbar.Brand href="#home">Home</BNavbar.Brand>
        <BNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Favorites" id="basic-nav-dropdown">
              <Row style={{ width: 400 }} className="justify-content-center">
                {favorites?.length ? (
                  favorites.map(({ id, thumbnail, title }) => (
                    <>
                      <Col md={3}>
                        <img
                          src={thumbnail}
                          alt={title}
                          loading="lazy"
                          style={{ width: 50, height: 50 }}
                        />
                      </Col>
                      <Col md={8}>
                        <h5>{title}</h5>
                      </Col>
                      <hr />
                    </>
                  ))
                ) : (
                  <h5>No hay favoritos</h5>
                )}
              </Row>
            </NavDropdown>
          </Nav>
        </BNavbar.Collapse>
      </Container>
    </BNavbar>
  );
};

export default Navbar;
