import React, { useState, useContext } from 'react';
import GithubContext from '../context/github/githubContext';
import AlertContext from '../context/alert/AlertContext';

const Search = ({ clearUsers, showClear, setAlert }) => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text !== '') {
      githubContext.searchUsers(text);
      setText('');
    } else {
      alertContext.setAlert('please enter something', 'light');
    }
  };

  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search...'
          value={text}
          onChange={onChange}
        ></input>
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
