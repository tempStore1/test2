import React, {
  useState, createContext, PropsWithChildren, useContext,
} from 'react';

const useAuthProvide = () => {
  const [user, setUser] = useState<IUser>();
  const login = () => {};
  const logout = () => {};
  return {
    user,
    login,
    logout,
    setUser,
  };
};

interface IUser {
  email: string;
  password: string;
  nickname?: string;
}

interface ProvideAuthContext {
  user?: IUser;
  login: (user: IUser) => void;
  logout: () => void;
  setUser: (user: IUser) => void;
}

const authContext = createContext({} as ProvideAuthContext);
export const useAuth = () => useContext(authContext);

const ProvideAuth: React.FC<PropsWithChildren> = ({ children }) => {
  const auth = useAuthProvide();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
};

export default ProvideAuth;
