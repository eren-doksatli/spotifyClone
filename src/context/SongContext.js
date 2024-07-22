import {createContext, useState} from 'react';

const Songs = createContext();

const SongsProvider = ({children}) => {
  const [songs, setSongs] = useState([]);

  return <Songs.Provider value={{songs}}>{children}</Songs.Provider>;
};

export {SongsProvider, Songs};
