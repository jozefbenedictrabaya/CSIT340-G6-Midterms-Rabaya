import { useState } from "react";

function Waitlist() {
	const [teams, setTeams] = useState(0);

	return (
		<section className="flex items-center justify-between px-20 py-8">
			<div>
				<h2 className="text-3xl font-bold">Waitlist</h2>
				<p className="mt-2 text-xl">Teams: {teams}</p>
			</div>
			<div className="flex gap-4">
				<button
					type="button"
					className="cursor-pointer rounded-lg bg-[#CB2957] px-8 py-3 text-xl font-bold text-[#EEEEEE]"
					onClick={() => setTeams((currentTeams) => currentTeams + 1)}
				>
					Join
				</button>
				<button
					type="button"
					className="cursor-pointer rounded-lg border-2 border-[#000000] px-8 py-3 text-xl font-bold"
					onClick={() => setTeams(0)}
				>
					Clear
				</button>
			</div>
		</section>
	);
}

export default Waitlist;
