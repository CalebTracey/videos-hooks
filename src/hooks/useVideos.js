import { useState, useEffect } from 'react';
import youtube from '../apis/YouTube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (term) => {
        const response = await youtube.get('/search?', {
            params: {
                q: term
            }
        });

        setVideos(response.data.items);
    };

    return [videos, search]
};

export default useVideos;

//             **** CREATING CUSTOM HOOKS ****
// - Identify each line of code related to some single purpose
// - Identify the inputs to that code
// - Identify the outputs to that code
// - Extract all of the code into a separate function, receiving
//   the inputs as arguments, and returning the outputs
// If you give me (input(s)), I will give you... (output(s))