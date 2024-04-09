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
        cochran: "https://i7hlt4be7vwo7upx57u6ceduku0hbcbo.lambda-url.us-east-1.on.aws/"
    }

    const buttons = [
        {
            color: '#1F3A78',
            textColor: 'white',
            title: 'Get Request',
            value: null,
        },
        {
            color: '#227231',
            textColor: 'white',
            title: 'Post a string',
            value: 'Programming is for nerds.',
        },
        {
            color: '#720e19',
            textColor: 'white',
            title: 'Post an array',
            value: ['Hockey', 'Guitar', 'Mayday Parade', 'Final Fantasy IX'],
        },
        {
            color: '#2d050a',
            textColor: 'white',
            title: 'Post an object',
            value: {
                state: 'Colorado',
                founded: 1876,
            },
        }
    ]

    const handleClick = (inputValue) => {
        if (!inputValue) {
            handleGet();
        } else {
            handlePost(inputValue);
        }
    }

    const handleGet = async () => {
        const response = await fetch(lambdaUrls[student.toLowerCase()]);
        const data = await response.json();
        setData(data);
    }

    const handlePost = async (inputValue) => {
        const response = await fetch(lambdaUrls[student.toLowerCase()],
            {method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(inputValue),
            });
        const data = await response.json();
        setData(data);
    }

    return (
        // html
        <>
        <div className={'flex gap-4'}>
            {buttons.map(item => (
                <div onClick={() => handleClick(item.value)} className={'p-8 m-4 w-fit rounded-full cursor-pointer'} style={{background: item.color, color: item.textColor}}>{item.title}</div>

            ))}
    {(data) && <p className={'text-white'}>{data.response_string}</p>}
        </div>
            {(data) ?
        <div className={'bg-white text-black p-8 rounded w-fit mx-auto max-w-[400px] flex flex-wrap'}>
            {JSON.stringify(data)}
        </div> :
            <div className={'bg-white text-black p-8 rounded w-fit mx-auto'}>
                Send a request to see the response.
            </div>
            }
        </>
    );
}

export default StudentButtons;