import React from 'react';

// https://wallpapercave.com/wp/wp4423069.jpg
function Homepage() {
    return (
        <header>

            <div className="homepage">
                <span><h3>NETFLIX</h3></span>
                <a href="https://netflix.com">
                    <button className="smallbutton">Sign in</button>
                </a>
            </div>
            <div className="homepage1">
                <h1>Unlimited movies, TV Shows and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <h3>Ready to watch? Enter your email to create account or restart your membership.</h3>
            </div>
            <div className="homepage2">
                <input type="email" placeholder="Enter email address.." />
                <a>
                    <button>{'Get Started '} </button>
                </a>
            </div>
        </header>
    )
}

export default Homepage;
