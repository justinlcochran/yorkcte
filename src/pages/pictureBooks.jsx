import React from 'react';

function PictureBooks(props) {

    const pictureBooks = [
        {
            title: "Sofia's Rocky Adventure",
            author: "Melanie Arias",
            link: "https://www.canva.com/design/DAGBkIFE-ms/pH7qZxRCP2JyZIu64DGsuw/view?utm_content=DAGBkIFE-ms&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        },
        {
            title: "Bob the Bumpy Rock",
            author: "Yaseen Mohammed",
            link: "https://www.canva.com/design/DAGCIHy0IYc/U-FinPmO-UOzFVv1v75wnA/view?utm_content=DAGCIHy0IYc&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        },
        {
            title: "The Bravest Lil' Rock",
            author: "Christopher Montoya",
            link: "https://www.canva.com/design/DAGBkBwx1yI/PV36fBxEM5lZv5jwLzQDZQ/view?utm_content=DAGBkBwx1yI&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        },
        {
            title: "Rooney's Rocky Road",
            author: "Molly Riehemann",
            link: "https://www.canva.com/design/DAGBkISD1V8/VDRlnS1ZjuwYIQSILs30ug/view?utm_content=DAGBkISD1V8&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        },
        {
            title: "The Brave Little Rock Named Franky",
            author: "Brooke Jackson",
            link: "https://www.canva.com/design/DAGBkK5NfNE/QhPRJezGhV5yQSQ9MkEETA/view?utm_content=DAGBkK5NfNE&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        },
        {
            title: "Ronaldo the Rock Gets Stuck",
            author: "Hyrum Barrera",
            link: "https://www.canva.com/design/DAGBkGDdhcQ/LjDmQYiPya-K4iOPSzCVhQ/view?utm_content=DAGBkGDdhcQ&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        },
        {
            title: "Bob the Changing Rock",
            author: "Abdiel Calderon",
            link: "https://www.canva.com/design/DAGBkJem5JY/r1nplMI91F-AU7kqBJI9pg/watch?utm_content=DAGBkJem5JY&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        },
        {
            title: "Logan the Rock",
            author: "Uriel Fierro Olivas",
            link: "https://www.canva.com/design/DAGBkBMDwpI/LqI4EykLvTsPc8vcVGFRGQ/view?utm_content=DAGBkBMDwpI&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        },
        {
            title: "The Brave Little Rocks",
            author: "Ricky Dave Agno",
            link: "https://www.canva.com/design/DAGBkS0xEME/wVGDxxYYmSYiuwelky8w2g/view?utm_content=DAGBkS0xEME&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        },
        {
            title: "Rosie's Rocky Journey",
            author: "Aileen Prieto Olivas",
            link: "https://www.canva.com/design/DAGBkNwsIcQ/WMIgRl80-m2G361qXoRt2Q/view?utm_content=DAGBkNwsIcQ&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        },
        {
            title: "The Adventure of Jordy the Rock",
            author: "Esteban Uribe",
            link: "https://www.canva.com/design/DAGB8cqHrWs/WTkFLGF_D_lnZTiRhPd6dA/view?utm_content=DAGB8cqHrWs&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        },
        {
            title: "The Adventure of Wad the Rock",
            author: "Irma Sanchez Herrera",
            link: "https://www.canva.com/design/DAGB8GLKEdQ/HjUShLDA2cgIR7EivKbUbA/view?utm_content=DAGB8GLKEdQ&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        },
        {
            title: "Mr. Lumpy-so-Bumpy's Adventure Home",
            author: "Abygail Chavez and Olivia Montoya",
            link: "https://www.canva.com/design/DAGBkImXcK0/1qDkQ5wxFsqpwvjCyhM9FA/view?utm_content=DAGBkImXcK0&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        },
        {
            title: "Pinky the Brave Little Rock!",
            author: "Evelyn Cervantes",
            link: "https://www.canva.com/design/DAGCOILjdiE/1VTWDalegR6pbR-exqwcag/view?utm_content=DAGCOILjdiE&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        },
        {
            title: "Los Tres Amigos",
            author: "Sabrina McCullough",
            link: "https://www.canva.com/design/DAGB2e1IeoY/ejvjz0JzIAmaTNIpFDN6XQ/view?utm_content=DAGB2e1IeoY&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        },
        {
            title: "Remington the Rock's Journey",
            author: "Jasmine Mayorga",
            link: "https://www.canva.com/design/DAGBkOA6dYI/J-8zLUnYyHeah7--GMHuyg/view?utm_content=DAGBkOA6dYI&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        },
        {
            title: "Dwayne the Bravest Rock",
            author: "Brandon Martinez",
            link: "https://www.canva.com/design/DAGBkYdP9no/tMVGkO7SRf-zChg2Am36bQ/view?utm_content=DAGBkYdP9no&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        },
        {
            title: "Rocky's Glow Up",
            author: "Hailey Madewell",
            link: "https://www.canva.com/design/DAGCCaCC2pQ/Z3rEf_4REk7FiKvV3HM-2Q/view?utm_content=DAGCCaCC2pQ&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        },
        {
            title: "Obi the Littlest Rock's Big Change",
            author: "Hector Balderrama Sanchez",
            link: "https://www.canva.com/design/DAGB2aPgVLs/zB18Ev2FYzrVc5Imkm9RBA/view?utm_content=DAGB2aPgVLs&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        },
        {
            title: "Wildest Rock in the Ocean",
            author: "Miley Gonzalez",
            link: "https://www.canva.com/design/DAGCNmDB0lA/oXGT1f-vC8pi0QnUOdMLnw/view?utm_content=DAGCNmDB0lA&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        },
        {
            title: "The Bravest Little Rock",
            author: "Rudy Recendez",
            link: "https://www.canva.com/design/DAGBkSGFgtg/lVCJHxbDylMT9_tvgYOPpA/view?utm_content=DAGBkSGFgtg&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        },
    ]
    const pictureBooksP4 = [
        {
            title: "Rockly the Courageous Little Rock",
            author: "Jordy Raygoza Heredia",
            link: "https://www.canva.com/design/DAGCCmDHtPU/QX3EihyQADCw1iL8MqQNCw/view?utm_content=DAGCCmDHtPU&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        },
        {
            title: "Greg's Adventure Through the Earth",
            author: "Thomas Whitney",
            link: "https://www.canva.com/design/DAGBkU7NGu0/EDS6d4x6kbjHpLQuKeH08Q/view?utm_content=DAGBkU7NGu0&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        },
        {
            title: "Odie, the Bravest Little Rock",
            author: "Vianney Marquez",
            link: "https://www.canva.com/design/DAGBkSQGyT4/by4a_GKHa9gRbqzck6c9Zg/view?utm_content=DAGBkSQGyT4&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        },
        {
            title: "The Mighty Little Rock",
            author: "Matthew Guillen",
            link: "https://www.canva.com/design/DAGCCjMm3VI/BDjTGZr7Jyx0xEImQRN-Vw/view?utm_content=DAGCCjMm3VI&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        },
        {
            title: "The Bravest Little Rock Jovanni and His Life",
            author: "Aleks Holguin",
            link: "https://www.canva.com/design/DAGBkhI85hs/9ON4V388wGx_m1H_rgP6-g/view?utm_content=DAGBkhI85hs&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        },
        {
            title: "The Journey of a Rock",
            author: "Loretta Basting",
            link: "https://www.canva.com/design/DAGCIWzbQTQ/bdxxdvElpFnuarWjlqGlBA/view?utm_content=DAGCIWzbQTQ&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        },
        {
            title: "Rocco and His Awesome Adventures",
            author: "Jason Sanchez",
            link: "https://www.canva.com/design/DAGCK3O2cyY/YQhxnUIzADJxFLLQyod6XA/view?utm_content=DAGCK3O2cyY&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        },
        {
            title: "Adventures with Jules the Rock!",
            author: "Lila Gonzalez",
            link: "https://www.canva.com/design/DAGCCsmdzw8/r_-pPzIXDRt3_J9ejFayMw/view?utm_content=DAGCCsmdzw8&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        },
        {
            title: "Rockie the Explorer",
            author: "Julieta Chavez",
            link: "https://www.canva.com/design/DAGCIVMna6c/HNXvmbb_qZ5uXQJoWUOgCQ/view?utm_content=DAGCIVMna6c&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        },
        {
            title: "Bert's Adventure",
            author: "Arleth Salazar Vasquez",
            link: "https://www.canva.com/design/DAGCOTNM-j0/XMsFTSPb9T0-uAW5IpoPVg/view?utm_content=DAGCOTNM-j0&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        },
        {
            title: "Clumsy the Clumsiest Rock",
            author: "Angel Gallegos",
            link: "https://www.canva.com/design/DAGCCszEOe0/g6vXIadrp48G5cg9V4zvhQ/view?utm_content=DAGCCszEOe0&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        },
        {
            title: "A Little Rock is on a Journey",
            author: "Angel Xavier Rubio",
            link: "https://www.canva.com/design/DAGBkrqPw7E/mwgN01PxprVhH2Up0RyUeg/view?utm_content=DAGBkrqPw7E&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        },
        {
            title: "",
            author: "Daniel Diaz",
            link: "https://www.canva.com/design/DAGBSXVizLI/TqlxcS8-29ACxQB0cCtv0w/view?utm_content=DAGBSXVizLI&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        },

    ]

    return (
        <div className={'grid grid-cols-4 gap-4 m-6'}>
            {pictureBooks.map(item => (
                <a href={item.link} target={'_blank'} className={'bg-amber-200 border-blue-500 border-4 select-none cursor-pointer hover:bg-amber-300 shadow flex flex-col gap-2 p-4 rounded w-fit mx-auto'}>
                    <p className={'text-xl font-bold'}>{item.title}</p>
                    <p className={'text-md'}>by {item.author}</p>
                </a>
            ))}
            {pictureBooksP4.map(item => (
                <a href={item.link} target={'_blank'} className={'bg-pink-300 border-blue-500 border-4 select-none cursor-pointer hover:bg-pink-400 hover:shadow-white hover:shadow-2xl shadow flex flex-col gap-2 p-4 rounded w-fit mx-auto'}>
                    <p className={'text-xl font-bold'}>{item.title}</p>
                    <p className={'text-md'}>by {item.author}</p>
                </a>
            ))}
        </div>
    );
}

export default PictureBooks;