import { createContext } from "react";

const DataContext = createContext({


    name: null,
    email: null,
    user_id: null
});

export default DataContext;