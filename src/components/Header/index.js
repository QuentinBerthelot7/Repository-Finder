import PropTypesLib from 'prop-types';

import './styles.scss';

function Header({ githubLogo }) {
  return (
    <header className="header">
      <img
        className="logo"
        src={githubLogo}
        alt="Logo Github"
      />
    </header>
  );
}

Header.propTypes = {
  githubLogo: PropTypesLib.string.isRequired,
};

export default Header;
