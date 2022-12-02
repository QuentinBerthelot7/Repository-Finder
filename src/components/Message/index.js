// == Import
// npm
import { Message as MsgSemanticUi } from 'semantic-ui-react';
import PropTypesLib from 'prop-types';

// == Composant
function Message({ nbResults }) {
  return (
    <MsgSemanticUi>
      <p>La recherche a donnée {nbResults} résultats</p>
    </MsgSemanticUi>
  );
}

Message.propTypes = {
  nbResults: PropTypesLib.number.isRequired,
};

// == Export
export default Message;
