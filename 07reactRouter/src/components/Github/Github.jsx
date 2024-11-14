import { useEffect, useState } from 'react';

const Github = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch('https://api.github.com/users/programer12345anwar')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
            });
    }, []);

    return (
        <div className="bg-gray-600 text-center text-white p-4 m-5 items-center">
            Github followers: {data.followers}
            <img src={data.avatar_url} alt="Github Avatar" width={300} />
        </div>
    );
};

export default Github;


