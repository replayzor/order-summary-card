import illustratedHero from "/images/illustration-hero.svg";
import iconMusic from "/images/icon-music.svg";

function App() {
	return (
		<div className="flex items-center justify-center h-screen">
			<div className="bg-white max-w-[400px] rounded-2xl">
				<div>
					<img
						src={illustratedHero}
						alt="Illustrated Hero"
						className="rounded-t-2xl"
					/>
				</div>
				<div className="p-2">
					<h1 className="text-center my-5 text-2xl font-extrabold text-neutral-darkBlue">
						Order Summary
					</h1>
					<div className="text-center flex justify-center items-center font-display">
						<p className="w-2/3 text-neutral-desaturatedBlue mb-7 font-bold">
							You can now listen to millions of songs, audio books, and podcasts
							on any device anywhere you like!
						</p>
					</div>
					<div className="py-4 px-4 w-4/5 m-auto bg-neutral-veryPaleBlue rounded-3xl flex justify-between items-center">
						<div className="flex flex-row gap-4">
							<img
								src={iconMusic}
								alt="Icon Music"
								className="bg-neutral-darkBlue rounded-full"
							/>
							<div className="flex flex-col">
								<p className="text-neutral-darkBlue font-black">Annual Plan</p>
								<p className="text-neutral-desaturatedBlue">$59.99/year</p>
							</div>
						</div>
						<a
							href="#"
							className="hover:no-underline hover:opacity-50 underline text-primary-brightBlue font-bold"
						>
							Change
						</a>
					</div>
					<div className="flex items-center justify-center my-6">
						<button className="hover:bg-opacity-60 bg-primary-brightBlue text-white rounded-xl shadow-neutral-desaturatedBlue shadow-2xl py-3 px-20 font-bold">
							Proceed to Payment
						</button>
					</div>
					<div className="flex items-center justify-center mb-6">
						<button className="hover:text-neutral-darkBlue text-neutral-desaturatedBlue font-bold">
							Cancel Order
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
