// == Imports
// npm
import { Segment, Form, Input } from 'semantic-ui-react';
import PropTypesLib from 'prop-types';

// == Composant
function SearchBar({ value, setValue, loadRepos }) {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Segment>
      <Form onSubmit={() => loadRepos()}>
        <Input
          fluid
          icon="search"
          iconPosition="left"
          placeholder="Votre recherche..."
          value={value}
          onChange={handleChange}
        />
      </Form>
    </Segment>
  );
}

SearchBar.propTypes = {
  value: PropTypesLib.string.isRequired,
  setValue: PropTypesLib.func.isRequired,
  loadRepos: PropTypesLib.func.isRequired,
};

// == Export
export default SearchBar;
