// == Import
// npm
import { Image } from 'semantic-ui-react';
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

// datas
// import reposData from 'src/data/repos';

// assets
import './styles.scss';
import logo from 'src/assets/images/logo-github.png';

// composants
import SearchBar from '../SearchBar';
import Message from '../Message';
import ReposResults from '../ReposResults';
import NavBar from '../NavBar';
import FAQ from '../FAQ';

// == Composant
function App() {
  const [nbResults, setNbResults] = useState(0);
  const [repos, setRepos] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const cleanRepos = (dirtyRepos) => {
    const cleanedRepos = dirtyRepos.map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      owner: {
        login: repo.owner.login,
        avatar_url: repo.owner.avatar_url,
      },
      html_url: repo.html_url,
    }));

    return cleanedRepos;
  };

  const loadRepos = () => {
    axios.get(`https://api.github.com/search/repositories?q=${searchValue}`)
      .then((response) => {
        setNbResults(response.data.total_count);

        const cleanedRepos = cleanRepos(response.data.items);

        setRepos(cleanedRepos);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setSearchValue('');
      });
  };

  return (
    <div className="app">
      <header>
        <Image src={logo} size="small" centered />
      </header>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={(
            <main>
              <SearchBar value={searchValue} setValue={setSearchValue} loadRepos={loadRepos} />
              <Message nbResults={nbResults} />
              <ReposResults repos={repos} />
            </main>
          )}
        />

        <Route path="/faq" element={<FAQ />} />

        <Route path="*" element={<div>404</div>} />
      </Routes>

    </div>
  );
}

// == Export
export default App;
