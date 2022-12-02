// == Import npm
import { Card } from 'semantic-ui-react';
import PropTypesLib from 'prop-types';

// == Import locaux
import Repo from './Repo';

// == Composant
function ReposResults({ repos }) {
  return (
    <Card.Group itemsPerRow="3" stackable>
      {repos.map((repo) => <Repo key={repo.id} {...repo} />)}
    </Card.Group>
  );
}

ReposResults.propTypes = {
  repos: PropTypesLib.arrayOf(
    PropTypesLib.shape({
      id: PropTypesLib.number.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default ReposResults;
