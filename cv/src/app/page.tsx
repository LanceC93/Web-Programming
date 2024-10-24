import Navbar from "./components/Navbar";
import Splash from "./components/Splash";
import Education from "./components/Education";

export default function Home() {
  return (
    <body>
        <Navbar/>
        <Splash/>
        <hr/>
        <section class="not-splash">
            <h2 class="reenie-beanie-regular">Honors and Awards</h2>
            <dl class="yuji-boku-regular">
                <dt>Dean's List</dt><dd>Spring, 2023</dd>
                <dt>Zell Miller Recipient</dt><dd>Fall, 2021 - Fall, 2024</dd>
            </dl>
        </section>
        <section class="not-splash">
            <h2 class="reenie-beanie-regular">Skills</h2>
            <ul class="yuji-boku-regular">
                <li>Languages: C, Java, Python, JS</li>
                <li>Frameworks/Libraries: Next.js, React, Vercel</li>
                <li>Programs: VS Code, vim, Github</li>
            </ul>
        </section>
        <section class="not-splash">
            <h2 class="reenie-beanie-regular">Leadership and Experience</h2>
            <dl class="yuji-boku-regular">
                <dt><a href="https://www.homedepot.com/">Home Depot Order Fulfillment Associate</a></dt>
                <dd>May, 2021 - August, 2021</dd>
                <dt>Washington Burrito Cashier</dt>
                <dd>May 2024 - August, 2024</dd>
            </dl>
        </section>
        <section class="not-splash" id="last-section">
            <h2 class="reenie-beanie-regular">Projects</h2>
            <div class="three-col">
                <div class="card yuji-boku-regular">
                    <img src="images/stopwatch.png" alt="stopwatch">
                    <h3>Time Tracker</h3>
                    <ul>
                        <li>I made a website where a user can track time spent on activities</li>
                        <li>I learned to use a web framework and how to use a tech stack together.</li>
                        <li>I used Vercel and a Postgres database to connect to an external database. </li>
                    </ul>
                </div>
                <div class="card yuji-boku-regular">
                    <img src="images/mountain.png" alt="mountain">
                    <h3>Lands</h3>
                    <ul>
                        <li>I worked with a team to make a browser card game.</li>
                        <li>We created a server to host games played between two players.</li>
                        <li>We created a system to maintain the information flow between the host and the two clients.</li>
                    </ul>
                </div>
                <div class="card yuji-boku-regular">
                <img src="images/wifi.png" alt="wifi symbol">
                <h3>Pangea Online</h3>
                    <ul>
                        <li>A team and I created an online chat room service.</li>
                        <li>We were required to host multiple chat rooms to online clients.</li>
                        <li>We used an authentication system for logging in and out.</li>
                    </ul>
                </div>
            </div>
        </section>
        <footer>
            &copy
            <a href="contact.html">Lance</a>
            <a href="https://www.linkedin.com/in/lance-cross-2b2646325/"><i class="fa-brands fa-linkedin"></i></a>
        </footer>
    </body>
  );
}
