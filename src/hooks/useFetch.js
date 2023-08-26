import {  useState } from 'react'

const useFetch = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchData = async (url) => {
        setError(null)
        setData([])
        setLoading(true);
        try {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const resData = await res.json();
            setData(resData);
            setError(null); 
        } catch (e) {
            setError(e); 
        } finally {
            setLoading(false);
        }
    }

    return (
        { data, loading, error, fetchData }
    )
}

export default useFetch