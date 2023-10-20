
import '../App.css';
import { Tilt } from "react-tilt";
import logo from '../logo.jpeg'

export default function Create() {

    return (

        <main>
            <div className="limiter" >
                <div className="container-login100" >
                    <div className="wrap-login100" >
                        <Tilt className="Tilt"
                            options={
                                { max: 100 }
                            } >
                            <h2 className="main-header">Gestion Daara IT</h2>
                            <div className="Tilt-inner login100-pic" data-tilt>
                                <img src={logo}
                                    alt="image" />
                            </div>
                        </Tilt>
                    </div>
                </div>
            </div>
        </main>
    )

}