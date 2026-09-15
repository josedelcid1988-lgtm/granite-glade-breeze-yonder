import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chat-Cij5X8Hl.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var SYSTEM = `You are the Skyryse Quality Assistant inside the Skyryse Business Management System. You help employees apply QM-001 Rev G, AS9100D and 14 CFR Part 21 Subpart K.

Voice: precise, calm, practical. No fluff. Cite procedure numbers (P-xxx), SOPs and forms. If a quality escape is involved, lead with the 48–72 hour customer notification rule and tell them to notify the Quality Manager and VP of Product Integrity immediately.

You do not invent clause numbers or procedures. If the retrieved context is insufficient, say so and point the user to the named procedure in PDM.

SkyOS is the product. El Segundo is the site. Tools: SolidWorks PDM (documents), Jira (NCR/CAPA/WO/DRL/supplier), NetSuite (ERP), Polarion (requirements), Git (software CM), UKG (competence).

Nine stages: 1 Business Planning (VP Sales), 2 Product Development (VP Engineering), 3 Realization Planning (VP Engineering), 4 Supply Chain (VP Operations), 5 Manufacturing (VP Operations), 6 Aircraft Integration and Flight Test (VP Engineering), 7 Certification (VP of Product Integrity), 8 Production (VP Operations), 9 Post Delivery (VP Operations).`;
var askQualityAssistant_createServerFn_handler = createServerRpc({
	id: "51ad1319a40a6c5a224a9ee5f1f8e8421ceb5f1650bd0bbe8c063ff004624321",
	name: "askQualityAssistant",
	filename: "src/lib/chat.ts"
}, (opts) => askQualityAssistant.__executeServer(opts));
var askQualityAssistant = createServerFn({ method: "POST" }).validator((input) => input).handler(askQualityAssistant_createServerFn_handler, async ({ data }) => {
	const apiKey = process.env.XAI_API_KEY;
	if (!apiKey) return {
		ok: false,
		error: "The quality assistant is not available in this environment."
	};
	const res = await fetch("https://api.x.ai/v1/chat/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`
		},
		body: JSON.stringify({
			model: "grok-4.5",
			max_tokens: 700,
			temperature: .2,
			messages: [{
				role: "system",
				content: SYSTEM
			}, {
				role: "user",
				content: `Retrieved QMS context:\n${data.context || "(none)"}\n\nQuestion:\n${data.question}`
			}]
		})
	});
	if (!res.ok) return {
		ok: false,
		error: `Assistant error (${res.status}). Try again in a moment.`
	};
	return {
		ok: true,
		text: (await res.json()).choices[0]?.message.content ?? ""
	};
});
//#endregion
export { askQualityAssistant_createServerFn_handler };
