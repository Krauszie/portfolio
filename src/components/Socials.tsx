import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

// typeProps
import { SocialsStyles } from "@/app/CustomProps";


const socials = [
    {icon: <FaGithub/>, path: "https://github.com/Krauszie?tab=repositories"},
    {icon: <FaLinkedinIn/>, path: "https://www.linkedin.com/in/faza-murtadho-937568251/"},
]

const Socials = ({containerStyles, iconStyles}:SocialsStyles) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            )
        })}
    </div>
  );
};

export default Socials;