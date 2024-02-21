import React from "react";

const links = [
    {
        id: 1,
        accountLink: "https://twitter.com/A__Alsaihati",
        imgLink: "twitter.png",
        alt: "Twitter(X)"
    },

    {
        id: 2,
        accountLink: "https://www.linkedin.com/in/ali-alsaihati-7723941ba/",
        imgLink: "linkedin.png",
        alt: "LinkedIn"
    },
    
    {
        id: 3,
        accountLink: "https://github.com/Ali-SWE",
        imgLink: "github.png",
        alt: "Github"
        
    }
]

const Footer : React.FC = () => {
    return (
        <footer className="flex flex-row gap-3 justify-center">
            <p>Built by  
                <span className="font-bold text-primary "> Ali Alsaihati</span>  
            </p>
            <ul className="flex flex-row gap-1">
                {links.map(link =>(
                    <li key={link.id}>
                        <a href={link.accountLink} target="_blank">
                            <img src={link.imgLink} alt={link.alt} className="w-5 h-5 hover:opacity-70"/>
                        </a>
                    </li>
                ))}
            </ul>
        </footer>
    )

} 
export default Footer