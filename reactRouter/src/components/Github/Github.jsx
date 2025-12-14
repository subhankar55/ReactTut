import React, {useEffect,useState} from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData();
    // const [data,setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/subhankar55')
    //     .then((res) => res.json())
    //     .then((data) => setData(data))
    //     .catch((err) => console.log(err));
    // }, []);

    return (
        <div className="text-center m-4 bg-gray-800 text-white p-4 text-3xl">Github followers: {data.followers}
            <img src={data.avatar_url} alt="Github image" />
        </div>
    )
}

export default Github;

export const githubinfoloader = async () => {
    const res = await fetch('https://api.github.com/users/subhankar55');
    return res.json();
}