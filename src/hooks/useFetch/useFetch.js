import React, {useEffect, useState} from 'react';
import axios from 'axios';


const useFetch = (url) =>{
    const [data, setData]=useState([]);
    const [error, setError]=useState(null);
    const [loading, setLoading]=useState(true);

    const fetchData = async() =>{
        try {
            const {data:response_data}=await axios.get(url);
            setData(response_data);
            setLoading(false);
            
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(()=>{
            fetchData();
        }, []
    );

    return {data, error, loading};
}

export default useFetch;