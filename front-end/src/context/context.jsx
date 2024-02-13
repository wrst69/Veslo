import { createContext, useState, useEffect } from 'react';
import { fakeFetch } from '../api';

const DataContext = createContext({
    objects: [],
    loading: false
});

export function DataContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [objects, setObjects] = useState([]);
    
    useEffect(() => {
        async function preload() {
            setLoading(true);
            const { result } = await fakeFetch();

            setObjects(result);
            setLoading(false);
        }

        preload();
    }, [])

    return (
        <DataContext.Provider value={{ loading, objects}}>
            { children }
        </DataContext.Provider>
    )
}

export default DataContext;
