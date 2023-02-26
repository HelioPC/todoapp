import React, { createContext, useReducer, useContext, useState, useEffect } from 'react'
import { User } from '../types/core';
import { fakeApiUsers, UserStorageName } from '../assets/dummy';

export enum UserActions {
    setUser,
    clearUser
}

type Action = {
    type: UserActions;
    payload: any;
}

type ContextType = {
    user: User;
    validUser: boolean;
    dispatch: (action: Action) => void;
}

type ProviderProps = {
    children: React.ReactNode;
}

const initialUser: User = {
    id: 0,
    name: '',
    email: '',
    password: '',
}

const UserContext = createContext<ContextType | undefined>(undefined);

const userReducer = (user: User, action: Action) => {
    switch (action.type) {
        case UserActions.setUser:
            return action.payload;
        case UserActions.clearUser:
            return initialUser;
        default:
            return user;
    }
}

export const UserProvider = ({ children }: ProviderProps) => {
    const localUser = localStorage.getItem(UserStorageName);
    const [user, dispatch] = useReducer(userReducer, localUser ? JSON.parse(localUser) : initialUser);
    const [validUser, setValidUser] = useState(true)

    const value = { user, dispatch, validUser };

    useEffect(() => {
        const validateUser = () => {
            if (fakeApiUsers.find(f => f.email === user.email && f.password === user.password)) setValidUser(true)
            else setValidUser(false)
        }

        validateUser();
    }, []);

    useEffect(() => {
        setValidUser(!(user === undefined || user === null || user.id === 0 || user.name === '' || user.email === ''))
    }, [user])

    console.log(user, validUser)

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }

    return context;
}