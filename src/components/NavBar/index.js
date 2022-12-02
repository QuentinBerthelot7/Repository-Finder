// == Import
// npm
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

// == Composant
function NavBar() {
  return (
    <Menu>
      <Menu.Item
        as={NavLink}
        to="/"
      >
        Recherche
      </Menu.Item>

      <Menu.Item
        as={NavLink}
        to="/faq"
      >
        FAQ
      </Menu.Item>
    </Menu>
  );
}

// == Export
export default NavBar;
