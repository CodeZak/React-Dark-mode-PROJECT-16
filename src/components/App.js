import { useState, useEffect } from "react";

function App() {
    console.log("ff");
    const [toggle, setToggle] = useState(false);
    document.body.classList.toggle("dark-theme", toggle);

    function toggleHandler() {
        setToggle((prev) => {
            return !prev;
        });
    }

    return (
        <div className="container card">
            <header>
                <div className="title">ReactFacts</div>
                <div className="toggle">
                    <span>Light</span>
                    <div className="boxContainer" onClick={toggleHandler}>
                        <div
                            className={
                                toggle ? "ToggleDisc scroll" : "ToggleDisc"
                            }
                        ></div>
                    </div>
                    <span>Dark</span>
                </div>
            </header>
            <section>
                <h1>Fun facts about React</h1>
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100k stars on GitHub</li>
                    <li>is maintained by Facebook</li>
                    <li>
                        Powers thousands of enteprise apps, including mobile
                        apps
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default App;
