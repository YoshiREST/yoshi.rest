import React     from "react";
import { Avatar } from "@nextui-org/react";

const Landing = () => {
    return (
        <section>
            <div className="bg-gradient-to-r from-orange-200 to-pink-200 min-h-screen flex flex-col justify-center items-center">
                <div className="text-center">

                    <div className="flex justify-center">
                        <Avatar src="https://cdn.discordapp.com/avatars/1170491203347820576/939647db667017e68aab5f0189159e8a?size=1024" className="w-20 h-20 text-large ml-2 mr-2 mt-2 outline-black" />

                        <h1 className="text-8xl font-bold mb-4"> Yoshi™ </h1>
                    </div>

                    <p className="text-lg mb-8 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-400">A light-weight, multi-functional, fitness utility bot.</p>

                    <div className="flex justify-center space-x-4">
                        <button onClick={() => window.location.href = "https://discord.com/oauth2/authorize?client_id=1170491203347820576&scope=bot"} className="bg-gradient-to-r from-orange-400 to-pink-400 hover:text-pink-300 text-white font-bold py-2 px-4 rounded">
                                Invite
                        </button>
                        <button onClick={() => window.location.href = "/docs"} className="bg-gradient-to-r from-orange-400 to-pink-400 hover:text-orange-300 text-white font-bold py-2 px-4 rounded">
                                Docs
                        </button>
                    </div>
                </div>
            </div>
    </section>
); }

export default Landing;
