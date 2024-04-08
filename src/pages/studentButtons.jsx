import React, {useState} from 'react';
import {useParams} from "react-router-dom";

function StudentButtons() {

    // code
    const student = useParams()['student'];
    const [data, setData] = useState(null);

    const lambdaUrls = {
        daniel: "https://7xmof66bwm76id5rl3d5dti3t40rmszu.lambda-url.us-east-2.on.aws/",
        fabian: "https://z7j45ueqeeqdr2phjdsslzn35i0pgisj.lambda-url.us-east-2.on.aws/",
        isaac: "https://fyd6julv7eexqleczhevtw52640kwfrz.lambda-url.us-east-2.on.aws/",
        jonathan: "https://ywttvem7e3sl3mqmm77nvsigee0xpwgb.lambda-url.us-east-2.on.aws/",
        mark: "https://gn7o4riiyo3cgtsy6hltpsj44y0lmhro.lambda-url.us-east-2.on.aws/",
        nevaeh: "https://tgpf4q4kyuqhscvhfowrv3mlqi0tckne.lambda-url.us-east-2.on.aws/",
    }

    const handleClick = async () => {
        const response = await fetch(lambdaUrls[student.toLowerCase()]);
        const data = await response.json();
        setData(data);
    }

    console.log(student)
    return (
        // html
        <>
        <div onClick={handleClick} className={'mx-auto bg-red-500 p-28 m-4 w-fit rounded-full cursor-pointer hover:bg-red-400'}></div>
    {(data) && <p className={'text-white'}>{data.response_string}</p>}
        </>
    );
}

export default StudentButtons;