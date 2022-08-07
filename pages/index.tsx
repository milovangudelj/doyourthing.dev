import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
	return (
		<div className="bg-primary-900 text-white min-h-screen">
			<Head>
				<title>DoYourThing</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="">
				<div className="max-w-7xl mx-auto py-8">
					<h1 className="text-6xl font-bold">
						Welcome to{" "}
						<a href="https://github.com/milovangudelj/doyourthing">
							DoYourThing!
						</a>
					</h1>
					<p className="text-lg mt-4 max-w-[45ch]">
						A script that installs for you all your programs and packages
						as well as some system configurations that you define.
					</p>
					<button className="py-2 px-4 mt-4 rounded-lg bg-green-500 font-bold uppercase tracking-wide text-sm text-white hover:bg-green-400 active:bg-green-600 transition">
						<a
							href="https://github.com/milovangudelj/doyourthing"
							target="_blank"
							rel="noreferrer noopener"
						>
							Learn more
						</a>
					</button>
				</div>
			</main>
		</div>
	);
};

export default Home;