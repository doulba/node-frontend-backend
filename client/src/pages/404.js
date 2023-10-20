import React from 'react';
import { Link } from 'react-router-dom';
//import '../styles/gesdaara.css';



function NotFoundPage() {
    return(
        <div class="container-fluid">
            <div class="text-center">
                <div 
                    class="error mx-auto" 
                    data-text="404">
                        404
                </div>
                    <p class="lead text-gray-800 mb-5">
                        Page non trouvée
                    </p>
                    <p class="text-gray-500 mb-0">
                        On dirait que vous avez trouvé un petit problème dans la matrice...
                    </p>
                    <Link to="/">
                        <a href="">&larr; 
                            Veuillez, vous connectez!
                        </a>
                    </Link>
            </div>
        </div>
    );
}


export default NotFoundPage;