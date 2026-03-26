import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<div className="flex justify-center items-center h-screen text-4xl font-bold">
			Tamara Thomas Pauleski
		</div>
	);
}
