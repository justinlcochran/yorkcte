import React from 'react';

function Home() {

    const students = ['Mark', 'Fabian', 'Isaac', 'Jonathan', 'Mark', 'Nevaeh']
    return (
        <div className={'flex flex-col text-xl overflow-auto m-8 rounded-xl border-white border-2'}>
            <p className={'font-bold text-2xl'}>York CS50</p>
            <div className={'flex mx-auto'}>
            {students.map(student => (
                <div className={'rounded-lg bg-slate-800 border-2 border-amber-300 my-40 mx-6 py-10 px-6 hover:bg-slate-700 cursor-pointer text-white'}>{student}</div>
            ))}
            </div>
            <div className={'flex mx-auto'}>
                {students.map(student => (
                    <div className={'rounded-lg bg-slate-800 border-2 border-amber-300 my-40 mx-6 py-10 px-6 hover:bg-slate-700 cursor-pointer text-white'}>{student}</div>
                ))}
            </div>
            <div className={'flex mx-auto'}>
                {students.map(student => (
                    <div className={'rounded-lg bg-slate-800 border-2 border-amber-300 my-40 mx-6 py-10 px-6 hover:bg-slate-700 cursor-pointer text-white'}>{student}</div>
                ))}
            </div>
            <div className={'flex mx-auto'}>
                {students.map(student => (
                    <div className={'rounded-lg bg-slate-800 border-2 border-amber-300 my-40 mx-6 py-10 px-6 hover:bg-slate-700 cursor-pointer text-white'}>{student}</div>
                ))}
            </div>
        </div>


    );
}

export default Home;