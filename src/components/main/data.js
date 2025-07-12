// Import React Icons
import { 
    SiReact, 
    SiTailwindcss, 
    SiAngular, 
    SiJavascript, 
    SiBootstrap, 
    SiNextdotjs,
    SiLaravel,
    SiDotnet,
    SiExpress,
    SiC,
    SiSharp,
    SiPython,
    SiPostgresql,
    SiMysql  
} from 'react-icons/si';

import { FaJava } from "react-icons/fa6";

// Frontend Technologies
export const FrontEnd = [    
        {key:1, skills: "React", icon: SiReact, percentage:"90%", pers:90},      
        {key:3, skills:"Angular", icon: SiAngular, percentage:"60%", pers:60},
        {key:6, skills:"Next.js", icon: SiNextdotjs, percentage:"60%", pers:60},
        {key:2, skills:"Tailwind CSS", icon: SiTailwindcss, percentage:"80%", pers:80},
        {key:5, skills:"Bootstrap", icon: SiBootstrap, percentage:"70%", pers:70},
        {key:4, skills:"JavaScript", icon: SiJavascript, percentage:"85%", pers:85},
        
]

// Backend Technologies
export const BackEnd = [
        {key:1, skills:"ASP.NET", icon: SiDotnet, percentage:"85%", pers:85},
        {key:2, skills:"Laravel", icon: SiLaravel, percentage:"80%", pers:80},       
        {key:3, skills:"Express.js", icon: SiExpress, percentage:"60%", pers:60},
        {key:4, skills:"Postgres SQL", icon: SiPostgresql , percentage:"80%", pers:80},
        {key:5, skills:"MySQL", icon: SiMysql , percentage:"80%", pers:80},
]

// Programming Languages
export const ProgrammingLanguages = [
        {key:1, skills:"C", icon: SiC, percentage:"70%", pers:75},
        {key:2, skills:"Java", icon: FaJava, percentage:"70%", pers:70},
        {key:3, skills:"C#", icon: SiSharp, percentage:"85%", pers:80},
        {key:4, skills:"Python", icon: SiPython, percentage:"65%", pers:65}
]