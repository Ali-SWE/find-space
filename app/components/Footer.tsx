import React from "react";

const links = [
    {
    accountLink: "https://github.com/Ali-SWE",
    imgLink: "github.png",
    alt: "Github"
    
    },
    {
    accountLink: "https://www.linkedin.com/in/ali-alsaihati-7723941ba/",
    imgLink: "linkedin.png",
    alt: "LinkedIn"
    
    },
    {
    accountLink: "https://twitter.com/A__Alsaihati",
    imgLink: "twitter.png",
    alt: "Twitter(X)"
    }
]

const Footer : React.FC = () => {
    return (
        <footer className="flex flex-row gap-3 justify-center">
            <p>Built by  
                <span className="font-bold text-blue-500"> Ali Alsaihati</span>  
            </p>
            <div className="flex flex-row gap-1">
                {links.map(link =>(
                    <a href={link.accountLink} target="_blank">
                        <img src={link.imgLink} alt={link.alt} className="w-5 h-5 hover:opacity-70" />
                    </a>
                ))}
            </div>
        </footer>
    )

} 
export default Footer