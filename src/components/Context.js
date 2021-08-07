import React, {createContext} from 'react';

export const AppContext = createContext({
    page: 0,
    setPage: () => {
    },
    perPage: 5,
    setPerPage: () => {
    },
    totalPages: null,
    setTotalPages: () => {
    },
});