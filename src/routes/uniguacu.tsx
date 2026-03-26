import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/uniguacu")({ component: Uniguacu });

function Uniguacu() {
	return (
		<iframe
			src="/uniguacu.html"
			title="Portal de Avaliação - Moodle"
			style={{ width: "100%", height: "100vh", border: "none" }}
		/>
	);
}
