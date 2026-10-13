import Controls from "./Controls";
import PlanCard from "./PlanCard";
import Summary from "./Summary";

function PlanPicker({ seats, months, customer, onAddSeat, onAddMonth, onReset }) {
	const plans = [
		{ name: "Starter", price: 199, storage: "10 GB", support: "Email support" },
		{ name: "Team", price: 499, storage: "100 GB", support: "Chat support" },
		{ name: "Business", price: 999, storage: "1000 GB", support: "Phone support" },
	];

	return (
		<>
			<div className="flex items-end justify-between bg-[#000000] px-20 py-12 text-[#EEEEEE]">
				<Summary seats={seats} months={months} customer={customer} />
				<Controls onAddSeat={onAddSeat} onAddMonth={onAddMonth} onReset={onReset} />
			</div>

			<main className="grid grid-cols-3 gap-8 px-20 pt-10">
				{plans.map((plan) => (
					<PlanCard
						key={plan.name}
						name={plan.name}
						price={plan.price}
						storage={plan.storage}
						support={plan.support}
						seats={seats}
						months={months}
					/>
				))}
			</main>
		</>
	);
}

export default PlanPicker;
