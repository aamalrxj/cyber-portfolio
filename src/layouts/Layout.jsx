import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import TicTacToe from "../components/TicTacToe/TicTacToe";

import "./Layout.css";

export default function Layout() {

    const [lightMode,setLightMode]=useState(false);

    const location=useLocation();

    const showCodeBox=location.pathname==="/";

    return(

        <div className={`layout ${lightMode?"light":"dark"}`}>

            <Navbar
                lightMode={lightMode}
                setLightMode={setLightMode}
            />

            <main className="main-container">

                <section
                    className={
                        showCodeBox
                        ?
                        "page-content split"
                        :
                        "page-content full"
                    }
                >

                    <Outlet context={[lightMode]}/>

                </section>

                {

                    showCodeBox &&

                    <aside className="code-panel">

                        <div className="code-box">

                            <TicTacToe
                                lightMode={lightMode}
                            />

                        </div>

                    </aside>

                }

            </main>

        </div>

    )

}