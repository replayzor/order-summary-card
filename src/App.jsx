import illustratedHero from "/images/illustration-hero.svg";
import iconMusic from "/images/icon-music.svg";

function App() {
	return (
		<main className="flex items-center justify-center h-screen">
			<div className="bg-white max-w-[400px] rounded-2xl">
				<div>
					<img
						src={illustratedHero}
						alt="Illustrated Hero"
						className="rounded-t-2xl"
					/>
				</div>
				<div className="p-2">
					<h1 className="my-5 text-2xl font-extrabold text-center text-neutral-darkBlue">
						Order Summary
					</h1>
					<div className="flex items-center justify-center text-center font-display">
						<p className="w-2/3 font-bold text-neutral-desaturatedBlue mb-7">
							You can now listen to millions of songs, audio books, and podcasts
							on any device anywhere you like!
						</p>
					</div>
					<div className="flex items-center justify-between w-4/5 px-4 py-4 m-auto bg-neutral-veryPaleBlue rounded-3xl">
						<div className="flex flex-row gap-4">
							<img
								src={iconMusic}
								alt="Icon Music"
								className="rounded-full bg-neutral-darkBlue"
							/>
							<div className="flex flex-col">
								<p className="font-black text-neutral-darkBlue">Annual Plan</p>
								<p className="text-neutral-desaturatedBlue">$59.99/year</p>
							</div>
						</div>
						<button
							type="button"
							className="font-bold underline transition duration-300 hover:no-underline hover:opacity-50 text-primary-brightBlue"
						>
							Change
						</button>
					</div>
					<div className="flex items-center justify-center my-6">
						<button
							type="button"
							className="px-20 py-3 font-bold text-white transition duration-300 shadow-2xl hover:bg-opacity-60 bg-primary-brightBlue rounded-xl shadow-neutral-desaturatedBlue"
						>
							Proceed to Payment
						</button>
					</div>
					<div className="flex items-center justify-center mb-6">
						<button
							type="button"
							className="font-bold transition duration-300 hover:text-neutral-darkBlue text-neutral-desaturatedBlue"
						>
							Cancel Order
						</button>
					</div>
				</div>
			</div>
		</main>
	);
}

export default App;
