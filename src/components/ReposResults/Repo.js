// == Import npm
import { Card, Image } from 'semantic-ui-react';
import PropTypesLib from 'prop-types';

// == Composant
function Repo({ name, owner, description }) {
  return (
    <Card>
      <Image src={owner.avatar_url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span>{owner.login}</span>
        </Card.Meta>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

Repo.propTypes = {
  owner: PropTypesLib.shape({
    login: PropTypesLib.string.isRequired,
    avatar_url: PropTypesLib.string.isRequired,
  }).isRequired,
  name: PropTypesLib.string.isRequired,
  description: PropTypesLib.string,
};

Repo.defaultProps = {
  description: '',
};

// == Export
export default Repo;
