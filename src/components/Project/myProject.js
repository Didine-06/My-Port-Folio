// Import des images
import AdminDashboard from '../../Images/Scholaris/AdminDashboard.png';
import EmploisTemps from '../../Images/Scholaris/EmploisTemps.png';
import GénérationConflict from '../../Images/Scholaris/GénérationConflict.png';
import LogIn from '../../Images/Scholaris/LogIn.png';
import foodAppAccueil from '../../Images/FoodApp/Acceuil.png';
import foodAppMenu from '../../Images/FoodApp/menu.png';

export const projects = [
    {
        key: 1,
        type: "full",
        pictures: [LogIn,
            AdminDashboard,
            EmploisTemps,
            GénérationConflict
            
        ],
        title: "Scholaris - University Management",
        subtitle: "A full-Stack university departement management with a weekly schedule Automatique generation."
    },
    {
        key: 2,
        type: "react",
        pictures: [foodAppAccueil, foodAppMenu ],
        title: "Delevery - Food App",
        subtitle: "Front End project using react and vite for a simple Restaurant delivery app.",
        link :"https://didine-06.github.io/Food-Delivery-app"
    }

]