import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as createRootRoute, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Slot, s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { C as Activity, _ as Command, a as Sparkles, b as Check, c as Search, d as LifeBuoy, f as LayoutDashboard, h as FileStack, l as MessageCircle, n as TriangleAlert, o as ShieldCheck, p as GitBranch, r as Ticket, s as Send, t as X, u as Menu, v as ClipboardCheck, x as BookOpen, y as ChevronDown } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { a as DialogPortal$1, i as DialogOverlay$1, n as DialogClose, r as DialogContent$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as persist, r as create, t as createJSONStorage } from "../_libs/zustand.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { t as Root$1 } from "../_libs/radix-ui__react-label.mjs";
import { a as SelectItemIndicator, c as SelectTrigger$1, i as SelectItem$1, l as SelectValue$1, n as SelectContent$1, o as SelectItemText, r as SelectIcon, s as SelectPortal, t as Select$1, u as SelectViewport } from "../_libs/@radix-ui/react-select+[...].mjs";
import { n as Portal, r as Provider, t as Content2 } from "../_libs/radix-ui__react-tooltip.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-C_uf36nf.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/stages-BKYmkh17.js
var months = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep"
];
function series(values) {
	return months.map((month, i) => ({
		month,
		value: values[i] ?? null
	}));
}
var stages = [
	{
		id: "s1",
		number: 1,
		name: "Business Planning",
		shortName: "Plan",
		owner: "VP of Sales",
		ownerRole: "Stage owner",
		color: "primary",
		intent: "Convert an opportunity into an approved program with defined customer, statutory and regulatory requirements, and confirm Skyryse can meet them before it commits.",
		inputs: [
			"Customer inquiry, proposal request or program opportunity",
			"Customer, statutory, regulatory and special requirements",
			"Market data, in-service feedback and competitor information"
		],
		process: [
			"Market studies",
			"Opportunity evaluation and proposal",
			"Contract review",
			"Customer requirement flow down"
		],
		outputs: [
			"Approved program",
			"Reviewed and accepted contract or purchase order",
			"Market study results",
			"Flowed-down requirement set",
			"Contract review and risk records"
		],
		procedureIds: ["p-820", "p-610"],
		tools: ["SolidWorks PDM"],
		as9100: [
			"8.2",
			"8.2.2",
			"8.2.3"
		],
		cfr: ["None applied directly at this stage"],
		records: "Outputs are quality records, controlled and retained under P-750. Personnel are competent and authorized under P-720.",
		competence: "Contract review is performed only by personnel authorized under P-820.",
		metrics: [{
			id: "s1-review",
			name: "Proposals and orders with recorded contract review before acceptance",
			target: "100%",
			targetValue: 100,
			unit: "%",
			frequency: "Monthly",
			source: "Contract review records",
			current: 100,
			status: "on-target",
			series: series([
				100,
				100,
				100,
				100,
				100,
				100,
				100,
				100,
				100
			])
		}],
		processes: [
			{
				id: "s1-market",
				name: "Market studies",
				procedureIds: ["p-820"],
				sopIds: ["sop-820-001"],
				formIds: ["f-820-001"],
				tools: ["SolidWorks PDM"],
				jiraType: "Data Requirement",
				summary: "Capture market, competitor and in-service inputs that shape the requirement set before a proposal is written.",
				howTo: [
					"Pull in-service feedback from Stage 9 before opening a new opportunity.",
					"Record the study in PDM under the program folder — it is a quality record.",
					"Flag any special customer or regulatory requirement that will need flow-down."
				]
			},
			{
				id: "s1-opportunity",
				name: "Opportunity evaluation & proposal",
				procedureIds: ["p-820", "p-610"],
				sopIds: ["sop-820-002"],
				formIds: ["f-820-001"],
				tools: ["SolidWorks PDM"],
				jiraType: "Data Requirement",
				summary: "Evaluate whether Skyryse can meet the requirement set, then issue the proposal.",
				howTo: [
					"Run the capability check against current capacity, certification basis and approved suppliers.",
					"Log risks under P-610 before the proposal leaves the building.",
					"Do not commit delivery dates the production system cannot support."
				]
			},
			{
				id: "s1-contract",
				name: "Contract review",
				procedureIds: ["p-820", "p-610"],
				sopIds: ["sop-820-003"],
				formIds: ["f-820-002"],
				tools: ["SolidWorks PDM"],
				jiraType: "Work Order",
				summary: "Review and accept the contract or purchase order. No order is accepted without a recorded review.",
				howTo: [
					"Open F-820-002 and walk every statutory, regulatory and special requirement.",
					"Record residual risk. If the review is incomplete, do not accept the order.",
					"File the signed review in PDM. This metric is reported at 100% or it is a miss."
				]
			},
			{
				id: "s1-flowdown",
				name: "Requirement flow down",
				procedureIds: ["p-820"],
				sopIds: ["sop-820-004"],
				formIds: ["f-820-003"],
				tools: ["SolidWorks PDM", "Polarion"],
				jiraType: "Data Requirement",
				summary: "Flow customer, statutory and regulatory requirements into Polarion and the approved program.",
				howTo: [
					"Create or update the Polarion specification from the accepted contract.",
					"Identify requirements that will become purchase-order quality clauses in Stage 4.",
					"Hand the approved program to Product Development as the Stage 2 input."
				]
			}
		],
		next: ["s2"]
	},
	{
		id: "s2",
		number: 2,
		name: "Product Development",
		shortName: "Design",
		owner: "VP of Engineering",
		ownerRole: "Stage owner",
		color: "primary",
		intent: "Design, verify and validate SkyOS hardware and software against the requirement set, and release the design under configuration control.",
		inputs: [
			"Approved program and requirement set",
			"Product safety requirements",
			"Flight test findings and in-service data",
			"Applicable statutory and regulatory requirements"
		],
		process: [
			"Design and development planning",
			"Design inputs and requirements management",
			"Design verification and validation",
			"Design data release and change control"
		],
		outputs: [
			"Released design data under configuration control",
			"Verification and validation records",
			"Product safety requirements traced to verification evidence",
			"Design data released to Certification for approval"
		],
		procedureIds: [
			"p-830",
			"p-812",
			"p-750"
		],
		tools: [
			"Polarion",
			"Git",
			"SolidWorks PDM"
		],
		as9100: ["8.1.2", "8.3"],
		cfr: ["21.137(a) design data control"],
		records: "Design releases, change records, V&V evidence. Controlled under P-750.",
		competence: "Design signatories are authorized under P-830 and P-720.",
		metrics: [{
			id: "s2-release",
			name: "Design releases with an approved change record under configuration control",
			target: "100%",
			targetValue: 100,
			unit: "%",
			frequency: "Monthly",
			source: "Design release and change records",
			current: 100,
			status: "on-target",
			series: series([
				100,
				100,
				100,
				100,
				100,
				100,
				100,
				100,
				100
			])
		}],
		processes: [
			{
				id: "s2-plan",
				name: "Design & development planning",
				procedureIds: ["p-830"],
				sopIds: ["sop-830-001"],
				formIds: ["f-830-001"],
				tools: ["Polarion", "SolidWorks PDM"],
				jiraType: "Data Requirement",
				summary: "Plan the design, reviews, verification, validation and certification hand-off before work starts.",
				howTo: [
					"Use F-830-001 to set reviews, methods of compliance and the Polarion specification.",
					"Include product safety as a design input, not a later inspection.",
					"Identify software items that will be controlled in Git under P-812."
				]
			},
			{
				id: "s2-requirements",
				name: "Requirements management",
				procedureIds: ["p-830", "p-812"],
				sopIds: ["sop-830-002"],
				formIds: [],
				tools: ["Polarion"],
				jiraType: "Data Requirement",
				summary: "Hold the requirement set in Polarion. Every design output traces to an input.",
				howTo: [
					"Import the flowed-down requirement set from Stage 1.",
					"Trace product safety requirements to verification evidence.",
					"Do not design to an unreleased or unverified requirement."
				]
			},
			{
				id: "s2-vv",
				name: "Verification & validation",
				procedureIds: ["p-830"],
				sopIds: ["sop-830-003"],
				formIds: ["f-830-002"],
				tools: ["Polarion", "Git"],
				jiraType: "Work Order",
				summary: "Verify the design against inputs and validate it in the intended use, including flight test findings returning from Stage 6.",
				howTo: [
					"Close Polarion verification items before requesting design release.",
					"Feed Stage 6 flight-test findings and Stage 9 in-service data back into the design.",
					"Hold a design review when verification is incomplete — do not skip to release."
				]
			},
			{
				id: "s2-release",
				name: "Design data release",
				procedureIds: [
					"p-830",
					"p-812",
					"p-750"
				],
				sopIds: ["sop-812-001"],
				formIds: ["f-812-001"],
				tools: ["SolidWorks PDM", "Git"],
				jiraType: "Document Change",
				summary: "Release design data under configuration control. A release without an approved change record is a metric miss.",
				howTo: [
					"Route the change through PDM using F-812-001.",
					"Software releases go through Git tags that match the PDM configuration item.",
					"Notify Certification (Stage 7) that design data is ready for approval."
				]
			}
		],
		next: ["s3", "s7"],
		feedbackFrom: ["s6", "s9"]
	},
	{
		id: "s3",
		number: 3,
		name: "Realization Planning",
		shortName: "Realize",
		owner: "VP of Engineering",
		ownerRole: "Stage owner",
		color: "primary",
		intent: "Translate the released design into a producible configuration and define where conformity will be verified.",
		inputs: [
			"Released design baseline",
			"Critical item and key characteristic candidates",
			"Capacity, tooling and resource data"
		],
		process: [
			"Bill of material release and make or buy",
			"Item master and master work instruction creation",
			"Process and tooling planning",
			"Key characteristic and inspection planning"
		],
		outputs: [
			"Released bill of material and make or buy determination",
			"Item masters and master work instructions",
			"Process and tooling plans",
			"Designated critical items and key characteristics",
			"Inspection plan"
		],
		procedureIds: [
			"p-812",
			"p-850",
			"p-830"
		],
		tools: ["SolidWorks PDM", "NetSuite"],
		as9100: [
			"8.1.2",
			"8.1.3",
			"8.5.1"
		],
		cfr: ["21.137(a) design data control", "21.137(d) manufacturing process control"],
		records: "BOM, item masters, MWIs, inspection plans. Controlled under P-750.",
		competence: "Planners creating MWIs and inspection plans are authorized under P-850.",
		metrics: [{
			id: "s3-kc",
			name: "Key characteristics from the released design present in the inspection plan",
			target: "100%",
			targetValue: 100,
			unit: "%",
			frequency: "Monthly",
			source: "Inspection plans against released design data",
			current: 100,
			status: "on-target",
			series: series([
				100,
				100,
				100,
				100,
				100,
				100,
				100,
				100,
				100
			])
		}],
		processes: [
			{
				id: "s3-bom",
				name: "BOM release & make/buy",
				procedureIds: ["p-812", "p-840"],
				sopIds: ["sop-812-002"],
				formIds: ["f-812-002"],
				tools: ["SolidWorks PDM", "NetSuite"],
				jiraType: "Document Change",
				summary: "Release the bill of material and decide make versus buy against the approved supplier list.",
				howTo: [
					"BOM in PDM must match the released design baseline — no shadow spreadsheets.",
					"Buy items require an approved supplier before a requisition is raised.",
					"Critical items stay under configuration control regardless of make or buy."
				]
			},
			{
				id: "s3-item",
				name: "Item masters & master work instructions",
				procedureIds: ["p-850", "p-812"],
				sopIds: ["sop-850-001"],
				formIds: ["f-850-001"],
				tools: ["NetSuite", "SolidWorks PDM"],
				jiraType: "Work Order",
				summary: "Create the NetSuite item master and the master work instruction that manufacturing will execute.",
				howTo: [
					"Item master fields (traceability, inspection, shelf life) are quality records.",
					"MWIs reference the released configuration, not a working copy.",
					"Changes to an MWI are configuration changes under P-812."
				]
			},
			{
				id: "s3-tooling",
				name: "Process & tooling planning",
				procedureIds: ["p-850"],
				sopIds: ["sop-850-001"],
				formIds: ["f-850-001"],
				tools: ["SolidWorks PDM", "NetSuite"],
				jiraType: "Work Order",
				summary: "Define the process, tooling and work environment so the article can be built to the released design.",
				howTo: [
					"Identify ESD, FOD and environmental controls required by P-714 and P-851.",
					"Confirm calibrated equipment is available under P-715 before first article.",
					"Plan for temporary or permanent transfer of work if capacity requires it."
				]
			},
			{
				id: "s3-kc",
				name: "Key characteristic & inspection planning",
				procedureIds: ["p-850", "p-830"],
				sopIds: ["sop-850-005"],
				formIds: ["f-850-002"],
				tools: ["SolidWorks PDM"],
				jiraType: "Data Requirement",
				summary: "Every key characteristic on the released design must appear in the inspection plan. This is the Stage 3 metric.",
				howTo: [
					"Pull KCs and critical items from the released design, not from memory.",
					"Set the inspection method, sample and record for each KC.",
					"Hand the inspection plan to Manufacturing and Certification before work orders are cut."
				]
			}
		],
		next: ["s4"]
	},
	{
		id: "s4",
		number: 4,
		name: "Supply Chain",
		shortName: "Supply",
		owner: "VP of Operations",
		ownerRole: "Stage owner",
		color: "primary",
		intent: "Approve sources, place purchase orders with quality requirements flowed down, and accept the material Manufacturing builds with. Skyryse remains responsible for all externally provided processes, products and services.",
		inputs: [
			"Released bill of material and make or buy determination",
			"Purchase requisitions",
			"Supplier data and performance history"
		],
		process: [
			"Supplier approval and approved supplier list",
			"Purchase requisition to purchase order",
			"Source inspection",
			"Receiving and receiving inspection",
			"First article inspection"
		],
		outputs: [
			"Approved suppliers",
			"Purchase orders with quality clauses flowed down",
			"Accepted, identified and traceable material",
			"Receiving inspection records and First Article Inspection Reports"
		],
		procedureIds: [
			"p-840",
			"p-814",
			"p-852"
		],
		tools: ["NetSuite", "Jira"],
		as9100: ["8.1.4", "8.4"],
		cfr: ["21.137(c) supplier control"],
		records: "ASL, POs, receiving inspection, FAIR. Skyryse remains responsible for supplier conformity.",
		competence: "Receiving inspectors are qualified for the inspections they perform.",
		metrics: [{
			id: "s4-accept",
			name: "Supplier lot acceptance rate",
			target: "≥ 90%",
			targetValue: 90,
			unit: "%",
			frequency: "Monthly",
			source: "Receiving inspection records",
			current: 92,
			status: "on-target",
			series: series([
				94,
				93,
				91,
				90,
				92,
				93,
				91,
				92,
				92
			])
		}, {
			id: "s4-otd",
			name: "Supplier on-time delivery",
			target: "≥ 70%, increasing to 90% by 31 Dec 2027",
			targetValue: 70,
			unit: "%",
			frequency: "Monthly",
			source: "Purchase order promise dates against receipt dates",
			current: 74,
			status: "on-target",
			note: "Stretch target 90% by 31 December 2027.",
			series: series([
				68,
				70,
				71,
				72,
				73,
				74,
				73,
				75,
				74
			])
		}],
		processes: [
			{
				id: "s4-asl",
				name: "Supplier approval & ASL",
				procedureIds: ["p-840"],
				sopIds: ["sop-840-001"],
				formIds: ["f-840-001"],
				tools: ["NetSuite", "Jira"],
				jiraType: "Supplier Ticket",
				summary: "No purchase order is placed with a source that is not on the approved supplier list.",
				howTo: [
					"Qualify the supplier against P-840 before the first PO.",
					"Customer-defined sources still require Skyryse oversight — we remain responsible.",
					"Raise a supplier ticket in Jira when performance or quality slips."
				]
			},
			{
				id: "s4-po",
				name: "Purchase orders & quality clauses",
				procedureIds: ["p-840", "p-814"],
				sopIds: ["sop-840-002"],
				formIds: ["f-840-002"],
				tools: ["NetSuite"],
				jiraType: "Supplier Ticket",
				summary: "Every PO flows down quality, traceability, right of access, and counterfeit-prevention clauses.",
				howTo: [
					"Use the standard quality clause set on F-840-002. Do not strip clauses to hurry a buy.",
					"Include AS9102 FAI when the item is a first production or a change.",
					"Counterfeit prevention (P-814) applies to electronic parts without exception."
				]
			},
			{
				id: "s4-source",
				name: "Source inspection",
				procedureIds: ["p-840"],
				sopIds: ["sop-840-003"],
				formIds: ["f-840-003"],
				tools: ["Jira"],
				jiraType: "Supplier Ticket",
				summary: "Perform source inspection where the PO or risk requires it, including at customer-defined sources.",
				howTo: [
					"Schedule source inspection from the Jira supplier board before shipment.",
					"Record results against the PO line. Do not accept on a verbal.",
					"FAA and customer right of access applies at supplier facilities (QM-001 §11.4)."
				]
			},
			{
				id: "s4-recv",
				name: "Receiving inspection",
				procedureIds: ["p-840", "p-852"],
				sopIds: ["sop-840-004"],
				formIds: ["f-840-004"],
				tools: ["NetSuite", "Jira"],
				jiraType: "Internal Discrepancy",
				summary: "Accept, identify and make traceable only material that meets the PO and approved design.",
				howTo: [
					"Hold incoming material as Undetermined until inspection is complete (P-850 conformity status).",
					"Raise an NCR in Jira for any nonconformance — do not use a side log.",
					"Rejected lots move the supplier acceptance metric. Trend them at management review."
				]
			},
			{
				id: "s4-fai",
				name: "First article inspection",
				procedureIds: ["p-840", "p-850"],
				sopIds: ["sop-850-005"],
				formIds: ["f-840-005"],
				tools: ["Jira", "SolidWorks PDM"],
				jiraType: "Work Order",
				summary: "AS9102 first article on first production, design change, or process change. A FAIR is a quality record.",
				howTo: [
					"Complete AS9102 Forms 1, 2 and 3 against the released design.",
					"Do not kit or issue to a work order until the FAIR is accepted.",
					"File the FAIR in PDM and link it on the NetSuite item."
				]
			}
		],
		next: ["s5"]
	},
	{
		id: "s5",
		number: 5,
		name: "Manufacturing",
		shortName: "Build",
		owner: "VP of Operations",
		ownerRole: "Stage owner",
		color: "primary",
		intent: "Build the article to the released configuration on a released work order and verify its conformity in process and at acceptance test. Inspection and test status is identifiable at all times.",
		inputs: [
			"Accepted material",
			"Released work order, item masters and master work instructions",
			"Inspection plan and key characteristics"
		],
		process: [
			"Work order release and kitting",
			"Assembly",
			"In-process inspection",
			"Acceptance testing",
			"Handling, storage and preservation"
		],
		outputs: [
			"Accepted articles and line replaceable units",
			"Completed work order package and acceptance test results",
			"Inspection and conformity status records",
			"Part and test set-up conformity support to Certification"
		],
		procedureIds: [
			"p-850",
			"p-852",
			"p-851",
			"p-714"
		],
		tools: [
			"NetSuite",
			"Jira",
			"SolidWorks PDM"
		],
		as9100: [
			"8.5.1",
			"8.5.1.3",
			"8.5.2",
			"8.5.4"
		],
		cfr: [
			"21.137(d) manufacturing process control",
			"21.137(e) inspecting and testing",
			"21.137(g) inspection and test status",
			"21.137(j) handling and storage"
		],
		records: "Work order packages, inspection records, ATR. An article without identifiable status is treated as awaiting inspection.",
		competence: "Inspection and test personnel are qualified for the inspections they perform.",
		metrics: [{
			id: "s5-fpy",
			name: "First pass yield at in-process inspection",
			target: "≥ 90%",
			targetValue: 90,
			unit: "%",
			frequency: "Monthly",
			source: "Inspection and nonconformance records against work orders",
			current: 88,
			status: "at-risk",
			note: "Below target. Three consecutive months under 90% requires a corrective action under P-1000.",
			series: series([
				91,
				90,
				89,
				88,
				87,
				88,
				86,
				88,
				88
			])
		}],
		processes: [
			{
				id: "s5-kitting",
				name: "Work order release & kitting",
				procedureIds: ["p-850", "p-852"],
				sopIds: ["sop-850-001"],
				formIds: ["f-850-001"],
				tools: ["NetSuite", "Jira"],
				jiraType: "Work Order",
				summary: "Release the work order only against the released configuration. Kit from accepted, traceable stock.",
				howTo: [
					"Confirm the MWI and inspection plan match the released baseline before release.",
					"Do not kit Unidentified or Not Conformable material.",
					"The traveler (F-850-001) is the inspection and test status record."
				]
			},
			{
				id: "s5-assembly",
				name: "Assembly",
				procedureIds: [
					"p-850",
					"p-714",
					"p-851"
				],
				sopIds: ["sop-850-002"],
				formIds: ["f-850-001"],
				tools: ["NetSuite", "Jira"],
				jiraType: "Work Order",
				summary: "Build to the MWI. ESD and FOD controls are in force whenever the article is open.",
				howTo: [
					"Wrist strap and ESD station checks are recorded at the start of each shift (P-714).",
					"6S and FOD walks are recorded under P-851. Stop work if FOD is uncontrolled.",
					"Deviations from the MWI are nonconformances — raise an NCR, do not pencil-whip."
				]
			},
			{
				id: "s5-ipi",
				name: "In-process inspection",
				procedureIds: ["p-850", "p-852"],
				sopIds: ["sop-850-003"],
				formIds: ["f-850-002"],
				tools: ["Jira", "NetSuite"],
				jiraType: "Internal Discrepancy",
				summary: "Inspect at the planned points. First pass yield here is the Stage 5 metric — currently at risk.",
				howTo: [
					"Stamp the traveler. An article without a stamp is awaiting inspection, not accepted.",
					"Failing a KC is an NCR. Do not continue the work order past a failed inspection.",
					"Trend FPY. Three months under 90% raises CA-26-007 under P-1000."
				]
			},
			{
				id: "s5-atp",
				name: "Acceptance testing",
				procedureIds: ["p-850"],
				sopIds: ["sop-850-004"],
				formIds: ["f-850-003"],
				tools: ["Jira", "SolidWorks PDM"],
				jiraType: "Work Order",
				summary: "Run the released acceptance test procedure. Results go in the work order package.",
				howTo: [
					"Use the ATP revision that matches the released configuration.",
					"Test equipment must be in calibration (P-715). Out-of-cal stops the test.",
					"Pass results support part and test set-up conformity for Stage 7."
				]
			},
			{
				id: "s5-pres",
				name: "Handling, storage & preservation",
				procedureIds: [
					"p-850",
					"p-851",
					"p-852"
				],
				sopIds: ["sop-850-006"],
				formIds: [],
				tools: ["NetSuite"],
				jiraType: "Internal Discrepancy",
				summary: "Preserve the article so conformity is not lost between build, certification and delivery.",
				howTo: [
					"ESD packaging for electronic LRUs. No exception for short moves.",
					"Shelf-life items are identified in NetSuite and cannot be issued expired.",
					"Customer and supplier property is controlled under P-853 when it is in our hands."
				]
			}
		],
		next: ["s6", "s7"]
	},
	{
		id: "s6",
		number: 6,
		name: "Aircraft Integration and Flight Test",
		shortName: "Fly",
		owner: "VP of Engineering",
		ownerRole: "Stage owner",
		color: "primary",
		intent: "Install SkyOS on the aircraft and verify its performance in the installed configuration. Findings return to Product Development.",
		inputs: [
			"Accepted line replaceable units",
			"Approved installation configuration",
			"Approved flight test plan"
		],
		process: [
			"Line replaceable unit receipt and aircraft installation",
			"Hangar maintenance",
			"Flight test execution"
		],
		outputs: [
			"Installed and recorded as-installed configuration",
			"Flight test report",
			"Flight test findings returned to Product Development"
		],
		procedureIds: [
			"p-830",
			"p-850",
			"p-852"
		],
		tools: ["Jira", "Polarion"],
		as9100: ["8.5.1", "8.6"],
		cfr: ["21.137(e)(1) flight test of each aircraft produced"],
		records: "As-installed configuration, flight test reports, discrepancy records.",
		competence: "Flight test and installation personnel are authorized under P-720 for the work they perform.",
		metrics: [{
			id: "s6-air",
			name: "Discrepancies affecting airworthiness open at flight release",
			target: "Zero",
			targetValue: 0,
			unit: "open",
			frequency: "Each flight release, from the first flight release",
			source: "Flight release and flight test records",
			current: null,
			status: "dormant",
			note: "Dormant until the first flight release. The stage owner declares it active when that condition is met.",
			series: series([
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null
			])
		}],
		processes: [
			{
				id: "s6-lru",
				name: "LRU receipt & aircraft installation",
				procedureIds: ["p-850", "p-852"],
				sopIds: ["sop-850-007"],
				formIds: ["f-850-004"],
				tools: ["Jira", "NetSuite"],
				jiraType: "Work Order",
				summary: "Receive accepted LRUs and install them to the approved installation configuration.",
				howTo: [
					"Verify conformity status is Fully Conformed or TSOA before installation.",
					"Record serial numbers against the as-installed configuration (P-852).",
					"Installation deviations are NCRs. Do not fly an unrecorded configuration."
				]
			},
			{
				id: "s6-hangar",
				name: "Hangar maintenance",
				procedureIds: ["p-850", "p-851"],
				sopIds: ["sop-850-007"],
				formIds: ["f-850-004"],
				tools: ["Jira"],
				jiraType: "Work Order",
				summary: "Maintain the aircraft in the hangar under the same production controls that apply on the floor.",
				howTo: [
					"FOD control in the hangar is the same standard as the shop (P-851).",
					"Tools and calibrated equipment follow P-715.",
					"Open discrepancies that affect airworthiness block flight release."
				]
			},
			{
				id: "s6-ft",
				name: "Flight test execution",
				procedureIds: ["p-830", "p-850"],
				sopIds: ["sop-830-004"],
				formIds: ["f-830-003"],
				tools: ["Jira", "Polarion"],
				jiraType: "Internal Discrepancy",
				summary: "Execute the approved flight test plan. Findings return to Product Development as design inputs.",
				howTo: [
					"Zero airworthiness discrepancies at flight release — this is the Stage 6 metric once active.",
					"Log findings in Jira and Polarion so Stage 2 can close them under configuration control.",
					"The flight test report is a quality record under P-750."
				]
			}
		],
		next: ["s2", "s7"]
	},
	{
		id: "s7",
		number: 7,
		name: "Certification",
		shortName: "Certify",
		owner: "VP of Product Integrity",
		ownerRole: "Stage owner",
		color: "primary",
		intent: "Establish conformity of parts, test set-ups and finished articles, and verify the configuration against the released design before rate production.",
		inputs: [
			"Released design data",
			"Part and test set-up conformity support from Manufacturing",
			"Flight test results and as-installed configuration"
		],
		process: [
			"Part conformity",
			"Test set-up conformity",
			"Final inspection and conformity determination"
		],
		outputs: ["Conformity records", "Verified configuration released to Production"],
		procedureIds: ["p-812", "p-850"],
		tools: ["SolidWorks PDM", "Jira"],
		as9100: ["8.6"],
		cfr: ["21.137(e) inspecting and testing"],
		records: "Conformity inspection records. VP of Product Integrity is primary FAA contact on production approval.",
		competence: "Conformity inspectors are authorized. Disposition of nonconforming articles is under P-870 by authorized individuals only.",
		metrics: [{
			id: "s7-first",
			name: "Conformity inspections accepted at first presentation",
			target: "Baseline over first three packages, target set at following management review",
			frequency: "Each conformity package",
			source: "Conformity inspection records",
			current: null,
			status: "baseline",
			note: "Baseline period is not counted toward the three-month miss rule in §10.2.",
			series: series([
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null
			])
		}],
		processes: [
			{
				id: "s7-part",
				name: "Part conformity",
				procedureIds: ["p-850", "p-812"],
				sopIds: ["sop-850-008"],
				formIds: ["f-850-005"],
				tools: ["SolidWorks PDM", "Jira"],
				jiraType: "Work Order",
				summary: "Establish that the part conforms to the released design data.",
				howTo: [
					"Inspect against the released drawing and configuration, not a redline.",
					"Record the conformity status per P-850: Undetermined, Conformable, Not Conformable, Fully Conformed or TSOA.",
					"Failed first presentation is trended once the baseline is set."
				]
			},
			{
				id: "s7-setup",
				name: "Test set-up conformity",
				procedureIds: ["p-850"],
				sopIds: ["sop-850-008"],
				formIds: ["f-850-005"],
				tools: ["Jira", "SolidWorks PDM"],
				jiraType: "Work Order",
				summary: "Establish that the test set-up used to verify the article itself conforms.",
				howTo: [
					"Manufacturing supplies test set-up conformity support as a Stage 5 output.",
					"Calibrated equipment on the set-up must be current (P-715).",
					"A nonconforming set-up invalidates the test — stop and raise an NCR."
				]
			},
			{
				id: "s7-final",
				name: "Final inspection & conformity determination",
				procedureIds: ["p-850", "p-812"],
				sopIds: ["sop-850-008"],
				formIds: ["f-850-006"],
				tools: ["SolidWorks PDM", "Jira"],
				jiraType: "Internal Discrepancy",
				summary: "Make the conformity determination and release the verified configuration to Production.",
				howTo: [
					"The VP of Product Integrity has authority over the quality system for production under 14 CFR part 21.",
					"Nonconforming articles go to MRB under P-870. Do not ship around MRB.",
					"The verified configuration is the only configuration Stage 8 may produce at rate."
				]
			}
		],
		next: ["s8"]
	},
	{
		id: "s8",
		number: 8,
		name: "Production",
		shortName: "Produce",
		owner: "VP of Operations",
		ownerRole: "Stage owner",
		color: "primary",
		intent: "Produce the released configuration at rate, issue authorized release documents, and deliver the product with its conformity preserved.",
		inputs: [
			"Released and verified configuration",
			"Customer orders and delivery requirements",
			"Packaging specifications flowed down by the customer"
		],
		process: [
			"Rate production process control",
			"Issue of authorized release documents",
			"Packaging",
			"Shipping"
		],
		outputs: [
			"Delivered product",
			"Certificate of Conformance and FAA Form 8130-3",
			"Shipping and packaging records",
			"Process performance data"
		],
		procedureIds: [
			"p-850",
			"p-860",
			"p-852",
			"p-851",
			"p-853"
		],
		tools: [
			"NetSuite",
			"Jira",
			"SolidWorks PDM"
		],
		as9100: [
			"8.5.1",
			"8.5.3",
			"8.5.4",
			"8.5.6",
			"8.6"
		],
		cfr: [
			"21.137(d) manufacturing process control",
			"21.137(j) handling and storage",
			"21.137(o) issuing authorized release documents",
			"21.303 replacement and modification articles"
		],
		records: "8130-3, C of C, shipping records. Authorized release documents are issued only by individuals authorized under P-860.",
		competence: "8130-3 signatories are authorized under P-860. No other person issues a release document.",
		metrics: [{
			id: "s8-otd",
			name: "Customer on-time delivery",
			target: "≥ 90%",
			targetValue: 90,
			unit: "%",
			frequency: "Monthly, from the first delivery",
			source: "Shipment records against customer promise dates",
			current: null,
			status: "dormant",
			note: "Dormant until the first delivery. Stage owner declares active when the condition is met.",
			series: series([
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null
			])
		}, {
			id: "s8-conf",
			name: "Delivered product conformity, units accepted without customer rejection",
			target: "≥ 98%",
			targetValue: 98,
			unit: "%",
			frequency: "Monthly, from the first delivery",
			source: "Customer rejection and escape records",
			current: null,
			status: "dormant",
			note: "Dormant until the first delivery.",
			series: series([
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null
			])
		}],
		processes: [
			{
				id: "s8-rate",
				name: "Rate production process control",
				procedureIds: ["p-850"],
				sopIds: ["sop-850-001", "sop-850-005"],
				formIds: ["f-850-001"],
				tools: ["NetSuite", "Jira"],
				jiraType: "Work Order",
				summary: "Produce only the verified configuration, under the same controls used to establish conformity.",
				howTo: [
					"Process changes are controlled. A change that affects fit, form or function goes back through Stages 2 and 7.",
					"Keep FPY, FOD and ESD controls at the same standard as first-article production.",
					"Do not run rate on a configuration that Certification has not released."
				]
			},
			{
				id: "s8-8130",
				name: "Authorized release documents",
				procedureIds: ["p-860"],
				sopIds: ["sop-860-001"],
				formIds: ["f-860-001"],
				tools: ["SolidWorks PDM", "NetSuite"],
				jiraType: "Work Order",
				summary: "Issue the Certificate of Conformance and FAA Form 8130-3. Only P-860 authorized individuals sign.",
				howTo: [
					"Confirm the article is Fully Conformed before signing.",
					"Replacement and modification articles under 21.303 are released the same way.",
					"A signed 8130-3 is a quality record. Never back-date or sign for a colleague."
				]
			},
			{
				id: "s8-pack",
				name: "Packaging",
				procedureIds: [
					"p-850",
					"p-851",
					"p-853"
				],
				sopIds: ["sop-850-006"],
				formIds: ["f-850-007"],
				tools: ["NetSuite"],
				jiraType: "Work Order",
				summary: "Package to the customer specification so conformity is preserved through delivery.",
				howTo: [
					"Use the packaging spec flowed down on the order, not a default.",
					"ESD and preservation requirements travel with the article.",
					"Customer property included in the shipment is recorded under P-853."
				]
			},
			{
				id: "s8-ship",
				name: "Shipping",
				procedureIds: ["p-850", "p-852"],
				sopIds: ["sop-850-006"],
				formIds: ["f-850-007"],
				tools: ["NetSuite"],
				jiraType: "Work Order",
				summary: "Ship with identification, traceability and release documents intact.",
				howTo: [
					"The shipper matches the 8130-3 and the NetSuite order.",
					"On-time delivery against promise date is the Stage 8 metric once deliveries begin.",
					"A quality escape discovered after shipment is notified in 48–72 hours (QM-001 §11.4)."
				]
			}
		],
		next: ["s9"]
	},
	{
		id: "s9",
		number: 9,
		name: "Post Delivery Activities",
		shortName: "Support",
		owner: "VP of Operations",
		ownerRole: "Stage owner",
		color: "primary",
		intent: "Support the product in service and return what is learned to Product Development. Quality escapes are notified to customers and, where applicable, the FAA.",
		inputs: [
			"Delivered product",
			"Customer feedback and in-service data",
			"Returned material and escape notifications"
		],
		process: [
			"In-service feedback and return material authorization",
			"Quality escape handling and customer notification",
			"Support to the design approval holder on in-service problems"
		],
		outputs: [
			"In-service data and feedback to Product Development",
			"Return material authorization records",
			"Customer and FAA notifications",
			"Corrective actions"
		],
		procedureIds: [
			"p-820",
			"p-830",
			"p-870",
			"p-1000"
		],
		tools: ["Jira", "NetSuite"],
		as9100: ["8.5.5", "10.2"],
		cfr: ["21.137(m) in-service feedback", "21.137(n) quality escapes"],
		records: "RMA, escape notifications, CAPA. Notification window is 48–72 hours of discovery.",
		competence: "Escape notifications are issued through the Quality Manager and VP of Product Integrity.",
		metrics: [{
			id: "s9-escape",
			name: "Regulatory reports and customer notifications of a quality escape made within the required window",
			target: "100%",
			targetValue: 100,
			unit: "%",
			frequency: "Each event, from the first delivery",
			source: "Quality escape and regulatory reporting records",
			current: null,
			status: "dormant",
			note: "Dormant until the first delivery. Window is 48–72 hours of discovery (QM-001 §11.4).",
			series: series([
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null,
				null
			])
		}],
		processes: [
			{
				id: "s9-feedback",
				name: "In-service feedback & RMA",
				procedureIds: ["p-820", "p-830"],
				sopIds: ["sop-820-005"],
				formIds: ["f-820-004"],
				tools: ["Jira", "NetSuite"],
				jiraType: "Supplier Ticket",
				summary: "Capture in-service data and process returned material. Feed it to Product Development.",
				howTo: [
					"Open an RMA in NetSuite and a Jira record before the article comes back.",
					"In-service data is a Stage 2 design input — file it in Polarion where it affects requirements.",
					"Do not quarantine returned articles with accepted stock."
				]
			},
			{
				id: "s9-escape",
				name: "Quality escape handling",
				procedureIds: ["p-870", "p-1000"],
				sopIds: ["sop-870-003"],
				formIds: ["f-870-003"],
				tools: ["Jira"],
				jiraType: "Corrective Action",
				summary: "A quality escape is nonconforming product released from the quality system. Notify affected customers within 48–72 hours of discovery.",
				howTo: [
					"Stop. Identify affected serial numbers, customers and whether the FAA must be notified.",
					"Notify the Quality Manager and VP of Product Integrity immediately.",
					"Customer notification in 48–72 hours. FAA as applicable. Then CAPA under P-1000."
				]
			},
			{
				id: "s9-capa",
				name: "Corrective action",
				procedureIds: ["p-1000", "p-870"],
				sopIds: ["sop-1000-001"],
				formIds: ["f-1000-001"],
				tools: ["Jira"],
				jiraType: "Corrective Action",
				summary: "Analyze cause, correct, and verify. CAPA that miss the committed date are a QMS-level metric.",
				howTo: [
					"Use F-1000-001. Root cause is not 'operator error' without a process cause behind it.",
					"Product-safety nonconformities escalate to the Safety Review Board.",
					"Close only after verification of effectiveness — not when the containment is done."
				]
			}
		],
		next: ["s2"]
	}
];
var supportProcesses = [
	{
		id: "sup-docs",
		name: "Document & record control",
		procedureIds: ["p-750"],
		tools: ["SolidWorks PDM"],
		as9100: ["7.5"],
		cfr: ["21.137(b)", "21.137(k)"],
		summary: "PDM is the system of record for released QMS documents. Templates and TR- training material are not controlled QMS documents."
	},
	{
		id: "sup-ncr",
		name: "NCR, MRB & corrective action",
		procedureIds: ["p-870", "p-1000"],
		tools: ["Jira"],
		as9100: ["8.7", "10.2"],
		cfr: [
			"21.137(h)",
			"21.137(i)",
			"21.137(n)"
		],
		summary: "Identify, segregate and disposition nonconforming articles. Scrap is positively controlled until rendered unusable."
	},
	{
		id: "sup-cal",
		name: "Measurement resource control",
		procedureIds: ["p-715"],
		tools: ["SolidWorks PDM"],
		as9100: ["7.1.5"],
		cfr: ["21.137(f)"],
		summary: "Calibration standards are traceable to a standard acceptable to the FAA. Out-of-cal triggers a review of previously accepted articles."
	},
	{
		id: "sup-train",
		name: "Competence, training & awareness",
		procedureIds: ["p-720"],
		tools: ["UKG"],
		as9100: ["7.2", "7.3"],
		cfr: [],
		summary: "Initial awareness within 90 days of employment. Evidence of competence is retained for all personnel whose work affects QMS performance."
	},
	{
		id: "sup-audit",
		name: "Internal audit & management review",
		procedureIds: ["p-920", "p-500"],
		tools: ["Jira", "SolidWorks PDM"],
		as9100: ["9.2", "9.3"],
		cfr: ["21.137(l)"],
		summary: "The audit program covers every AS9100D clause and every 21.137 element across the cycle. Management review is under P-500."
	}
];
function getStage(id) {
	return stages.find((s) => s.id === id);
}
function getProcess(id) {
	for (const stage of stages) {
		const process = stage.processes.find((p) => p.id === id);
		if (process) return {
			process,
			stage
		};
	}
	return null;
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-vGhTjsjz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function SkyryseMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 32 32",
		className: cn("text-primary", className),
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M3.2 5.4 12.4 19.2V27.4h7.2V19.2L28.8 5.4l-5.2-3.2L16 14.2 8.4 2.2 3.2 5.4z"
		})
	});
}
function SkyryseWordmark({ compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex size-8 items-center justify-center rounded-md bg-secondary",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkyryseMark, { className: "size-5" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "font-display text-base font-semibold tracking-tight",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-primary",
					children: "SKY"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-foreground",
					children: "RYSE"
				})]
			}), !compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-0.5 font-mono text-2xs uppercase tracking-mark text-muted-foreground",
				children: "BMS · QM-001 G"
			}) : null]
		})]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,background-color,box-shadow,transform,opacity] duration-150 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 tap-scale focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:opacity-90",
			secondary: "bg-secondary text-secondary-foreground hover:bg-accent",
			outline: "border border-border bg-transparent hover:bg-accent",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			destructive: "bg-destructive text-primary-foreground hover:opacity-90",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-10 px-4",
			sm: "h-8 rounded-sm px-3 text-xs",
			lg: "h-11 px-5",
			icon: "size-10"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Sheet = Dialog$1;
var SheetPortal = DialogPortal$1;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-background/70", className),
	...props
}));
SheetOverlay.displayName = DialogOverlay$1.displayName;
var SheetContent = import_react.forwardRef(({ className, children, side = "right", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed z-50 flex flex-col bg-card border-border shadow-lift", side === "right" && "inset-y-0 right-0 h-full w-full max-w-xl border-l", side === "left" && "inset-y-0 left-0 h-full w-full max-w-xs border-r", side === "bottom" && "inset-x-0 bottom-0 max-h-[85dvh] rounded-t-xl border-t", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm text-muted-foreground hover:text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
SheetContent.displayName = DialogContent$1.displayName;
function SheetHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("border-b border-border px-6 py-5 pr-12", className),
		...props
	});
}
function SheetTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: cn("font-display text-lg font-semibold", className),
		...props
	});
}
function SheetDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: cn("mt-1 text-sm text-muted-foreground", className),
		...props
	});
}
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
	className: cn("flex min-h-28 w-full rounded-md border border-input bg-secondary px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
	ref,
	...props
}));
Textarea.displayName = "Textarea";
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var askQualityAssistant = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("51ad1319a40a6c5a224a9ee5f1f8e8421ceb5f1650bd0bbe8c063ff004624321"));
var documents = [
	{
		id: "qm-001",
		number: "QM-001",
		title: "Quality Manual",
		type: "manual",
		rev: "G",
		date: "2026-09-03",
		owner: "Quality Manager",
		purpose: "Level I document of the Skyryse QMS. Describes the approach and responsibility assigned for each applicable requirement of AS9100D and 14 CFR 21.308. It does not restate the procedures beneath it.",
		scope: "The entire business system through which Skyryse designs, develops, produces and certifies SkyOS and performs planned post-delivery activities. Applies to all personnel, externally provided processes, products and services, and all articles produced under an FAA production approval.",
		stageIds: [
			"s1",
			"s2",
			"s3",
			"s4",
			"s5",
			"s6",
			"s7",
			"s8",
			"s9"
		],
		relatedIds: ["p-500", "p-750"],
		as9100: [
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10"
		],
		cfr: [
			"21.137",
			"21.307",
			"21.308"
		],
		tools: ["SolidWorks PDM"],
		records: ["This manual", "Management review records"],
		sections: [{
			heading: "How to use this manual",
			paragraphs: [
				"QM-001 is Level I. It names the procedure that carries each requirement. Open the procedure, not this manual, for how the work is done.",
				"Figure 2 is the nine-stage product lifecycle. Each stage has one owner, defined inputs and defined outputs. Support processes act across all stages.",
				"Appendix A maps every AS9100D clause and every 14 CFR 21.137 element to the document that satisfies it."
			]
		}],
		pdmPath: "QMS / Level I / QM-001 Rev G"
	},
	{
		id: "p-500",
		number: "P-500",
		title: "Leadership Responsibility",
		type: "procedure",
		rev: "C",
		date: "2026-03-31",
		owner: "CEO / Quality Manager",
		purpose: "Defines leadership commitment, management review, and the Quality Manager's authority as Management Representative.",
		scope: "Top management, Quality Manager, stage owners.",
		stageIds: [],
		relatedIds: [
			"p-920",
			"p-1000",
			"p-610"
		],
		as9100: ["5", "9.3"],
		cfr: [],
		tools: ["SolidWorks PDM", "Jira"],
		records: ["Management review minutes", "Action items under P-1000"],
		jiraType: "Corrective Action",
		sections: [{
			heading: "What leadership actually does",
			paragraphs: ["The CEO approves the Quality Policy and this QMS. The Quality Manager is Management Representative, OASIS point of contact, and has unrestricted access to management to resolve quality issues.", "Management review is not a slide show. It reviews stage metrics, customer feedback, supplier performance, audit results, risks, and the need for change."],
			steps: [
				"Quality Manager issues the management review pack from live BMS metrics.",
				"Stage owners speak to misses and dormant objectives — dormant is not a miss.",
				"Actions are raised in Jira under P-1000 and tracked to closure.",
				"QMS changes that could affect the system are recorded here before they are made (QM-001 §10.3)."
			]
		}],
		pdmPath: "QMS / Level II / P-500"
	},
	{
		id: "p-610",
		number: "P-610",
		title: "Risk Management and Human Factors",
		type: "procedure",
		rev: "B",
		date: "2026-03-31",
		owner: "Quality Manager",
		purpose: "SWOT and process analysis, operational risk within stages, human factors, and product-safety hazard assessment.",
		scope: "All stages. Operational risk is also addressed in the procedure governing each stage.",
		stageIds: ["s1", "s2"],
		relatedIds: [
			"p-820",
			"p-830",
			"p-500"
		],
		as9100: [
			"6.1",
			"8.1.1",
			"8.1.3"
		],
		cfr: [],
		tools: ["SolidWorks PDM", "Jira"],
		records: [
			"Risk registers",
			"SWOT",
			"Human factors assessments"
		],
		jiraType: "Corrective Action",
		sections: [{
			heading: "When to raise a risk",
			paragraphs: ["Contract review without a risk record is a Stage 1 miss. Product-safety hazards are design inputs in Stage 2, not a later inspection.", "Climate change has been assessed as not currently relevant to the QMS (QM-001 Table 26) and is re-reviewed at management review."],
			steps: [
				"Identify the risk at the stage where it appears — do not wait for audit.",
				"Score likelihood and effect on product safety, conformity and delivery.",
				"Put the mitigation in the governing procedure or in a Jira action.",
				"Human factors that can affect conformity (fatigue, handover, lighting, ESD) are in scope."
			]
		}],
		pdmPath: "QMS / Level II / P-610"
	},
	{
		id: "p-714",
		number: "P-714",
		title: "Electrostatic Discharge Control",
		type: "procedure",
		rev: "B",
		date: "2025-11-12",
		owner: "VP of Operations",
		purpose: "Protect ESD-sensitive SkyOS electronics from damage during handling, assembly, test, storage and shipment.",
		scope: "Manufacturing, flight-test hangar, receiving, shipping. Applies whenever an electronic LRU is open or unpackaged.",
		stageIds: [
			"s5",
			"s6",
			"s8"
		],
		relatedIds: ["p-850", "p-851"],
		as9100: ["8.5.1", "8.5.4"],
		cfr: ["21.137(d)", "21.137(j)"],
		tools: ["NetSuite"],
		records: ["ESD station logs", "Wrist-strap checks"],
		jiraType: "Internal Discrepancy",
		sections: [{
			heading: "Shop-floor rule",
			paragraphs: ["If the article is open, ESD controls are in force. There is no 'just walking it across the aisle' exception."],
			steps: [
				"Check the wrist strap and station at the start of the shift. Record it.",
				"Use ESD-safe packaging for any move, including inside the building.",
				"A failed station check stops work on ESD-sensitive articles until it is restored."
			]
		}],
		pdmPath: "QMS / Level II / P-714"
	},
	{
		id: "p-715",
		number: "P-715",
		title: "Monitoring and Measuring Resources",
		type: "procedure",
		rev: "C",
		date: "2026-01-20",
		owner: "Quality Manager",
		purpose: "Control of inspection, measuring and test equipment, including traceability of calibration standards to a standard acceptable to the FAA.",
		scope: "All calibrated equipment used to accept product or to establish conformity.",
		stageIds: [
			"s3",
			"s5",
			"s6",
			"s7"
		],
		relatedIds: ["p-850", "p-870"],
		as9100: ["7.1.5"],
		cfr: ["21.137(f)"],
		tools: ["SolidWorks PDM"],
		records: ["Calibration certificates", "Out-of-tolerance investigations"],
		jiraType: "Corrective Action",
		sections: [{
			heading: "Out of calibration",
			paragraphs: ["Equipment found out of calibration triggers a review of the validity of previous measurements and of the articles accepted on the basis of them (QM-001 §11.1)."],
			steps: [
				"Quarantine the equipment. Do not use it.",
				"Identify articles accepted since the last good calibration.",
				"Raise a Jira CA. Assess whether any article is a quality escape.",
				"Recall or re-inspect as directed by Quality."
			]
		}],
		pdmPath: "QMS / Level II / P-715"
	},
	{
		id: "p-720",
		number: "P-720",
		title: "Competence, Training and Awareness",
		type: "procedure",
		rev: "D",
		date: "2026-03-31",
		owner: "VP of People and Culture",
		purpose: "Determine competence, close gaps, evaluate effectiveness, and retain evidence. Deliver QMS awareness within 90 days of employment.",
		scope: "All personnel whose work affects QMS performance, without exception for length of service.",
		stageIds: [
			"s1",
			"s2",
			"s3",
			"s4",
			"s5",
			"s6",
			"s7",
			"s8",
			"s9"
		],
		relatedIds: ["p-500"],
		as9100: ["7.2", "7.3"],
		cfr: [],
		tools: ["UKG"],
		records: [
			"Training records",
			"Authorizations",
			"Awareness attendance"
		],
		jiraType: "Document Change",
		sections: [{
			heading: "Authorizations that matter",
			paragraphs: ["Inspection and test personnel are qualified for the inspections they perform. 8130-3 is signed only by P-860 authorized individuals. MRB disposition is signed only by P-870 authorized individuals."],
			steps: [
				"Hiring manager identifies the competence required from the job description in UKG.",
				"Quality confirms inspection, MRB and release authorizations before the person does that work.",
				"Awareness training (policy, objectives, product safety, ethical behavior, implications of not conforming) within 90 days.",
				"Evidence stays in UKG. No competence record, no authorization."
			]
		}],
		pdmPath: "QMS / Level II / P-720"
	},
	{
		id: "p-750",
		number: "P-750",
		title: "Control of Documented Information",
		type: "procedure",
		rev: "E",
		date: "2026-09-03",
		owner: "Quality Manager",
		purpose: "Create, update, release, retain and dispose of QMS documented information. PDM is the system of record.",
		scope: "Levels I–IV. Templates and TR- training material are not controlled QMS documents and meet no AS9100D or Part 21 requirement on their own.",
		stageIds: ["s2"],
		relatedIds: ["p-812", "qm-001"],
		as9100: ["7.5"],
		cfr: ["21.137(b)", "21.137(k)"],
		tools: ["SolidWorks PDM"],
		records: [
			"Master document list",
			"Approval routing",
			"Retention matrix"
		],
		jiraType: "Document Change",
		sections: [{
			heading: "The rule",
			paragraphs: ["If it is not released in PDM, it is not the procedure. Working copies, chat screenshots and email attachments are not QMS documents.", "QMS documented information is reviewed during regular use and internal audits. Results are reported at management review. Two-year review cycle for QMS documented information (Rev G)."],
			steps: [
				"Draft in PDM, never in a side folder.",
				"Route for approval. The owner on the document is the approver of record.",
				"Obsolete revisions are withdrawn so they cannot be used.",
				"Raise a Document Change ticket in Jira to start a revision."
			]
		}],
		pdmPath: "QMS / Level II / P-750"
	},
	{
		id: "p-812",
		number: "P-812",
		title: "Configuration Management",
		type: "procedure",
		rev: "D",
		date: "2026-06-18",
		owner: "VP of Engineering",
		purpose: "Identify, control, account for and verify the configuration of SkyOS design data, software and articles.",
		scope: "Product Development, Realization Planning, Certification, and any change that affects fit, form, function or certification basis.",
		stageIds: [
			"s2",
			"s3",
			"s7"
		],
		relatedIds: [
			"p-830",
			"p-750",
			"p-850"
		],
		as9100: ["8.1.2"],
		cfr: ["21.137(a)"],
		tools: [
			"SolidWorks PDM",
			"Git",
			"Polarion"
		],
		records: [
			"Change records",
			"Configuration baselines",
			"Git tags"
		],
		jiraType: "Document Change",
		sections: [{
			heading: "Release is a configuration event",
			paragraphs: ["A design release without an approved change record is a miss of the Stage 2 metric. Software in Git is a configuration item and is tagged to match PDM."],
			steps: [
				"Identify the configuration item (drawing, software load, MWI, ATP).",
				"Raise the change. Impact on certification, safety, suppliers and work in process is mandatory.",
				"Approve, release in PDM, tag in Git if software.",
				"Notify the next stage. Certification must see design data released for approval."
			]
		}],
		pdmPath: "QMS / Level II / P-812"
	},
	{
		id: "p-814",
		number: "P-814",
		title: "Counterfeit Prevention",
		type: "procedure",
		rev: "B",
		date: "2025-09-04",
		owner: "VP of Operations",
		purpose: "Prevent counterfeit or suspect counterfeit parts from entering SkyOS product.",
		scope: "Purchasing, receiving, and any electronic, electrical or raw-material part that could be counterfeited.",
		stageIds: ["s4"],
		relatedIds: ["p-840", "p-870"],
		as9100: ["8.1.4"],
		cfr: ["21.137(c)"],
		tools: ["NetSuite", "Jira"],
		records: ["Supplier eligibility", "Suspect counterfeit reports"],
		jiraType: "Supplier Ticket",
		sections: [{
			heading: "No gray market",
			paragraphs: ["Electronic parts are purchased from the original manufacturer or authorized distributors on the ASL. A cheaper unauthorized source is not a savings; it is a counterfeit risk."],
			steps: [
				"Confirm the supplier is authorized for that commodity before the PO is placed.",
				"Receiving inspects for evidence of counterfeit (remarking, residual coating, wrong date code).",
				"Suspect counterfeit is an NCR, segregated, and reported. It is never returned to the supplier in a way that lets it re-enter the supply chain."
			]
		}],
		pdmPath: "QMS / Level II / P-814"
	},
	{
		id: "p-820",
		number: "P-820",
		title: "Customer Related Processes",
		type: "procedure",
		rev: "C",
		date: "2026-04-11",
		owner: "VP of Sales",
		purpose: "Contract review, customer requirement determination and flow-down, customer communication, and in-service feedback.",
		scope: "Business Planning and Post Delivery. Customer satisfaction is monitored at management review.",
		stageIds: ["s1", "s9"],
		relatedIds: [
			"p-610",
			"p-830",
			"p-870"
		],
		as9100: ["8.2", "8.5.5"],
		cfr: ["21.137(m)"],
		tools: [
			"SolidWorks PDM",
			"Jira",
			"NetSuite"
		],
		records: [
			"Contract reviews",
			"Flow-down records",
			"Customer feedback"
		],
		jiraType: "Data Requirement",
		sections: [{
			heading: "Nothing is accepted unreviewed",
			paragraphs: ["The Stage 1 metric is binary: every proposal and order has a recorded contract review, or it is a miss. Special requirements, statutory and regulatory requirements are in the review, not assumed."],
			steps: [
				"Determine requirements, including those not stated by the customer but necessary.",
				"Review before commitment. Record residual risk under P-610.",
				"Flow down into Polarion and, later, into PO quality clauses.",
				"After delivery, customer feedback and RMAs return here and to Stage 2."
			]
		}],
		pdmPath: "QMS / Level II / P-820"
	},
	{
		id: "p-830",
		number: "P-830",
		title: "Design and Development",
		type: "procedure",
		rev: "D",
		date: "2026-07-02",
		owner: "VP of Engineering",
		purpose: "Plan, design, verify, validate and release SkyOS hardware and software, including product-safety requirements.",
		scope: "Product Development, Realization Planning, and Aircraft Integration and Flight Test. In-service data is a design input.",
		stageIds: [
			"s2",
			"s3",
			"s6",
			"s9"
		],
		relatedIds: [
			"p-812",
			"p-750",
			"p-610"
		],
		as9100: ["8.3", "8.1.3"],
		cfr: ["21.137(a)"],
		tools: [
			"Polarion",
			"Git",
			"SolidWorks PDM",
			"Jira"
		],
		records: [
			"Design plans",
			"Reviews",
			"V&V records",
			"Flight test reports"
		],
		jiraType: "Data Requirement",
		sections: [{
			heading: "Safety is a design input",
			paragraphs: ["Product safety requirements are traced to verification evidence. Features whose variation affects safety become critical items or key characteristics in Stage 3.", "Flight test findings and in-service data return to this procedure. They are not optional reading."],
			steps: [
				"Plan the design, reviews and methods of compliance.",
				"Hold requirements in Polarion. Software in Git is configuration-controlled.",
				"Verify and validate before release. Incomplete V&V is not a release.",
				"Release through P-812. Hand design data to Certification for approval."
			]
		}],
		pdmPath: "QMS / Level II / P-830"
	},
	{
		id: "p-840",
		number: "P-840",
		title: "Supply Chain Management",
		type: "procedure",
		rev: "D",
		date: "2026-05-22",
		owner: "VP of Operations",
		purpose: "Supplier approval, purchase orders, receiving, source inspection and first article. Skyryse remains responsible for supplier conformity.",
		scope: "All externally provided processes, products and services, including customer-defined sources.",
		stageIds: ["s4"],
		relatedIds: [
			"p-814",
			"p-852",
			"p-870"
		],
		as9100: ["8.4"],
		cfr: ["21.137(c)"],
		tools: ["NetSuite", "Jira"],
		records: [
			"ASL",
			"POs",
			"Receiving inspection",
			"FAIRs"
		],
		jiraType: "Supplier Ticket",
		sections: [{
			heading: "We own supplier quality",
			paragraphs: ["Customer-defined sources are not a free pass. Lot acceptance ≥ 90% and on-time delivery ≥ 70% (90% by 31 Dec 2027) are Stage 4 metrics."],
			steps: [
				"Approve the supplier onto the ASL before the first PO.",
				"Flow quality clauses, right of access, and FAI requirements on the PO.",
				"Receive and inspect. Hold as Undetermined until accepted.",
				"Trend escapes and late lots. Raise supplier tickets and, if needed, CAPA."
			]
		}],
		pdmPath: "QMS / Level II / P-840"
	},
	{
		id: "p-850",
		number: "P-850",
		title: "Control of Production and Service Provision",
		type: "procedure",
		rev: "E",
		date: "2026-08-14",
		owner: "VP of Operations",
		purpose: "Work order execution, process control, inspection, test, preservation, and production process verification. Defines conformity status.",
		scope: "Manufacturing, Aircraft Integration, Certification support, and rate Production.",
		stageIds: [
			"s3",
			"s5",
			"s6",
			"s7",
			"s8"
		],
		relatedIds: [
			"p-852",
			"p-851",
			"p-714",
			"p-860"
		],
		as9100: [
			"8.5.1",
			"8.5.1.3",
			"8.6"
		],
		cfr: [
			"21.137(d)",
			"21.137(e)",
			"21.137(g)"
		],
		tools: [
			"NetSuite",
			"Jira",
			"SolidWorks PDM"
		],
		records: [
			"Work order packages",
			"Inspection records",
			"ATRs",
			"Conformity records"
		],
		jiraType: "Work Order",
		sections: [{
			heading: "Conformity status",
			paragraphs: ["Quality Assurance assigns status per this procedure: Undetermined, Conformable, Not Conformable, Fully Conformed or TSOA. An article without identifiable status is treated as awaiting inspection."],
			steps: [
				"Release the work order against the released configuration only.",
				"Kit accepted, traceable material. Build to the MWI.",
				"Inspect at planned points. Stamp the traveler.",
				"Acceptance test, then support part and test set-up conformity for Stage 7."
			]
		}],
		pdmPath: "QMS / Level II / P-850"
	},
	{
		id: "p-851",
		number: "P-851",
		title: "FOD and 6S Control",
		type: "procedure",
		rev: "B",
		date: "2025-12-09",
		owner: "VP of Operations",
		purpose: "Prevent foreign object debris or damage, and maintain 6S in areas where product is built, tested, installed or packed.",
		scope: "Shop, hangar, stores, shipping.",
		stageIds: [
			"s5",
			"s6",
			"s8"
		],
		relatedIds: ["p-850", "p-714"],
		as9100: ["8.5.1", "8.5.4"],
		cfr: ["21.137(d)", "21.137(j)"],
		tools: ["Jira"],
		records: ["FOD walks", "6S audits"],
		jiraType: "Internal Discrepancy",
		sections: [{
			heading: "FOD is a product-safety issue",
			paragraphs: ["A lost fastener in a flight-control LRU is not a housekeeping miss. Stop work if FOD is uncontrolled."],
			steps: [
				"6S the station before the job and at the end of the shift.",
				"Account for tools and consumables that enter the article.",
				"Raise an NCR for FOD found in or on product."
			]
		}],
		pdmPath: "QMS / Level II / P-851"
	},
	{
		id: "p-852",
		number: "P-852",
		title: "Identification and Traceability",
		type: "procedure",
		rev: "C",
		date: "2026-04-28",
		owner: "VP of Operations",
		purpose: "Identify articles, maintain traceability to the approved design, and keep inspection and test status visible.",
		scope: "From receiving through delivery and return.",
		stageIds: [
			"s4",
			"s5",
			"s6",
			"s8"
		],
		relatedIds: ["p-850", "p-860"],
		as9100: ["8.5.2"],
		cfr: ["21.137(g)", "45.15"],
		tools: ["NetSuite", "Jira"],
		records: [
			"Serial records",
			"Traveler stamps",
			"As-installed configuration"
		],
		jiraType: "Internal Discrepancy",
		sections: [{
			heading: "If you cannot point to the record, it is not identified",
			paragraphs: ["Serial numbers, lot numbers and configuration identifiers travel with the article. Critical components are marked per 14 CFR 45.15 when required."],
			steps: [
				"Apply identification at receiving or at manufacture, as the item master requires.",
				"Maintain inspection and test status on the traveler or electronic equivalent.",
				"Record as-installed serials at aircraft installation."
			]
		}],
		pdmPath: "QMS / Level II / P-852"
	},
	{
		id: "p-853",
		number: "P-853",
		title: "Property Belonging to Customers or External Providers",
		type: "procedure",
		rev: "A",
		date: "2025-08-19",
		owner: "VP of Operations",
		purpose: "Identify, verify, protect and safeguard customer and supplier property while it is under Skyryse control.",
		scope: "Production and post-delivery. Includes intellectual property and tooling.",
		stageIds: ["s8"],
		relatedIds: ["p-850", "p-820"],
		as9100: ["8.5.3"],
		cfr: [],
		tools: ["NetSuite"],
		records: ["Property logs", "Loss/damage reports"],
		jiraType: "Internal Discrepancy",
		sections: [{
			heading: "It is not ours",
			paragraphs: ["Customer and supplier property is identified as such and is not mixed with Skyryse stock. Loss, damage or unsuitability is reported to the owner."],
			steps: [
				"Identify on receipt. Photograph condition if it arrives damaged.",
				"Store and handle to the same preservation standard as Skyryse product.",
				"Report issues to the owner in writing. Raise a Jira record."
			]
		}],
		pdmPath: "QMS / Level II / P-853"
	},
	{
		id: "p-860",
		number: "P-860",
		title: "FAA Release Documents",
		type: "procedure",
		rev: "B",
		date: "2026-06-01",
		owner: "VP of Product Integrity",
		purpose: "Issue Certificates of Conformance and FAA Form 8130-3 for articles produced under Skyryse production approval, including 21.303 replacement and modification articles.",
		scope: "Production. Only authorized individuals issue authorized release documents.",
		stageIds: ["s8"],
		relatedIds: ["p-850", "p-852"],
		as9100: ["8.6"],
		cfr: ["21.137(o)", "21.303"],
		tools: ["SolidWorks PDM", "NetSuite"],
		records: [
			"8130-3",
			"C of C",
			"Authorization list"
		],
		jiraType: "Work Order",
		sections: [{
			heading: "The signature is the product",
			paragraphs: ["An 8130-3 signed by someone not on the P-860 authorization list is not a release document. Never sign for a colleague. Never back-date."],
			steps: [
				"Confirm the article is Fully Conformed to the released configuration.",
				"Complete the form. Serial, configuration, and approved data must match.",
				"Sign. File in PDM and with the shipper."
			]
		}],
		pdmPath: "QMS / Level II / P-860"
	},
	{
		id: "p-870",
		number: "P-870",
		title: "Control of Nonconforming Outputs",
		type: "procedure",
		rev: "D",
		date: "2026-08-20",
		owner: "VP of Product Integrity",
		purpose: "Identify, segregate, disposition and notify. Includes MRB authority and quality-escape handling.",
		scope: "Any nonconforming process, product or article, including those discovered after delivery.",
		stageIds: [
			"s4",
			"s5",
			"s7",
			"s9"
		],
		relatedIds: [
			"p-1000",
			"p-850",
			"p-840"
		],
		as9100: ["8.7", "10.2"],
		cfr: ["21.137(h)", "21.137(n)"],
		tools: ["Jira"],
		records: [
			"NCR",
			"MRB dispositions",
			"Escape notifications"
		],
		jiraType: "Internal Discrepancy",
		sections: [{
			heading: "Do not use it. Do not hide it.",
			paragraphs: ["A nonconforming article is identified, segregated and dispositioned by MRB. Disposition is made only by individuals authorized under this procedure. Scrap is positively controlled until rendered unusable.", "A quality escape — nonconforming product released from the quality system — is notified to affected customers within 48–72 hours of discovery, and to the FAA where applicable (QM-001 §11.4)."],
			steps: [
				"Stop. Identify and segregate. Tag the article.",
				"Open an Internal Discrepancy in Jira. Do not keep a side log.",
				"MRB dispositions: rework, repair, use-as-is, return, or scrap. Use-as-is and repair that affect the approved design require authorized approval.",
				"Product-safety nonconformities escalate to the Safety Review Board and the VP of Product Integrity."
			]
		}],
		pdmPath: "QMS / Level II / P-870"
	},
	{
		id: "p-920",
		number: "P-920",
		title: "Internal Audits",
		type: "procedure",
		rev: "C",
		date: "2026-02-14",
		owner: "Quality Manager",
		purpose: "Plan, conduct and document internal audits covering every AS9100D clause and every 14 CFR 21.137 element across the audit cycle.",
		scope: "The QMS, including suppliers where they perform Skyryse processes.",
		stageIds: [],
		relatedIds: ["p-500", "p-1000"],
		as9100: ["9.2"],
		cfr: ["21.137(l)"],
		tools: ["Jira", "SolidWorks PDM"],
		records: [
			"Audit program",
			"Audit reports",
			"Findings"
		],
		jiraType: "Audit Finding",
		sections: [{
			heading: "Audits measure the system, not the stage metric",
			paragraphs: ["Internal audits measure conformity of the QMS itself. Stage metrics measure process performance. Both are reviewed at management review. The QMS metric is 100% of planned audits performed."],
			steps: [
				"Follow the annual program. Independence: auditors do not audit their own work.",
				"Sample records in PDM, NetSuite and Jira — the systems of record, not slides.",
				"Report findings to the manager who will fix them. Raise CAPA under P-1000.",
				"Close on evidence of effectiveness, not on a promise."
			]
		}],
		pdmPath: "QMS / Level II / P-920"
	},
	{
		id: "p-1000",
		number: "P-1000",
		title: "Continual Improvement",
		type: "procedure",
		rev: "C",
		date: "2026-08-20",
		owner: "Quality Manager",
		purpose: "Corrective action, preventive action and continual improvement, including actions raised when a quality objective is missed.",
		scope: "All stages. A target missed for three consecutive months, or on the twelve-month average, raises a corrective action (QM-001 §10.2).",
		stageIds: ["s9"],
		relatedIds: [
			"p-870",
			"p-920",
			"p-500"
		],
		as9100: ["10.2", "10.3"],
		cfr: ["21.137(i)", "21.137(n)"],
		tools: ["Jira"],
		records: ["CAPA records", "Effectiveness checks"],
		jiraType: "Corrective Action",
		sections: [{
			heading: "Containment is not closure",
			paragraphs: ["Root cause is not 'operator error' without the process cause behind it. Close only after verification of effectiveness. CAPA closed by the committed date is a QMS metric (≥ 90%)."],
			steps: [
				"Contain. Then find the cause. Use 5-why or a fault tree that names a process, not a person.",
				"Correct the cause. Extend the correction to similar articles and processes.",
				"Verify effectiveness on a defined sample or period.",
				"Stage 5 FPY has been under 90% long enough to require CA-26-007. Treat it as live work, not a dashboard color."
			]
		}],
		pdmPath: "QMS / Level II / P-1000"
	}
];
var sopSeed = [
	{
		id: "sop-820-001",
		number: "SOP-820-001",
		title: "Market Study Record",
		rev: "A",
		date: "2025-10-02",
		owner: "VP of Sales",
		purpose: "Record market, competitor and in-service inputs before a proposal.",
		scope: "Stage 1.",
		stageIds: ["s1"],
		parentId: "p-820",
		relatedIds: ["f-820-001"],
		as9100: ["8.2"],
		cfr: [],
		tools: ["SolidWorks PDM"],
		records: ["Market study"],
		jiraType: "Data Requirement",
		pdmPath: "QMS / Level III / SOP-820-001",
		how: [
			"Open the program folder in PDM.",
			"Attach sources and the conclusion.",
			"Link it on F-820-001."
		]
	},
	{
		id: "sop-820-002",
		number: "SOP-820-002",
		title: "Opportunity Evaluation",
		rev: "A",
		date: "2025-10-02",
		owner: "VP of Sales",
		purpose: "Evaluate capability before a proposal is issued.",
		scope: "Stage 1.",
		stageIds: ["s1"],
		parentId: "p-820",
		relatedIds: ["p-610"],
		as9100: ["8.2.3"],
		cfr: [],
		tools: ["SolidWorks PDM"],
		records: ["Evaluation"],
		jiraType: "Data Requirement",
		pdmPath: "QMS / Level III / SOP-820-002",
		how: [
			"Check capacity, certification basis and ASL.",
			"Log risks under P-610.",
			"Do not propose a date production cannot keep."
		]
	},
	{
		id: "sop-820-003",
		number: "SOP-820-003",
		title: "Contract Review",
		rev: "B",
		date: "2026-04-11",
		owner: "VP of Sales",
		purpose: "Perform and record contract review before acceptance.",
		scope: "Every proposal and order.",
		stageIds: ["s1"],
		parentId: "p-820",
		relatedIds: ["f-820-002"],
		as9100: ["8.2.3"],
		cfr: [],
		tools: ["SolidWorks PDM"],
		records: ["F-820-002"],
		jiraType: "Work Order",
		pdmPath: "QMS / Level III / SOP-820-003",
		how: [
			"Walk statutory, regulatory and special requirements.",
			"Record residual risk.",
			"File the signed review in PDM before anyone says yes."
		]
	},
	{
		id: "sop-820-004",
		number: "SOP-820-004",
		title: "Requirement Flow Down",
		rev: "A",
		date: "2026-04-11",
		owner: "VP of Sales",
		purpose: "Flow accepted requirements into Polarion and the approved program.",
		scope: "Stage 1 to Stage 2 hand-off.",
		stageIds: ["s1"],
		parentId: "p-820",
		relatedIds: ["p-830"],
		as9100: ["8.2.2"],
		cfr: [],
		tools: ["Polarion", "SolidWorks PDM"],
		records: ["Flow-down set"],
		jiraType: "Data Requirement",
		pdmPath: "QMS / Level III / SOP-820-004",
		how: [
			"Create or update the Polarion specification.",
			"Mark requirements that will become PO clauses.",
			"Hand the approved program to Engineering."
		]
	},
	{
		id: "sop-820-005",
		number: "SOP-820-005",
		title: "In-service Feedback and RMA",
		rev: "A",
		date: "2026-04-11",
		owner: "VP of Operations",
		purpose: "Capture in-service data and process returned material.",
		scope: "Stage 9.",
		stageIds: ["s9"],
		parentId: "p-820",
		relatedIds: ["f-820-004"],
		as9100: ["8.5.5"],
		cfr: ["21.137(m)"],
		tools: ["Jira", "NetSuite"],
		records: ["RMA"],
		jiraType: "Supplier Ticket",
		pdmPath: "QMS / Level III / SOP-820-005",
		how: [
			"Open RMA and Jira before the article returns.",
			"Quarantine returned articles.",
			"Feed design-affecting data to Polarion."
		]
	},
	{
		id: "sop-830-001",
		number: "SOP-830-001",
		title: "Design and Development Planning",
		rev: "B",
		date: "2026-07-02",
		owner: "VP of Engineering",
		purpose: "Plan reviews, V&V and certification hand-off.",
		scope: "Stage 2.",
		stageIds: ["s2"],
		parentId: "p-830",
		relatedIds: ["f-830-001"],
		as9100: ["8.3.2"],
		cfr: ["21.137(a)"],
		tools: ["Polarion", "SolidWorks PDM"],
		records: ["Design plan"],
		jiraType: "Data Requirement",
		pdmPath: "QMS / Level III / SOP-830-001",
		how: [
			"Complete F-830-001.",
			"Include product safety as an input.",
			"Identify Git-controlled software items."
		]
	},
	{
		id: "sop-830-002",
		number: "SOP-830-002",
		title: "Requirements Management in Polarion",
		rev: "B",
		date: "2026-07-02",
		owner: "VP of Engineering",
		purpose: "Hold and trace the requirement set.",
		scope: "Stage 2.",
		stageIds: ["s2"],
		parentId: "p-830",
		relatedIds: ["p-812"],
		as9100: ["8.3.3"],
		cfr: ["21.137(a)"],
		tools: ["Polarion"],
		records: ["Trace matrix"],
		jiraType: "Data Requirement",
		pdmPath: "QMS / Level III / SOP-830-002",
		how: [
			"Import the Stage 1 set.",
			"Trace safety requirements to verification.",
			"Do not design to an unreleased requirement."
		]
	},
	{
		id: "sop-830-003",
		number: "SOP-830-003",
		title: "Design Verification and Validation",
		rev: "B",
		date: "2026-07-02",
		owner: "VP of Engineering",
		purpose: "Close V&V before design release.",
		scope: "Stage 2 and Stage 6 findings.",
		stageIds: ["s2", "s6"],
		parentId: "p-830",
		relatedIds: ["f-830-002"],
		as9100: ["8.3.4"],
		cfr: ["21.137(a)"],
		tools: ["Polarion", "Git"],
		records: ["V&V records"],
		jiraType: "Work Order",
		pdmPath: "QMS / Level III / SOP-830-003",
		how: [
			"Close Polarion verification items.",
			"Incorporate Stage 6 and Stage 9 findings.",
			"Hold a review if V&V is incomplete."
		]
	},
	{
		id: "sop-830-004",
		number: "SOP-830-004",
		title: "Flight Test Execution",
		rev: "A",
		date: "2026-09-03",
		owner: "VP of Engineering",
		purpose: "Execute the approved flight test plan and return findings.",
		scope: "Stage 6.",
		stageIds: ["s6"],
		parentId: "p-830",
		relatedIds: ["f-830-003"],
		as9100: ["8.5.1", "8.6"],
		cfr: ["21.137(e)(1)"],
		tools: ["Jira", "Polarion"],
		records: ["Flight test report"],
		jiraType: "Internal Discrepancy",
		pdmPath: "QMS / Level III / SOP-830-004",
		how: [
			"Zero airworthiness discrepancies at flight release.",
			"Log findings in Jira and Polarion.",
			"File the report in PDM."
		]
	},
	{
		id: "sop-812-001",
		number: "SOP-812-001",
		title: "Design Data Release",
		rev: "B",
		date: "2026-06-18",
		owner: "VP of Engineering",
		purpose: "Release design data under configuration control.",
		scope: "Stage 2.",
		stageIds: ["s2"],
		parentId: "p-812",
		relatedIds: ["f-812-001"],
		as9100: ["8.1.2"],
		cfr: ["21.137(a)"],
		tools: ["SolidWorks PDM", "Git"],
		records: ["Change record"],
		jiraType: "Document Change",
		pdmPath: "QMS / Level III / SOP-812-001",
		how: [
			"Route F-812-001 in PDM.",
			"Tag Git to match the configuration item.",
			"Notify Certification."
		]
	},
	{
		id: "sop-812-002",
		number: "SOP-812-002",
		title: "BOM Release and Make/Buy",
		rev: "A",
		date: "2026-06-18",
		owner: "VP of Engineering",
		purpose: "Release the BOM and decide make versus buy.",
		scope: "Stage 3.",
		stageIds: ["s3"],
		parentId: "p-812",
		relatedIds: ["f-812-002"],
		as9100: ["8.1.2"],
		cfr: ["21.137(a)"],
		tools: ["SolidWorks PDM", "NetSuite"],
		records: ["BOM"],
		jiraType: "Document Change",
		pdmPath: "QMS / Level III / SOP-812-002",
		how: [
			"Match the released baseline.",
			"Buy items require an ASL supplier.",
			"Keep critical items under configuration control."
		]
	},
	{
		id: "sop-840-001",
		number: "SOP-840-001",
		title: "Supplier Approval",
		rev: "B",
		date: "2026-05-22",
		owner: "VP of Operations",
		purpose: "Qualify a supplier onto the ASL.",
		scope: "Stage 4.",
		stageIds: ["s4"],
		parentId: "p-840",
		relatedIds: ["f-840-001"],
		as9100: ["8.4.1"],
		cfr: ["21.137(c)"],
		tools: ["NetSuite", "Jira"],
		records: ["ASL file"],
		jiraType: "Supplier Ticket",
		pdmPath: "QMS / Level III / SOP-840-001",
		how: [
			"Collect quality system evidence.",
			"Perform the approval per P-840.",
			"Add to ASL only after Quality concurrence."
		]
	},
	{
		id: "sop-840-002",
		number: "SOP-840-002",
		title: "Purchase Order Quality Clauses",
		rev: "B",
		date: "2026-05-22",
		owner: "VP of Operations",
		purpose: "Flow quality, access, FAI and counterfeit clauses.",
		scope: "Every PO.",
		stageIds: ["s4"],
		parentId: "p-840",
		relatedIds: ["f-840-002", "p-814"],
		as9100: ["8.4.3"],
		cfr: ["21.137(c)"],
		tools: ["NetSuite"],
		records: ["PO"],
		jiraType: "Supplier Ticket",
		pdmPath: "QMS / Level III / SOP-840-002",
		how: [
			"Use the standard clause set.",
			"Do not strip clauses to hurry a buy.",
			"Include AS9102 when required."
		]
	},
	{
		id: "sop-840-003",
		number: "SOP-840-003",
		title: "Source Inspection",
		rev: "A",
		date: "2026-05-22",
		owner: "VP of Operations",
		purpose: "Inspect at source when the PO or risk requires it.",
		scope: "Stage 4.",
		stageIds: ["s4"],
		parentId: "p-840",
		relatedIds: ["f-840-003"],
		as9100: ["8.4.2"],
		cfr: ["21.137(c)"],
		tools: ["Jira"],
		records: ["Source inspection record"],
		jiraType: "Supplier Ticket",
		pdmPath: "QMS / Level III / SOP-840-003",
		how: [
			"Schedule from the supplier board.",
			"Record against the PO line.",
			"Right of access includes FAA and customers."
		]
	},
	{
		id: "sop-840-004",
		number: "SOP-840-004",
		title: "Receiving Inspection",
		rev: "B",
		date: "2026-05-22",
		owner: "VP of Operations",
		purpose: "Accept, identify and make traceable incoming material.",
		scope: "Stage 4.",
		stageIds: ["s4"],
		parentId: "p-840",
		relatedIds: ["f-840-004", "p-852"],
		as9100: ["8.4.2"],
		cfr: ["21.137(c)"],
		tools: ["NetSuite", "Jira"],
		records: ["Receiving record"],
		jiraType: "Internal Discrepancy",
		pdmPath: "QMS / Level III / SOP-840-004",
		how: [
			"Hold as Undetermined.",
			"Inspect to the PO and approved data.",
			"NCR any nonconformance in Jira."
		]
	},
	{
		id: "sop-850-001",
		number: "SOP-850-001",
		title: "Work Order Release and Kitting",
		rev: "C",
		date: "2026-08-14",
		owner: "VP of Operations",
		purpose: "Release work orders and kit accepted stock.",
		scope: "Stages 3, 5, 8.",
		stageIds: [
			"s3",
			"s5",
			"s8"
		],
		parentId: "p-850",
		relatedIds: ["f-850-001"],
		as9100: ["8.5.1"],
		cfr: ["21.137(d)"],
		tools: ["NetSuite", "Jira"],
		records: ["Traveler"],
		jiraType: "Work Order",
		pdmPath: "QMS / Level III / SOP-850-001",
		how: [
			"Match MWI to the released baseline.",
			"Do not kit Not Conformable material.",
			"The traveler is the status record."
		]
	},
	{
		id: "sop-850-002",
		number: "SOP-850-002",
		title: "Assembly",
		rev: "B",
		date: "2026-08-14",
		owner: "VP of Operations",
		purpose: "Build to the master work instruction under ESD and FOD control.",
		scope: "Stage 5.",
		stageIds: ["s5"],
		parentId: "p-850",
		relatedIds: ["p-714", "p-851"],
		as9100: ["8.5.1"],
		cfr: ["21.137(d)"],
		tools: ["NetSuite", "Jira"],
		records: ["Traveler"],
		jiraType: "Work Order",
		pdmPath: "QMS / Level III / SOP-850-002",
		how: [
			"ESD checks at shift start.",
			"Stop for uncontrolled FOD.",
			"MWI deviations are NCRs."
		]
	},
	{
		id: "sop-850-003",
		number: "SOP-850-003",
		title: "In-Process Inspection",
		rev: "B",
		date: "2026-08-14",
		owner: "VP of Operations",
		purpose: "Inspect at planned points and record status.",
		scope: "Stage 5. Drives the FPY metric.",
		stageIds: ["s5"],
		parentId: "p-850",
		relatedIds: ["f-850-002"],
		as9100: ["8.5.1"],
		cfr: ["21.137(e)", "21.137(g)"],
		tools: ["Jira", "NetSuite"],
		records: ["Inspection record"],
		jiraType: "Internal Discrepancy",
		pdmPath: "QMS / Level III / SOP-850-003",
		how: [
			"Stamp the traveler.",
			"Failed KC is an NCR.",
			"Do not continue past a failed inspection."
		]
	},
	{
		id: "sop-850-004",
		number: "SOP-850-004",
		title: "Acceptance Testing",
		rev: "B",
		date: "2026-08-14",
		owner: "VP of Operations",
		purpose: "Run the released ATP and record results.",
		scope: "Stage 5.",
		stageIds: ["s5"],
		parentId: "p-850",
		relatedIds: ["f-850-003"],
		as9100: ["8.5.1"],
		cfr: ["21.137(e)"],
		tools: ["Jira", "SolidWorks PDM"],
		records: ["ATR"],
		jiraType: "Work Order",
		pdmPath: "QMS / Level III / SOP-850-004",
		how: [
			"Use the ATP that matches configuration.",
			"Equipment in calibration.",
			"Results support Stage 7 conformity."
		]
	},
	{
		id: "sop-850-005",
		number: "SOP-850-005",
		title: "Production Process Verification",
		rev: "B",
		date: "2026-08-14",
		owner: "VP of Operations",
		purpose: "Verify the production process, including AS9102 FAI and KC inspection planning.",
		scope: "Stages 3, 4, 5, 8. Named in Appendix A for AS9100D 8.5.1.3.",
		stageIds: [
			"s3",
			"s4",
			"s5",
			"s8"
		],
		parentId: "p-850",
		relatedIds: ["f-840-005", "f-850-002"],
		as9100: ["8.5.1.3"],
		cfr: ["21.137(e)"],
		tools: ["Jira", "SolidWorks PDM"],
		records: ["FAIR", "Inspection plan"],
		jiraType: "Work Order",
		pdmPath: "QMS / Level III / SOP-850-005",
		how: [
			"Complete AS9102 Forms 1–3.",
			"Every design KC is on the inspection plan.",
			"Do not kit until the FAIR is accepted."
		]
	},
	{
		id: "sop-850-006",
		number: "SOP-850-006",
		title: "Preservation, Packaging and Shipping",
		rev: "A",
		date: "2026-08-14",
		owner: "VP of Operations",
		purpose: "Preserve conformity through handling, storage, pack and ship.",
		scope: "Stages 5 and 8.",
		stageIds: ["s5", "s8"],
		parentId: "p-850",
		relatedIds: ["f-850-007", "p-851"],
		as9100: ["8.5.4"],
		cfr: ["21.137(j)"],
		tools: ["NetSuite"],
		records: ["Pack records", "Shipper"],
		jiraType: "Work Order",
		pdmPath: "QMS / Level III / SOP-850-006",
		how: [
			"ESD packaging for electronic LRUs.",
			"Pack to the customer spec.",
			"Shipper matches 8130-3 and the order."
		]
	},
	{
		id: "sop-850-007",
		number: "SOP-850-007",
		title: "Aircraft Installation",
		rev: "A",
		date: "2026-09-03",
		owner: "VP of Engineering",
		purpose: "Install accepted LRUs to the approved installation configuration.",
		scope: "Stage 6.",
		stageIds: ["s6"],
		parentId: "p-850",
		relatedIds: ["f-850-004", "p-852"],
		as9100: ["8.5.1"],
		cfr: ["21.137(e)(1)"],
		tools: ["Jira", "NetSuite"],
		records: ["As-installed configuration"],
		jiraType: "Work Order",
		pdmPath: "QMS / Level III / SOP-850-007",
		how: [
			"Status must be Fully Conformed or TSOA.",
			"Record serials.",
			"Do not fly an unrecorded configuration."
		]
	},
	{
		id: "sop-850-008",
		number: "SOP-850-008",
		title: "Conformity Inspection",
		rev: "A",
		date: "2026-09-03",
		owner: "VP of Product Integrity",
		purpose: "Part, test set-up and final conformity determination.",
		scope: "Stage 7.",
		stageIds: ["s7"],
		parentId: "p-850",
		relatedIds: ["f-850-005", "f-850-006"],
		as9100: ["8.6"],
		cfr: ["21.137(e)"],
		tools: ["SolidWorks PDM", "Jira"],
		records: ["Conformity records"],
		jiraType: "Work Order",
		pdmPath: "QMS / Level III / SOP-850-008",
		how: [
			"Inspect to released data, not a redline.",
			"Assign P-850 status.",
			"Only the verified configuration goes to rate production."
		]
	},
	{
		id: "sop-860-001",
		number: "SOP-860-001",
		title: "Issuing FAA Form 8130-3",
		rev: "A",
		date: "2026-06-01",
		owner: "VP of Product Integrity",
		purpose: "Complete and sign authorized release documents.",
		scope: "Stage 8. Authorized signatories only.",
		stageIds: ["s8"],
		parentId: "p-860",
		relatedIds: ["f-860-001"],
		as9100: ["8.6"],
		cfr: ["21.137(o)", "21.303"],
		tools: ["SolidWorks PDM", "NetSuite"],
		records: ["8130-3"],
		jiraType: "Work Order",
		pdmPath: "QMS / Level III / SOP-860-001",
		how: [
			"Confirm Fully Conformed.",
			"Serial and approved data match.",
			"Sign only if you are on the P-860 list."
		]
	},
	{
		id: "sop-870-001",
		number: "SOP-870-001",
		title: "Nonconformance Identification",
		rev: "B",
		date: "2026-08-20",
		owner: "Quality Manager",
		purpose: "Identify, tag and segregate nonconforming articles.",
		scope: "All stages.",
		stageIds: [
			"s4",
			"s5",
			"s7",
			"s9"
		],
		parentId: "p-870",
		relatedIds: ["f-870-001"],
		as9100: ["8.7"],
		cfr: ["21.137(h)"],
		tools: ["Jira"],
		records: ["NCR"],
		jiraType: "Internal Discrepancy",
		pdmPath: "QMS / Level III / SOP-870-001",
		how: [
			"Stop and tag.",
			"Open Internal Discrepancy in Jira.",
			"Segregate from accepted stock."
		]
	},
	{
		id: "sop-870-002",
		number: "SOP-870-002",
		title: "Material Review Board",
		rev: "B",
		date: "2026-08-20",
		owner: "VP of Product Integrity",
		purpose: "Disposition nonconforming articles.",
		scope: "Authorized MRB members only.",
		stageIds: ["s5", "s7"],
		parentId: "p-870",
		relatedIds: ["f-870-002"],
		as9100: ["8.7"],
		cfr: ["21.137(h)"],
		tools: ["Jira"],
		records: ["MRB disposition"],
		jiraType: "Internal Discrepancy",
		pdmPath: "QMS / Level III / SOP-870-002",
		how: [
			"Rework, repair, use-as-is, return or scrap.",
			"Use-as-is / repair affecting approved design needs authorized approval.",
			"Scrap is rendered unusable."
		]
	},
	{
		id: "sop-870-003",
		number: "SOP-870-003",
		title: "Quality Escape Notification",
		rev: "A",
		date: "2026-09-03",
		owner: "Quality Manager",
		purpose: "Notify customers and the FAA of a quality escape within 48–72 hours.",
		scope: "Stage 9 and any discovery after release.",
		stageIds: ["s9"],
		parentId: "p-870",
		relatedIds: ["f-870-003"],
		as9100: ["10.2"],
		cfr: ["21.137(n)"],
		tools: ["Jira"],
		records: ["Notification"],
		jiraType: "Corrective Action",
		pdmPath: "QMS / Level III / SOP-870-003",
		how: [
			"Identify serials, customers, FAA applicability.",
			"Notify Quality Manager and VP of Product Integrity now.",
			"Customer in 48–72 hours. Then CAPA."
		]
	},
	{
		id: "sop-1000-001",
		number: "SOP-1000-001",
		title: "Corrective Action",
		rev: "B",
		date: "2026-08-20",
		owner: "Quality Manager",
		purpose: "Cause analysis, correction and effectiveness check.",
		scope: "All stages. Missed objectives under QM-001 §10.2.",
		stageIds: ["s9"],
		parentId: "p-1000",
		relatedIds: ["f-1000-001"],
		as9100: ["10.2", "10.3"],
		cfr: ["21.137(i)"],
		tools: ["Jira"],
		records: ["CAPA"],
		jiraType: "Corrective Action",
		pdmPath: "QMS / Level III / SOP-1000-001",
		how: [
			"Contain, then cause.",
			"Correct and extend to similar product.",
			"Verify effectiveness. Do not close on containment."
		]
	}
];
var formSeed = [
	{
		id: "f-820-001",
		number: "F-820-001",
		title: "Opportunity Record",
		rev: "B",
		date: "2026-04-11",
		owner: "VP of Sales",
		purpose: "Capture the opportunity, study and proposal decision.",
		scope: "Stage 1.",
		stageIds: ["s1"],
		parentId: "p-820",
		relatedIds: ["sop-820-001"],
		as9100: ["8.2"],
		cfr: [],
		tools: ["SolidWorks PDM"],
		records: ["Opportunity record"],
		jiraType: "Data Requirement",
		pdmPath: "QMS / Level IV / F-820-001",
		how: [
			"Complete before the proposal is sent.",
			"Attach the market study.",
			"File in the program folder."
		]
	},
	{
		id: "f-820-002",
		number: "F-820-002",
		title: "Contract Review Record",
		rev: "C",
		date: "2026-04-11",
		owner: "VP of Sales",
		purpose: "Evidence of contract review before acceptance.",
		scope: "Every order.",
		stageIds: ["s1"],
		parentId: "p-820",
		relatedIds: ["sop-820-003"],
		as9100: ["8.2.3"],
		cfr: [],
		tools: ["SolidWorks PDM"],
		records: ["Contract review"],
		jiraType: "Work Order",
		pdmPath: "QMS / Level IV / F-820-002",
		how: [
			"Walk every requirement line.",
			"Sign before acceptance.",
			"This form is the Stage 1 metric source."
		]
	},
	{
		id: "f-820-003",
		number: "F-820-003",
		title: "Requirement Flow-Down Checklist",
		rev: "A",
		date: "2026-04-11",
		owner: "VP of Sales",
		purpose: "Checklist for flowing requirements into Polarion.",
		scope: "Stage 1.",
		stageIds: ["s1"],
		parentId: "p-820",
		relatedIds: ["sop-820-004"],
		as9100: ["8.2.2"],
		cfr: [],
		tools: ["Polarion"],
		records: ["Flow-down"],
		jiraType: "Data Requirement",
		pdmPath: "QMS / Level IV / F-820-003",
		how: [
			"Mark each requirement as flowed.",
			"Identify PO clause candidates.",
			"Attach the Polarion link."
		]
	},
	{
		id: "f-820-004",
		number: "F-820-004",
		title: "Return Material Authorization",
		rev: "A",
		date: "2026-04-11",
		owner: "VP of Operations",
		purpose: "Authorize and record returned material.",
		scope: "Stage 9.",
		stageIds: ["s9"],
		parentId: "p-820",
		relatedIds: ["sop-820-005"],
		as9100: ["8.5.5"],
		cfr: ["21.137(m)"],
		tools: ["NetSuite", "Jira"],
		records: ["RMA"],
		jiraType: "Supplier Ticket",
		pdmPath: "QMS / Level IV / F-820-004",
		how: [
			"Open before the article ships back.",
			"Quarantine on arrival.",
			"Link the Jira record."
		]
	},
	{
		id: "f-830-001",
		number: "F-830-001",
		title: "Design and Development Plan",
		rev: "B",
		date: "2026-07-02",
		owner: "VP of Engineering",
		purpose: "Plan the design, reviews and V&V.",
		scope: "Stage 2.",
		stageIds: ["s2"],
		parentId: "p-830",
		relatedIds: ["sop-830-001"],
		as9100: ["8.3.2"],
		cfr: ["21.137(a)"],
		tools: ["Polarion", "SolidWorks PDM"],
		records: ["Design plan"],
		jiraType: "Data Requirement",
		pdmPath: "QMS / Level IV / F-830-001",
		how: [
			"Complete before design work starts.",
			"Include safety inputs and Git items.",
			"Revise when the plan changes."
		]
	},
	{
		id: "f-830-002",
		number: "F-830-002",
		title: "Design Review Record",
		rev: "B",
		date: "2026-07-02",
		owner: "VP of Engineering",
		purpose: "Record design reviews and open actions.",
		scope: "Stage 2.",
		stageIds: ["s2"],
		parentId: "p-830",
		relatedIds: ["sop-830-003"],
		as9100: ["8.3.4"],
		cfr: ["21.137(a)"],
		tools: ["Polarion", "Jira"],
		records: ["Review minutes"],
		jiraType: "Data Requirement",
		pdmPath: "QMS / Level IV / F-830-002",
		how: [
			"Record attendees, evidence reviewed, actions.",
			"Do not release with open blocking actions.",
			"File in PDM."
		]
	},
	{
		id: "f-830-003",
		number: "F-830-003",
		title: "Flight Test Report",
		rev: "A",
		date: "2026-09-03",
		owner: "VP of Engineering",
		purpose: "Report flight test results and findings.",
		scope: "Stage 6.",
		stageIds: ["s6"],
		parentId: "p-830",
		relatedIds: ["sop-830-004"],
		as9100: ["8.6"],
		cfr: ["21.137(e)(1)"],
		tools: ["Jira", "Polarion"],
		records: ["Flight test report"],
		jiraType: "Internal Discrepancy",
		pdmPath: "QMS / Level IV / F-830-003",
		how: [
			"Attach the as-installed configuration.",
			"List discrepancies and airworthiness effect.",
			"Return findings to Stage 2."
		]
	},
	{
		id: "f-812-001",
		number: "F-812-001",
		title: "Configuration Change Record",
		rev: "B",
		date: "2026-06-18",
		owner: "VP of Engineering",
		purpose: "Approve a configuration change and release.",
		scope: "Stages 2, 3, 7.",
		stageIds: [
			"s2",
			"s3",
			"s7"
		],
		parentId: "p-812",
		relatedIds: ["sop-812-001"],
		as9100: ["8.1.2"],
		cfr: ["21.137(a)"],
		tools: ["SolidWorks PDM", "Git"],
		records: ["Change record"],
		jiraType: "Document Change",
		pdmPath: "QMS / Level IV / F-812-001",
		how: [
			"Impact on certification, safety, WIP and suppliers.",
			"Approve before release.",
			"This form is the Stage 2 metric source."
		]
	},
	{
		id: "f-812-002",
		number: "F-812-002",
		title: "BOM Release Record",
		rev: "A",
		date: "2026-06-18",
		owner: "VP of Engineering",
		purpose: "Release the BOM and make/buy.",
		scope: "Stage 3.",
		stageIds: ["s3"],
		parentId: "p-812",
		relatedIds: ["sop-812-002"],
		as9100: ["8.1.2"],
		cfr: ["21.137(a)"],
		tools: ["SolidWorks PDM", "NetSuite"],
		records: ["BOM release"],
		jiraType: "Document Change",
		pdmPath: "QMS / Level IV / F-812-002",
		how: [
			"Attach the baseline identifier.",
			"List make/buy and ASL supplier.",
			"Release in PDM and NetSuite together."
		]
	},
	{
		id: "f-840-001",
		number: "F-840-001",
		title: "Supplier Approval Record",
		rev: "B",
		date: "2026-05-22",
		owner: "VP of Operations",
		purpose: "Qualify a supplier onto the ASL.",
		scope: "Stage 4.",
		stageIds: ["s4"],
		parentId: "p-840",
		relatedIds: ["sop-840-001"],
		as9100: ["8.4.1"],
		cfr: ["21.137(c)"],
		tools: ["NetSuite"],
		records: ["ASL file"],
		jiraType: "Supplier Ticket",
		pdmPath: "QMS / Level IV / F-840-001",
		how: [
			"Attach quality system evidence.",
			"Quality concurs before ASL add.",
			"Re-approve on the interval in P-840."
		]
	},
	{
		id: "f-840-002",
		number: "F-840-002",
		title: "PO Quality Clause Set",
		rev: "B",
		date: "2026-05-22",
		owner: "VP of Operations",
		purpose: "Standard clauses flowed down on every PO.",
		scope: "Stage 4.",
		stageIds: ["s4"],
		parentId: "p-840",
		relatedIds: ["sop-840-002"],
		as9100: ["8.4.3"],
		cfr: ["21.137(c)"],
		tools: ["NetSuite"],
		records: ["PO"],
		jiraType: "Supplier Ticket",
		pdmPath: "QMS / Level IV / F-840-002",
		how: [
			"Do not edit clauses without Quality.",
			"Include FAI and right of access.",
			"Counterfeit clause is mandatory for electronics."
		]
	},
	{
		id: "f-840-003",
		number: "F-840-003",
		title: "Source Inspection Record",
		rev: "A",
		date: "2026-05-22",
		owner: "VP of Operations",
		purpose: "Record source inspection results.",
		scope: "Stage 4.",
		stageIds: ["s4"],
		parentId: "p-840",
		relatedIds: ["sop-840-003"],
		as9100: ["8.4.2"],
		cfr: ["21.137(c)"],
		tools: ["Jira"],
		records: ["Source inspection"],
		jiraType: "Supplier Ticket",
		pdmPath: "QMS / Level IV / F-840-003",
		how: [
			"Complete at the supplier.",
			"Link to the PO line.",
			"Reject in Jira if it fails."
		]
	},
	{
		id: "f-840-004",
		number: "F-840-004",
		title: "Receiving Inspection Record",
		rev: "B",
		date: "2026-05-22",
		owner: "VP of Operations",
		purpose: "Record receiving inspection and acceptance.",
		scope: "Stage 4. Source of the lot-acceptance metric.",
		stageIds: ["s4"],
		parentId: "p-840",
		relatedIds: ["sop-840-004"],
		as9100: ["8.4.2"],
		cfr: ["21.137(c)"],
		tools: ["NetSuite", "Jira"],
		records: ["Receiving record"],
		jiraType: "Internal Discrepancy",
		pdmPath: "QMS / Level IV / F-840-004",
		how: [
			"Record measurements and lot identity.",
			"Set conformity status.",
			"NCR failures."
		]
	},
	{
		id: "f-840-005",
		number: "F-840-005",
		title: "AS9102 First Article Inspection Report",
		rev: "A",
		date: "2026-05-22",
		owner: "VP of Operations",
		purpose: "AS9102 Forms 1, 2 and 3.",
		scope: "First production, design change, process change.",
		stageIds: ["s4", "s5"],
		parentId: "p-850",
		relatedIds: ["sop-850-005"],
		as9100: ["8.5.1.3"],
		cfr: ["21.137(e)"],
		tools: ["SolidWorks PDM", "Jira"],
		records: ["FAIR"],
		jiraType: "Work Order",
		pdmPath: "QMS / Level IV / F-840-005",
		how: [
			"Complete all three forms.",
			"Balloon the released drawing.",
			"Accept before kitting to WIP."
		]
	},
	{
		id: "f-850-001",
		number: "F-850-001",
		title: "Work Order Traveler",
		rev: "C",
		date: "2026-08-14",
		owner: "VP of Operations",
		purpose: "Work order execution and inspection/test status.",
		scope: "Stages 5 and 8.",
		stageIds: ["s5", "s8"],
		parentId: "p-850",
		relatedIds: ["sop-850-001"],
		as9100: ["8.5.1", "8.5.2"],
		cfr: ["21.137(g)"],
		tools: ["NetSuite"],
		records: ["Traveler"],
		jiraType: "Work Order",
		pdmPath: "QMS / Level IV / F-850-001",
		how: [
			"Print or open from the released WO.",
			"Stamp each operation and inspection.",
			"No stamp means awaiting inspection."
		]
	},
	{
		id: "f-850-002",
		number: "F-850-002",
		title: "Inspection Record / KC Plan",
		rev: "B",
		date: "2026-08-14",
		owner: "VP of Operations",
		purpose: "Inspection plan and in-process results, including key characteristics.",
		scope: "Stages 3 and 5. Source of the Stage 3 metric.",
		stageIds: ["s3", "s5"],
		parentId: "p-850",
		relatedIds: ["sop-850-003", "sop-850-005"],
		as9100: ["8.5.1"],
		cfr: ["21.137(e)"],
		tools: ["SolidWorks PDM", "Jira"],
		records: ["Inspection record"],
		jiraType: "Internal Discrepancy",
		pdmPath: "QMS / Level IV / F-850-002",
		how: [
			"Every design KC is a line.",
			"Record actuals.",
			"Failed KC opens an NCR."
		]
	},
	{
		id: "f-850-003",
		number: "F-850-003",
		title: "Acceptance Test Report",
		rev: "B",
		date: "2026-08-14",
		owner: "VP of Operations",
		purpose: "Record ATP results.",
		scope: "Stage 5.",
		stageIds: ["s5"],
		parentId: "p-850",
		relatedIds: ["sop-850-004"],
		as9100: ["8.5.1"],
		cfr: ["21.137(e)"],
		tools: ["Jira", "SolidWorks PDM"],
		records: ["ATR"],
		jiraType: "Work Order",
		pdmPath: "QMS / Level IV / F-850-003",
		how: [
			"ATP revision matches configuration.",
			"Equipment IDs and cal due dates.",
			"Pass/fail and data attached."
		]
	},
	{
		id: "f-850-004",
		number: "F-850-004",
		title: "As-Installed Configuration Record",
		rev: "A",
		date: "2026-09-03",
		owner: "VP of Engineering",
		purpose: "Record LRU serials as installed on the aircraft.",
		scope: "Stage 6.",
		stageIds: ["s6"],
		parentId: "p-850",
		relatedIds: ["sop-850-007"],
		as9100: ["8.5.2"],
		cfr: ["21.137(e)(1)"],
		tools: ["Jira", "NetSuite"],
		records: ["As-installed"],
		jiraType: "Work Order",
		pdmPath: "QMS / Level IV / F-850-004",
		how: [
			"Serial against station.",
			"Match accepted status.",
			"Attach to the flight test report."
		]
	},
	{
		id: "f-850-005",
		number: "F-850-005",
		title: "Part / Test Set-up Conformity Record",
		rev: "A",
		date: "2026-09-03",
		owner: "VP of Product Integrity",
		purpose: "Record part and test set-up conformity.",
		scope: "Stage 7.",
		stageIds: ["s7"],
		parentId: "p-850",
		relatedIds: ["sop-850-008"],
		as9100: ["8.6"],
		cfr: ["21.137(e)"],
		tools: ["SolidWorks PDM", "Jira"],
		records: ["Conformity"],
		jiraType: "Work Order",
		pdmPath: "QMS / Level IV / F-850-005",
		how: [
			"Released data identifier.",
			"Equipment cal status.",
			"Assign P-850 conformity status."
		]
	},
	{
		id: "f-850-006",
		number: "F-850-006",
		title: "Final Conformity Determination",
		rev: "A",
		date: "2026-09-03",
		owner: "VP of Product Integrity",
		purpose: "Release the verified configuration to production.",
		scope: "Stage 7.",
		stageIds: ["s7"],
		parentId: "p-850",
		relatedIds: ["sop-850-008"],
		as9100: ["8.6"],
		cfr: ["21.137(e)"],
		tools: ["SolidWorks PDM"],
		records: ["Determination"],
		jiraType: "Work Order",
		pdmPath: "QMS / Level IV / F-850-006",
		how: [
			"All part and set-up records closed.",
			"Nonconformances dispositioned.",
			"Sign the verified configuration."
		]
	},
	{
		id: "f-850-007",
		number: "F-850-007",
		title: "Packing and Shipping Record",
		rev: "A",
		date: "2026-08-14",
		owner: "VP of Operations",
		purpose: "Evidence of packaging and shipment against the order.",
		scope: "Stage 8.",
		stageIds: ["s8"],
		parentId: "p-850",
		relatedIds: ["sop-850-006"],
		as9100: ["8.5.4", "8.6"],
		cfr: ["21.137(j)"],
		tools: ["NetSuite"],
		records: ["Shipper"],
		jiraType: "Work Order",
		pdmPath: "QMS / Level IV / F-850-007",
		how: [
			"Customer pack spec.",
			"8130-3 attached.",
			"Promise date vs ship date for the OTD metric."
		]
	},
	{
		id: "f-860-001",
		number: "F-860-001",
		title: "Authorized Release / 8130-3 Packet",
		rev: "A",
		date: "2026-06-01",
		owner: "VP of Product Integrity",
		purpose: "Packet covering C of C and FAA Form 8130-3.",
		scope: "Stage 8. Authorized signatories only.",
		stageIds: ["s8"],
		parentId: "p-860",
		relatedIds: ["sop-860-001"],
		as9100: ["8.6"],
		cfr: ["21.137(o)"],
		tools: ["SolidWorks PDM", "NetSuite"],
		records: ["8130-3"],
		jiraType: "Work Order",
		pdmPath: "QMS / Level IV / F-860-001",
		how: [
			"Fill from the traveler and conformity record.",
			"Sign if authorized.",
			"File with the shipper and in PDM."
		]
	},
	{
		id: "f-870-001",
		number: "F-870-001",
		title: "Nonconformance Record",
		rev: "C",
		date: "2026-08-20",
		owner: "Quality Manager",
		purpose: "Identify the nonconformance. Jira is the system of record; this is the content standard.",
		scope: "All stages.",
		stageIds: [
			"s4",
			"s5",
			"s7",
			"s9"
		],
		parentId: "p-870",
		relatedIds: ["sop-870-001"],
		as9100: ["8.7"],
		cfr: ["21.137(h)"],
		tools: ["Jira"],
		records: ["NCR"],
		jiraType: "Internal Discrepancy",
		pdmPath: "QMS / Level IV / F-870-001",
		how: [
			"What, where, serial, requirement violated.",
			"Immediate containment.",
			"Open the Jira Internal Discrepancy."
		]
	},
	{
		id: "f-870-002",
		number: "F-870-002",
		title: "MRB Disposition",
		rev: "B",
		date: "2026-08-20",
		owner: "VP of Product Integrity",
		purpose: "Record authorized disposition.",
		scope: "MRB members.",
		stageIds: ["s5", "s7"],
		parentId: "p-870",
		relatedIds: ["sop-870-002"],
		as9100: ["8.7"],
		cfr: ["21.137(h)"],
		tools: ["Jira"],
		records: ["Disposition"],
		jiraType: "Internal Discrepancy",
		pdmPath: "QMS / Level IV / F-870-002",
		how: [
			"Choose rework, repair, use-as-is, return, scrap.",
			"Authorized signature.",
			"Scrap rendered unusable."
		]
	},
	{
		id: "f-870-003",
		number: "F-870-003",
		title: "Quality Escape Notification",
		rev: "A",
		date: "2026-09-03",
		owner: "Quality Manager",
		purpose: "Customer and FAA notification content for a quality escape.",
		scope: "48–72 hour window.",
		stageIds: ["s9"],
		parentId: "p-870",
		relatedIds: ["sop-870-003"],
		as9100: ["10.2"],
		cfr: ["21.137(n)"],
		tools: ["Jira"],
		records: ["Notification"],
		jiraType: "Corrective Action",
		pdmPath: "QMS / Level IV / F-870-003",
		how: [
			"Serials, customers, discovery time, containment.",
			"Notify within 48–72 hours.",
			"Attach to the CAPA."
		]
	},
	{
		id: "f-1000-001",
		number: "F-1000-001",
		title: "Corrective Action Record",
		rev: "B",
		date: "2026-08-20",
		owner: "Quality Manager",
		purpose: "Cause, correction and effectiveness check.",
		scope: "All CAPA.",
		stageIds: ["s9"],
		parentId: "p-1000",
		relatedIds: ["sop-1000-001"],
		as9100: ["10.2"],
		cfr: ["21.137(i)"],
		tools: ["Jira"],
		records: ["CAPA"],
		jiraType: "Corrective Action",
		pdmPath: "QMS / Level IV / F-1000-001",
		how: [
			"Cause is a process, not a person.",
			"Committed date is a QMS metric.",
			"Close after effectiveness, not containment."
		]
	}
];
function toDoc(seed, type) {
	const { how, ...rest } = seed;
	return {
		...rest,
		type,
		sections: [{
			heading: "How to complete this",
			paragraphs: [seed.purpose],
			steps: how
		}]
	};
}
var allDocuments = [
	...documents,
	...sopSeed.map((s) => toDoc(s, "sop")),
	...formSeed.map((s) => toDoc(s, "form"))
];
function getDocument(id) {
	return allDocuments.find((d) => d.id === id);
}
function documentsForStage(stageId) {
	return allDocuments.filter((d) => d.stageIds.includes(stageId));
}
function childrenOf(parentId) {
	return allDocuments.filter((d) => d.parentId === parentId);
}
var qmsMetrics = [{
	id: "qms-audits",
	name: "Internal audits performed against the audit plan",
	target: "100% of audits planned",
	targetValue: 100,
	unit: "%",
	frequency: "Annually",
	source: "Internal audit schedule and audit reports",
	current: 75,
	status: "at-risk",
	note: "6 of 8 planned audits complete. Two remain before year end — clause 8.4 and 7.1.5.",
	series: [
		{
			month: "Jan",
			value: 12
		},
		{
			month: "Feb",
			value: 25
		},
		{
			month: "Mar",
			value: 38
		},
		{
			month: "Apr",
			value: 50
		},
		{
			month: "May",
			value: 50
		},
		{
			month: "Jun",
			value: 62
		},
		{
			month: "Jul",
			value: 62
		},
		{
			month: "Aug",
			value: 75
		},
		{
			month: "Sep",
			value: 75
		}
	]
}, {
	id: "qms-capa",
	name: "Audit findings and corrective actions closed by the committed date",
	target: "≥ 90%",
	targetValue: 90,
	unit: "%",
	frequency: "Semi-annually",
	source: "Corrective action records",
	current: 91,
	status: "on-target",
	series: [
		{
			month: "Jan",
			value: 88
		},
		{
			month: "Feb",
			value: 90
		},
		{
			month: "Mar",
			value: 92
		},
		{
			month: "Apr",
			value: 91
		},
		{
			month: "May",
			value: 93
		},
		{
			month: "Jun",
			value: 90
		},
		{
			month: "Jul",
			value: 89
		},
		{
			month: "Aug",
			value: 92
		},
		{
			month: "Sep",
			value: 91
		}
	]
}];
function allMetrics() {
	return [...stages.flatMap((s) => s.metrics), ...qmsMetrics];
}
var capaRecords = [
	{
		id: "ca-26-007",
		type: "CA",
		title: "In-process first pass yield below 90% for three consecutive months",
		status: "in-progress",
		severity: "major",
		stageId: "s5",
		procedureId: "p-1000",
		owner: "VP of Operations",
		opened: "2026-07-08",
		due: "2026-10-08",
		source: "Stage 5 metric · QM-001 §10.2",
		description: "FPY at in-process inspection has been under 90% since March. QM-001 §10.2 requires a corrective action. Containment is 100% inspection of KC-bearing operations. Cause analysis is pointing to torque-sequence variation on actuator install and a lagging MWI revision.",
		jiraKey: "QMS-214"
	},
	{
		id: "ncr-26-018",
		type: "NCR",
		title: "FOD recovered from FCC assembly fixture",
		status: "mrb",
		severity: "major",
		stageId: "s5",
		procedureId: "p-851",
		owner: "Quality Engineer",
		opened: "2026-09-09",
		due: "2026-09-23",
		source: "In-process inspection",
		description: "A 4 mm socket fragment recovered from the flight-control computer assembly fixture during 6S close-out. Article SN FCC-00412 quarantined. Adjacent work orders on the same fixture under review.",
		disposition: "Pending MRB — proposed rework and fixture recertification.",
		jiraKey: "QMS-241"
	},
	{
		id: "ncr-26-014",
		type: "NCR",
		title: "Connector pin plating thickness under minimum — supplier lot",
		status: "open",
		severity: "minor",
		stageId: "s4",
		procedureId: "p-840",
		owner: "Supplier Quality",
		opened: "2026-08-21",
		due: "2026-09-18",
		source: "Receiving inspection",
		description: "Lot 8H-441, circular connector, pin plating below drawing minimum on 3 of 5 samples. Lot held as Not Conformable. Supplier ticket opened for cause and replacement.",
		jiraKey: "QMS-228"
	},
	{
		id: "ncr-26-021",
		type: "NCR",
		title: "Torque sequence deviation on actuator install",
		status: "in-progress",
		severity: "minor",
		stageId: "s5",
		procedureId: "p-850",
		owner: "Manufacturing Lead",
		opened: "2026-09-04",
		due: "2026-09-25",
		source: "In-process inspection",
		description: "Traveler stamp present but torque sequence on MWI-ACT-014 not followed. Linked to CA-26-007. Article reworked to the MWI.",
		jiraKey: "QMS-237"
	},
	{
		id: "ca-26-004",
		type: "CA",
		title: "Torque wrench TW-18 found out of calibration",
		status: "verification",
		severity: "major",
		stageId: "s5",
		procedureId: "p-715",
		owner: "Quality Manager",
		opened: "2026-06-12",
		due: "2026-09-30",
		source: "Calibration recall",
		description: "TW-18 failed as-found calibration high. Articles torqued since last good cal were identified and a sample re-checked. No escape. Effectiveness check in progress.",
		jiraKey: "QMS-188"
	},
	{
		id: "ncr-26-009",
		type: "NCR",
		title: "LRU serial plate does not match traveler",
		status: "closed",
		severity: "minor",
		stageId: "s5",
		procedureId: "p-852",
		owner: "Quality Engineer",
		opened: "2026-05-02",
		due: "2026-05-20",
		source: "Final inspection",
		description: "Serial plate transposed two digits. Plate replaced. Traveler and NetSuite aligned. Cause: print-from-wrong-row. Closed after label process change.",
		disposition: "Rework. Closed 20 May 2026.",
		jiraKey: "QMS-171"
	},
	{
		id: "ncr-26-022",
		type: "NCR",
		title: "Damaged packaging on received harness lot",
		status: "open",
		severity: "minor",
		stageId: "s4",
		procedureId: "p-840",
		owner: "Receiving Inspector",
		opened: "2026-09-11",
		due: "2026-09-25",
		source: "Receiving inspection",
		description: "Outer carton crushed. Inner ESD bags intact. Visual of harnesses in progress before accept or return.",
		jiraKey: "QMS-244"
	},
	{
		id: "dcr-26-011",
		type: "DCR",
		title: "Revise P-850 MWI reference for actuator torque sequence",
		status: "in-progress",
		severity: "minor",
		stageId: "s5",
		procedureId: "p-750",
		owner: "Document Control",
		opened: "2026-09-05",
		due: "2026-09-26",
		source: "CA-26-007",
		description: "MWI-ACT-014 torque sequence illustration does not match the released drawing note. DCR to align the MWI under P-812 / P-750.",
		jiraKey: "QMS-238"
	}
];
var audits = [
	{
		id: "a-26-08",
		title: "Internal — Production and inspection (8.5, 8.6)",
		type: "internal",
		status: "in-progress",
		clause: "AS9100D 8.5 / 8.6 · 21.137(d)(e)(g)",
		area: "Manufacturing and Certification",
		lead: "Quality Engineer",
		date: "2026-09-16",
		findings: 2,
		minors: 2,
		majors: 0,
		notes: "In-process this week. Sample of work orders and travelers. Linked to FPY CAPA."
	},
	{
		id: "a-26-09",
		title: "Internal — Supplier control (8.4)",
		type: "internal",
		status: "planned",
		clause: "AS9100D 8.4 · 21.137(c)",
		area: "Supply Chain",
		lead: "Supplier Quality",
		date: "2026-10-07",
		findings: 0,
		minors: 0,
		majors: 0,
		notes: "Last remaining process audit on the 2026 program besides calibration."
	},
	{
		id: "a-26-10",
		title: "Internal — Measuring resources (7.1.5)",
		type: "internal",
		status: "planned",
		clause: "AS9100D 7.1.5 · 21.137(f)",
		area: "Calibration",
		lead: "Quality Manager",
		date: "2026-11-04",
		findings: 0,
		minors: 0,
		majors: 0,
		notes: "Follow-up to CA-26-004. Completes the 2026 internal program."
	},
	{
		id: "a-26-04",
		title: "Internal — Documented information (7.5)",
		type: "internal",
		status: "closed",
		clause: "AS9100D 7.5 · 21.137(b)(k)",
		area: "Document control",
		lead: "Quality Manager",
		date: "2026-04-16",
		findings: 2,
		minors: 2,
		majors: 0,
		notes: "Two minors: working copy of an SOP on a shared drive; retention hold missing on one FAIR. Both closed."
	},
	{
		id: "a-26-pjr",
		title: "Perry Johnson — AS9100D surveillance",
		type: "registrar",
		status: "planned",
		clause: "AS9100D campus scheme",
		area: "El Segundo",
		lead: "Quality Manager (OASIS PoC)",
		date: "2026-11-18",
		findings: 0,
		minors: 0,
		majors: 0,
		notes: "Certificate remains valid only while surveillance is maintained. Status change notifies customers within two business days (QM-001 §11.4)."
	},
	{
		id: "a-26-faa",
		title: "FAA familiarity — production quality system",
		type: "faa",
		status: "planned",
		clause: "14 CFR 21.137 / 21.308 / 21.310",
		area: "El Segundo production",
		lead: "VP of Product Integrity",
		date: "2026-10-22",
		findings: 0,
		minors: 0,
		majors: 0,
		notes: "Right of access. Walk the nine stages, PDM, Jira NCR board, and 8130-3 authorization list."
	}
];
var integrations = [
	{
		id: "jira",
		name: "Jira",
		system: "Atlassian Jira",
		purpose: "Work order board, Data Requirements List board, internal discrepancy and corrective action records, and supplier external portal tickets.",
		records: [
			"NCR",
			"CAPA",
			"Work orders",
			"DRL items",
			"Supplier tickets",
			"Audit findings"
		],
		stages: [
			"s4",
			"s5",
			"s6",
			"s7",
			"s8",
			"s9"
		],
		defaultUrl: "https://skyryse.atlassian.net",
		howTo: [
			"Create tickets from any process box, procedure, NCR or audit in this BMS — the description is pre-filled from QM-001.",
			"Internal discrepancies and CAPA live on the QMS project. Do not keep a side spreadsheet.",
			"Supplier tickets are the external portal. Receiving NCRs still originate internally, then flow to the supplier."
		],
		jiraBoards: [
			{
				name: "QMS — Discrepancy & CAPA",
				path: "/jira/software/c/projects/QMS/boards"
			},
			{
				name: "Work orders",
				path: "/jira/software/c/projects/WO/boards"
			},
			{
				name: "Data Requirements List",
				path: "/jira/software/c/projects/DRL/boards"
			},
			{
				name: "Supplier portal",
				path: "/jira/software/c/projects/SUP/boards"
			}
		]
	},
	{
		id: "pdm",
		name: "SolidWorks PDM",
		system: "Dassault SolidWorks PDM",
		purpose: "Controlled document repository and approval routing. System of record for released QMS documents and their revisions.",
		records: [
			"QM-001",
			"Procedures",
			"SOPs",
			"Forms",
			"Design data",
			"FAIRs",
			"8130-3 packets"
		],
		stages: [
			"s1",
			"s2",
			"s3",
			"s5",
			"s7",
			"s8"
		],
		defaultUrl: "https://pdm.skyryse.com",
		howTo: [
			"If it is not released in PDM, it is not the procedure.",
			"Each document in this BMS shows its PDM path. Use that path, not a search from memory.",
			"Document changes start as a Jira Document Change, then route in PDM."
		]
	},
	{
		id: "netsuite",
		name: "NetSuite",
		system: "Oracle NetSuite ERP",
		purpose: "Purchase orders, receiving, inventory, kitting and issue to work order.",
		records: [
			"POs",
			"Item masters",
			"Receiving",
			"Inventory",
			"Work orders",
			"Shippers",
			"RMAs"
		],
		stages: [
			"s3",
			"s4",
			"s5",
			"s8",
			"s9"
		],
		defaultUrl: "https://system.netsuite.com",
		howTo: [
			"Item master fields (traceability, inspection, shelf life) are quality records.",
			"Do not kit or issue Not Conformable or Undetermined material.",
			"OTD metrics for suppliers and customers are promise date versus receipt or ship date here."
		]
	},
	{
		id: "polarion",
		name: "Polarion",
		system: "Siemens Polarion",
		purpose: "Requirements and verification management for product development.",
		records: [
			"Requirement set",
			"Trace matrix",
			"Verification items",
			"Flight-test findings"
		],
		stages: [
			"s1",
			"s2",
			"s6"
		],
		defaultUrl: "https://polarion.skyryse.com",
		howTo: [
			"Stage 1 flows the accepted contract into Polarion. Stage 2 designs to that set.",
			"Product safety requirements are traced to verification evidence.",
			"Stage 6 findings return here as design inputs, not as hallway conversation."
		]
	},
	{
		id: "git",
		name: "Git",
		system: "Software configuration management",
		purpose: "Software configuration management and version control for SkyOS loads.",
		records: [
			"Source",
			"Tagged releases",
			"Software configuration items"
		],
		stages: ["s2"],
		defaultUrl: "https://github.com/skyryse",
		howTo: [
			"A software load is a configuration item under P-812.",
			"Tags match the PDM configuration identifier. Untagged commits are not released.",
			"Do not fly or ship a load that is not tagged and released."
		]
	},
	{
		id: "ukg",
		name: "UKG",
		system: "UKG Human Resources",
		purpose: "Human resources system of record. Organizational chart and training records.",
		records: [
			"Org chart",
			"Job descriptions",
			"Training",
			"Awareness attendance",
			"Authorizations"
		],
		stages: [
			"s1",
			"s2",
			"s3",
			"s4",
			"s5",
			"s6",
			"s7",
			"s8",
			"s9"
		],
		defaultUrl: "https://uv.ultipro.com",
		howTo: [
			"Competence evidence lives in UKG. No record, no authorization.",
			"Inspection, MRB and 8130-3 authorizations are confirmed by Quality before the person does that work.",
			"Awareness training within 90 days of employment (P-720)."
		]
	}
];
var guidance = [
	{
		id: "g-escape",
		title: "I found a quality escape",
		audience: "Anyone",
		minutes: 5,
		urgency: "critical",
		relatedIds: [
			"p-870",
			"sop-870-003",
			"f-870-003",
			"p-1000"
		],
		steps: [
			{
				title: "Stop and contain",
				detail: "Identify serial numbers still in house. Hold them. Do not ship."
			},
			{
				title: "Tell Quality now",
				detail: "Notify the Quality Manager and the VP of Product Integrity. Do not wait for a meeting."
			},
			{
				title: "Open the record",
				detail: "Create a Corrective Action ticket using F-870-003 content — serials, customers, discovery time, containment.",
				link: "/capa"
			},
			{
				title: "Notify in 48–72 hours",
				detail: "Affected customers within 48–72 hours of discovery. FAA where applicable (QM-001 §11.4)."
			},
			{
				title: "Then CAPA",
				detail: "Cause, correction, effectiveness under P-1000. Containment is not closure."
			}
		]
	},
	{
		id: "g-ncr",
		title: "How to raise an NCR",
		audience: "Inspectors, technicians, engineers",
		minutes: 8,
		relatedIds: [
			"p-870",
			"sop-870-001",
			"f-870-001"
		],
		steps: [
			{
				title: "Stop using the article",
				detail: "Tag it. Segregate it from accepted stock. An article without status is awaiting inspection, not accepted."
			},
			{
				title: "Write the requirement",
				detail: "What is wrong, against which released drawing or MWI, serial or lot, where it was found."
			},
			{
				title: "Open Internal Discrepancy in Jira",
				detail: "Use the BMS Create ticket action from the process box or from CAPA. Do not keep a side log.",
				link: "/capa"
			},
			{
				title: "MRB dispositions",
				detail: "Rework, repair, use-as-is, return or scrap — authorized individuals only (P-870). Scrap is rendered unusable."
			}
		]
	},
	{
		id: "g-new",
		title: "First 90 days at Skyryse",
		audience: "New employees",
		minutes: 15,
		relatedIds: ["p-720", "qm-001"],
		steps: [
			{
				title: "Read the Quality Policy",
				detail: "Skyryse and its employees are committed to meeting customer and legal requirements in order to achieve customer satisfaction. We will strive to provide quality products on time and continually improve our QMS."
			},
			{
				title: "Know your stage",
				detail: "Find the stage you work in on the process map. Open it. Those procedures apply to you.",
				link: "/"
			},
			{
				title: "Awareness training",
				detail: "Policy, objectives, your contribution to conformity and product safety, implications of not conforming, ethical behavior. Recorded in UKG under P-720."
			},
			{
				title: "Raise concerns without fear of reprisal",
				detail: "Product safety concerns go to your lead, Quality, or the VP of Product Integrity. That is a QMS requirement, not a slogan."
			}
		]
	},
	{
		id: "g-audit",
		title: "How to walk an auditor through a stage",
		audience: "Stage owners and leads",
		minutes: 12,
		relatedIds: ["p-920", "qm-001"],
		steps: [
			{
				title: "Start at Figure 2",
				detail: "Owner, inputs, process, outputs. Do not start at a drawer of paper."
			},
			{
				title: "Name the procedure",
				detail: "QM-001 names the procedure. Open that procedure in PDM — not a working copy."
			},
			{
				title: "Show the record in the system of record",
				detail: "PDM for documents, Jira for NCR/CAPA, NetSuite for PO/WO, Polarion for requirements, UKG for competence."
			},
			{
				title: "Show the metric",
				detail: "The stage metric, its source, and what happens if it is missed (P-1000). Dormant objectives are reported as not yet active — that is allowed."
			}
		]
	},
	{
		id: "g-dcr",
		title: "How to change a procedure",
		audience: "Document owners",
		minutes: 6,
		relatedIds: ["p-750", "p-812"],
		steps: [
			{
				title: "Do not edit a released copy",
				detail: "Working copies on shared drives fail audits. P-750 is the only path."
			},
			{
				title: "Raise a Document Change in Jira",
				detail: "Say what is wrong and which records or processes it affects."
			},
			{
				title: "Draft and route in PDM",
				detail: "The owner on the document approves. Obsolete revisions are withdrawn."
			},
			{
				title: "Two-year review",
				detail: "QMS documented information is reviewed during use, during audit, and on a two-year cycle (Rev G)."
			}
		]
	},
	{
		id: "g-8130",
		title: "Before you sign an 8130-3",
		audience: "Authorized release signatories",
		minutes: 4,
		urgency: "critical",
		relatedIds: [
			"p-860",
			"sop-860-001",
			"f-860-001"
		],
		steps: [
			{
				title: "Are you on the P-860 list?",
				detail: "If not, do not sign. Never sign for a colleague. Never back-date."
			},
			{
				title: "Fully Conformed",
				detail: "The article matches the released and verified configuration. Open NCRs are closed or do not apply."
			},
			{
				title: "Serial, data, shipper",
				detail: "The form, the traveler and the NetSuite order say the same thing."
			},
			{
				title: "File it",
				detail: "PDM and the shipper. This is a quality record."
			}
		]
	},
	{
		id: "g-fai",
		title: "Running an AS9102 first article",
		audience: "Quality and manufacturing",
		minutes: 10,
		relatedIds: [
			"sop-850-005",
			"f-840-005",
			"p-840"
		],
		steps: [
			{
				title: "Right trigger",
				detail: "First production, design change, or process change. Not a courtesy."
			},
			{
				title: "Released drawing",
				detail: "Balloon the released design, not a redline. Forms 1, 2 and 3."
			},
			{
				title: "Accept before kitting",
				detail: "Do not issue the lot to a work order until the FAIR is accepted."
			},
			{
				title: "File in PDM",
				detail: "Link it on the NetSuite item. It is a quality record."
			}
		]
	},
	{
		id: "g-metric",
		title: "What happens when a metric is missed",
		audience: "Stage owners",
		minutes: 5,
		relatedIds: ["p-1000", "p-500"],
		steps: [
			{
				title: "The rule",
				detail: "Missed for three consecutive months, or on the twelve-month average, raises a corrective action under P-1000 (QM-001 §10.2)."
			},
			{
				title: "Dormant is not a miss",
				detail: "Objectives that activate at first flight release or first delivery are reported as not yet active until the stage owner declares them active."
			},
			{
				title: "Baseline periods",
				detail: "Where a target is a baseline (Stage 7), the first three reporting periods after activation are not counted toward the three-month rule."
			},
			{
				title: "Live example",
				detail: "Stage 5 FPY is under 90% — CA-26-007 is the required action.",
				link: "/capa"
			}
		]
	}
];
var complianceMatrix = [
	{
		as9100: "4 Context of the organization",
		cfr: "—",
		documents: ["qm-001"]
	},
	{
		as9100: "5 Leadership",
		cfr: "—",
		documents: ["qm-001", "p-500"]
	},
	{
		as9100: "6.1 Risks and opportunities",
		cfr: "—",
		documents: ["p-610"]
	},
	{
		as9100: "6.2 Quality objectives",
		cfr: "—",
		documents: ["qm-001"]
	},
	{
		as9100: "6.3 Planning of changes",
		cfr: "—",
		documents: ["qm-001"]
	},
	{
		as9100: "7.1.5 Monitoring and measuring resources",
		cfr: "(f) Inspection, measuring, and test equipment",
		documents: ["p-715"]
	},
	{
		as9100: "7.1.6 Organizational knowledge",
		cfr: "—",
		documents: ["qm-001"]
	},
	{
		as9100: "7.2 Competence",
		cfr: "—",
		documents: ["p-720", "qm-001"]
	},
	{
		as9100: "7.3 Awareness",
		cfr: "—",
		documents: ["p-720", "qm-001"]
	},
	{
		as9100: "7.5 Documented information",
		cfr: "(b) Document control · (k) Quality records",
		documents: ["p-750", "qm-001"]
	},
	{
		as9100: "8.1 Operational planning and control",
		cfr: "—",
		documents: ["qm-001"]
	},
	{
		as9100: "8.1.1 Operational risk management",
		cfr: "—",
		documents: ["p-610"]
	},
	{
		as9100: "8.1.2 Configuration management",
		cfr: "(a) Design data control",
		documents: [
			"p-812",
			"p-750",
			"qm-001"
		]
	},
	{
		as9100: "8.1.3 Product safety",
		cfr: "—",
		documents: [
			"qm-001",
			"p-830",
			"p-610",
			"p-812",
			"p-814"
		]
	},
	{
		as9100: "8.1.4 Prevention of counterfeit parts",
		cfr: "—",
		documents: ["p-814", "qm-001"]
	},
	{
		as9100: "8.2 Requirements for products and services",
		cfr: "—",
		documents: ["p-820", "qm-001"]
	},
	{
		as9100: "8.3 Design and development",
		cfr: "(a) Design data control",
		documents: [
			"p-830",
			"p-812",
			"qm-001"
		]
	},
	{
		as9100: "8.4 Externally provided processes",
		cfr: "(c) Supplier control",
		documents: [
			"p-840",
			"p-814",
			"qm-001"
		]
	},
	{
		as9100: "8.5.1 Control of production",
		cfr: "(d) Manufacturing process control · (e) Inspecting and testing",
		documents: ["p-850", "qm-001"]
	},
	{
		as9100: "8.5.1.3 Production process verification",
		cfr: "(e) Inspecting and testing",
		documents: ["p-850", "sop-850-005"]
	},
	{
		as9100: "8.5.2 Identification and traceability",
		cfr: "(g) Inspection and test status",
		documents: ["p-852", "qm-001"]
	},
	{
		as9100: "8.5.3 Property of customers or providers",
		cfr: "—",
		documents: ["p-853", "qm-001"]
	},
	{
		as9100: "8.5.4 Preservation",
		cfr: "(j) Handling and storage",
		documents: [
			"p-852",
			"p-851",
			"qm-001"
		]
	},
	{
		as9100: "8.5.5 Post-delivery activities",
		cfr: "(m) In-service feedback",
		documents: [
			"p-820",
			"p-830",
			"qm-001"
		]
	},
	{
		as9100: "8.5.6 Control of changes",
		cfr: "—",
		documents: [
			"p-850",
			"p-820",
			"qm-001"
		]
	},
	{
		as9100: "8.6 Release of products and services",
		cfr: "(e) Inspecting and testing · (o) Authorized release documents",
		documents: [
			"p-850",
			"p-860",
			"qm-001"
		]
	},
	{
		as9100: "8.7 Control of nonconforming outputs",
		cfr: "(h) Nonconforming product and article control",
		documents: ["p-870", "qm-001"]
	},
	{
		as9100: "9.1 Monitoring and measurement",
		cfr: "—",
		documents: ["qm-001", "p-500"]
	},
	{
		as9100: "9.2 Internal audit",
		cfr: "(l) Internal audits",
		documents: ["p-920"]
	},
	{
		as9100: "9.3 Management review",
		cfr: "—",
		documents: ["p-500"]
	},
	{
		as9100: "10.2 Nonconformity and corrective action",
		cfr: "(i) Corrective and preventive actions · (n) Quality escapes",
		documents: ["p-1000", "p-870"]
	},
	{
		as9100: "10.3 Continual improvement",
		cfr: "—",
		documents: ["p-1000"]
	}
];
var qualityPolicy = "Skyryse and its employees are committed to meeting customer and legal requirements in order to achieve customer satisfaction. We will strive to provide quality products on time and continually improve our Quality Management System.";
var mission = "Skyryse wants to empower anyone to fly anywhere, in any aircraft, safely and as a highly experienced pilot would. SkyOS brings advanced automation to flight controls and flight management systems to achieve unmatched safety and greatly reduce opportunities for human error.";
function searchQms(query) {
	const q = query.trim().toLowerCase();
	if (q.length < 2) return [];
	const hits = [];
	for (const s of stages) {
		if (`${s.number} ${s.name} ${s.shortName} ${s.owner} ${s.intent} ${s.procedureIds.join(" ")}`.toLowerCase().includes(q)) hits.push({
			id: s.id,
			kind: "stage",
			title: `Stage ${s.number} · ${s.name}`,
			subtitle: s.owner,
			href: `/stages/${s.id}`
		});
		for (const p of s.processes) if (`${p.name} ${p.summary} ${p.procedureIds.join(" ")}`.toLowerCase().includes(q)) hits.push({
			id: p.id,
			kind: "process",
			title: p.name,
			subtitle: `Stage ${s.number} · ${s.name}`,
			href: `/stages/${s.id}?process=${p.id}`,
			processId: p.id
		});
	}
	for (const d of allDocuments) if (`${d.number} ${d.title} ${d.purpose} ${d.owner}`.toLowerCase().includes(q)) hits.push({
		id: d.id,
		kind: "document",
		title: `${d.number} ${d.title}`,
		subtitle: `${d.type.toUpperCase()} · Rev ${d.rev}`,
		href: `/documents/${d.id}`
	});
	for (const g of guidance) if (`${g.title} ${g.audience}`.toLowerCase().includes(q)) hits.push({
		id: g.id,
		kind: "guidance",
		title: g.title,
		subtitle: g.audience,
		href: `/guidance#${g.id}`
	});
	for (const c of capaRecords) if (`${c.id} ${c.title} ${c.jiraKey}`.toLowerCase().includes(q)) hits.push({
		id: c.id,
		kind: "capa",
		title: `${c.id.toUpperCase()} · ${c.title}`,
		subtitle: c.jiraKey,
		href: `/capa#${c.id}`
	});
	for (const a of audits) if (`${a.title} ${a.clause} ${a.area}`.toLowerCase().includes(q)) hits.push({
		id: a.id,
		kind: "audit",
		title: a.title,
		subtitle: a.clause,
		href: `/audits#${a.id}`
	});
	for (const i of integrations) if (`${i.name} ${i.purpose}`.toLowerCase().includes(q)) hits.push({
		id: i.id,
		kind: "integration",
		title: i.name,
		subtitle: i.purpose,
		href: `/integrations#${i.id}`
	});
	for (const s of supportProcesses) if (`${s.name} ${s.summary}`.toLowerCase().includes(q)) hits.push({
		id: s.id,
		kind: "support",
		title: s.name,
		subtitle: s.procedureIds.join(", "),
		href: `/documents/${s.procedureIds[0]}`
	});
	return hits.slice(0, 20);
}
function retrieveContext(question) {
	const hits = searchQms(question);
	const extra = question.toLowerCase();
	const bits = [];
	if (hits.length === 0) {
		const fallback = allDocuments.slice(0, 4);
		for (const d of fallback) bits.push(`${d.number} ${d.title}: ${d.purpose}`);
	}
	for (const h of hits.slice(0, 8)) if (h.kind === "stage") {
		const s = stages.find((x) => x.id === h.id);
		if (s) bits.push(`Stage ${s.number} ${s.name} (owner ${s.owner}): ${s.intent} Procedures: ${s.procedureIds.join(", ")}. Inputs: ${s.inputs.join("; ")}. Outputs: ${s.outputs.join("; ")}.`);
	} else if (h.kind === "document") {
		const d = allDocuments.find((x) => x.id === h.id);
		if (d) {
			const steps = d.sections.flatMap((sec) => sec.steps ?? []).slice(0, 6);
			bits.push(`${d.number} ${d.title} (Rev ${d.rev}, owner ${d.owner}): ${d.purpose} Scope: ${d.scope}. Steps: ${steps.join(" | ")}`);
		}
	} else if (h.kind === "process" && h.processId) {
		const found = getProcess(h.processId);
		if (found) bits.push(`Process ${found.process.name} in Stage ${found.stage.number}: ${found.process.summary} How: ${found.process.howTo.join(" | ")}`);
	} else if (h.kind === "guidance") {
		const g = guidance.find((x) => x.id === h.id);
		if (g) bits.push(`Guidance "${g.title}": ${g.steps.map((s) => s.title + " — " + s.detail).join(" | ")}`);
	} else if (h.kind === "capa") {
		const c = capaRecords.find((x) => x.id === h.id);
		if (c) bits.push(`Record ${c.id}: ${c.title}. ${c.description}`);
	}
	if (extra.includes("escape") || extra.includes("48") || extra.includes("notify")) bits.push("Quality escape rule (QM-001 §11.4): notify affected customers within 48–72 hours of discovery; FAA where applicable. Procedure P-870 / SOP-870-003 / F-870-003.");
	if (extra.includes("policy")) bits.push("Quality Policy: Skyryse and its employees are committed to meeting customer and legal requirements in order to achieve customer satisfaction. We will strive to provide quality products on time and continually improve our Quality Management System.");
	return bits.join("\n\n").slice(0, 6e3);
}
var defaultJira = {
	open: false,
	issueType: "Internal Discrepancy",
	summary: "",
	description: "",
	source: "Skyryse BMS"
};
var memoryStorage = {
	getItem: () => null,
	setItem: () => {},
	removeItem: () => {}
};
var useBms = create()(persist((set, get) => ({
	tourDone: false,
	setTourDone: (v) => set({ tourDone: v }),
	chatOpen: false,
	setChatOpen: (v) => set({ chatOpen: v }),
	commandOpen: false,
	setCommandOpen: (v) => set({ commandOpen: v }),
	jiraBaseUrl: "https://skyryse.atlassian.net",
	setJiraBaseUrl: (v) => set({ jiraBaseUrl: v }),
	pdmUrl: "https://pdm.skyryse.com",
	setPdmUrl: (v) => set({ pdmUrl: v }),
	netsuiteUrl: "https://system.netsuite.com",
	setNetsuiteUrl: (v) => set({ netsuiteUrl: v }),
	polarionUrl: "https://polarion.skyryse.com",
	setPolarionUrl: (v) => set({ polarionUrl: v }),
	gitUrl: "https://github.com/skyryse",
	setGitUrl: (v) => set({ gitUrl: v }),
	ukgUrl: "https://uv.ultipro.com",
	setUkgUrl: (v) => set({ ukgUrl: v }),
	jiraModal: defaultJira,
	openJira: (partial) => set({ jiraModal: {
		...defaultJira,
		...partial,
		open: true
	} }),
	closeJira: () => set({ jiraModal: {
		...get().jiraModal,
		open: false
	} }),
	drafts: [],
	addDraft: (draft) => set({ drafts: [{
		...draft,
		id: `draft-${Date.now()}`,
		createdAt: (/* @__PURE__ */ new Date()).toISOString()
	}, ...get().drafts].slice(0, 40) }),
	favorites: [],
	toggleFavorite: (id) => {
		set({ favorites: get().favorites.includes(id) ? get().favorites.filter((x) => x !== id) : [id, ...get().favorites] });
	},
	recent: [],
	pushRecent: (id) => set({ recent: [id, ...get().recent.filter((x) => x !== id)].slice(0, 12) })
}), {
	name: "skyryse-bms",
	storage: createJSONStorage(() => typeof window === "undefined" ? memoryStorage : localStorage),
	partialize: (s) => ({
		tourDone: s.tourDone,
		jiraBaseUrl: s.jiraBaseUrl,
		pdmUrl: s.pdmUrl,
		netsuiteUrl: s.netsuiteUrl,
		polarionUrl: s.polarionUrl,
		gitUrl: s.gitUrl,
		ukgUrl: s.ukgUrl,
		drafts: s.drafts,
		favorites: s.favorites,
		recent: s.recent
	})
}));
var starters = [
	"What do I do if I find a quality escape?",
	"How do I raise an NCR on a failed incoming lot?",
	"Which procedure covers 8130-3 signatures?",
	"Why is Stage 5 first pass yield at risk?",
	"Walk me through contract review before I accept an order."
];
function Assistant() {
	const { chatOpen, setChatOpen } = useBms();
	const [messages, setMessages] = (0, import_react.useState)([]);
	const [input, setInput] = (0, import_react.useState)("");
	const [pending, setPending] = (0, import_react.useState)(false);
	async function send(text) {
		const question = text.trim();
		if (!question || pending) return;
		const userMsg = {
			id: `u-${Date.now()}`,
			role: "user",
			content: question
		};
		setMessages((m) => [...m, userMsg]);
		setInput("");
		setPending(true);
		try {
			const result = await askQualityAssistant({ data: {
				question,
				context: retrieveContext(question)
			} });
			const content = result.ok ? result.text : result.error;
			setMessages((m) => [...m, {
				id: `a-${Date.now()}`,
				role: "assistant",
				content
			}]);
		} catch {
			setMessages((m) => [...m, {
				id: `a-${Date.now()}`,
				role: "assistant",
				content: "The assistant could not be reached. Open the procedure named on the process map, or try again."
			}]);
		} finally {
			setPending(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: () => setChatOpen(true),
		className: "fixed bottom-5 right-5 z-40 flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lift tap-scale",
		"aria-label": "Open quality assistant",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-5" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		open: chatOpen,
		onOpenChange: setChatOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
			className: "w-full max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetTitle, {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 text-primary" }), "Quality assistant"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetDescription, { children: "Answers from QM-001 Rev G, the procedures, and the nine-stage architecture. Not a substitute for the released document in PDM." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-0 flex-1 flex-col",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 space-y-3 overflow-y-auto px-6 py-4",
					children: [messages.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "Ask a real question, or start here:"
						}), starters.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => void send(s),
							className: "block w-full rounded-lg border border-border bg-secondary px-3 py-2 text-left text-sm hover:border-primary/40",
							children: s
						}, s))]
					}) : messages.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: m.role === "user" ? "ml-8 rounded-lg bg-primary/15 px-3 py-2 text-sm" : "mr-4 rounded-lg border border-border bg-secondary px-3 py-2 text-sm leading-relaxed whitespace-pre-wrap",
						children: m.content
					}, m.id)), pending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Looking through the QMS…"
					}) : null]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "border-t border-border p-4",
					onSubmit: (e) => {
						e.preventDefault();
						send(input);
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						value: input,
						onChange: (e) => setInput(e.target.value),
						placeholder: "Ask about a procedure, metric, escape, or audit…",
						rows: 3,
						onKeyDown: (e) => {
							if (e.key === "Enter" && !e.shiftKey) {
								e.preventDefault();
								send(input);
							}
						}
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 flex justify-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							size: "sm",
							disabled: pending || !input.trim(),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-3.5" }), "Send"]
						})
					})]
				})]
			})]
		})
	})] });
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-background/80 data-[state=open]:animate-in data-[state=closed]:animate-out", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border bg-card p-6 shadow-lift", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm text-muted-foreground hover:text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("mb-4 space-y-1", className),
		...props
	});
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: cn("font-display text-lg font-semibold", className),
		...props
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: cn("text-sm text-muted-foreground", className),
		...props
	});
}
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
	type,
	className: cn("flex h-10 w-full rounded-md border border-input bg-secondary px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
	ref,
	...props
}));
Input.displayName = "Input";
var kindLabel = {
	stage: "Stage",
	process: "Process",
	document: "Document",
	guidance: "Guide",
	capa: "CAPA",
	audit: "Audit",
	integration: "System",
	support: "Support"
};
function CommandPalette() {
	const { commandOpen, setCommandOpen, setChatOpen, openJira } = useBms();
	const [q, setQ] = (0, import_react.useState)("");
	const router = useRouter();
	const hits = (0, import_react.useMemo)(() => searchQms(q), [q]);
	(0, import_react.useEffect)(() => {
		function onKey(e) {
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
				e.preventDefault();
				setCommandOpen(!commandOpen);
			}
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "j") {
				e.preventDefault();
				openJira({
					summary: "",
					description: "",
					issueType: "Internal Discrepancy",
					source: "Command palette"
				});
			}
			if ((e.metaKey || e.ctrlKey) && e.key === "/") {
				e.preventDefault();
				setChatOpen(true);
			}
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		commandOpen,
		setCommandOpen,
		setChatOpen,
		openJira
	]);
	function go(href) {
		setCommandOpen(false);
		setQ("");
		router.history.push(href);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: commandOpen,
		onOpenChange: setCommandOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-w-lg p-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "sr-only",
					children: "Search the QMS"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 border-b border-border px-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Command, { className: "size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						autoFocus: true,
						value: q,
						onChange: (e) => setQ(e.target.value),
						placeholder: "Search stages, procedures, SOPs, forms, CAPA…",
						className: "h-12 border-0 bg-transparent px-0 focus-visible:ring-0"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-h-80 overflow-y-auto p-2",
					children: q.length < 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-3 py-6 text-sm text-muted-foreground",
						children: "Type at least two characters. Shortcuts: search, Jira ticket, assistant."
					}) : hits.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-3 py-6 text-sm text-muted-foreground",
						children: "No matches in the QMS."
					}) : hits.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => go(h.href),
						className: "flex w-full items-start gap-3 rounded-md px-3 py-2 text-left hover:bg-accent",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 w-16 shrink-0 font-mono text-2xs uppercase tracking-mark text-primary",
							children: kindLabel[h.kind]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-sm text-foreground",
							children: h.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-xs text-muted-foreground",
							children: h.subtitle
						})] })]
					}, `${h.kind}-${h.id}`))
				})
			]
		})
	});
}
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root$1, {
	ref,
	className: cn("text-sm font-medium text-muted-foreground", className),
	...props
}));
Label.displayName = Root$1.displayName;
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-10 w-full items-center justify-between rounded-md border border-input bg-secondary px-3 text-sm", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 opacity-60" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent$1, {
	ref,
	position,
	className: cn("z-50 min-w-40 overflow-hidden rounded-md border border-border bg-popover text-popover-foreground shadow-lift", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
		className: "p-1",
		children
	})
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex cursor-pointer select-none items-center rounded-sm py-2 pl-8 pr-2 text-sm outline-none data-[highlighted]:bg-accent", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex size-4 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
function jiraCreateUrl(baseUrl, summary) {
	const base = baseUrl.replace(/\/$/, "");
	const params = new URLSearchParams();
	params.set("summary", summary);
	return `${base}/secure/CreateIssue!default.jspa?${params.toString()}`;
}
function jiraBoardUrl(baseUrl, path) {
	return `${baseUrl.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;
}
function formatTicketBody(opts) {
	return [
		`*Type:* ${opts.issueType}`,
		`*Summary:* ${opts.summary}`,
		`*Source:* ${opts.source}`,
		`*Raised from:* Skyryse BMS (QM-001 Rev G)`,
		"",
		opts.description,
		"",
		"---",
		"Follow P-870 for nonconformances, P-1000 for corrective action, P-750 for document changes."
	].join("\n");
}
var types = [
	"Internal Discrepancy",
	"Corrective Action",
	"Document Change",
	"Supplier Ticket",
	"Work Order",
	"Data Requirement",
	"Audit Finding"
];
function JiraDialog() {
	const { jiraModal, closeJira, jiraBaseUrl, addDraft, openJira } = useBms();
	function update(key, value) {
		openJira({
			...jiraModal,
			[key]: value,
			open: true
		});
	}
	const body = formatTicketBody(jiraModal);
	async function copyAndOpen() {
		addDraft({
			issueType: jiraModal.issueType,
			summary: jiraModal.summary,
			description: jiraModal.description,
			source: jiraModal.source
		});
		try {
			await navigator.clipboard.writeText(body);
			toast.success("Ticket copied. Opening Jira to paste.");
		} catch {
			toast.message("Draft saved in the BMS. Paste from the ticket body.");
		}
		window.open(jiraCreateUrl(jiraBaseUrl, jiraModal.summary), "_blank", "noopener,noreferrer");
		closeJira();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: jiraModal.open,
		onOpenChange: (o) => o ? null : closeJira(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-w-xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Create Jira ticket" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Pre-filled from this process. The description is copied, then Jira opens so you can paste." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Issue type" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: jiraModal.issueType,
							onValueChange: (v) => update("issueType", v),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: types.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: t,
								children: t
							}, t)) })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Summary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: jiraModal.summary,
							onChange: (e) => update("summary", e.target.value),
							placeholder: "Short, specific, serial if you have one"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Description" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							value: jiraModal.description,
							onChange: (e) => update("description", e.target.value),
							rows: 7
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs text-muted-foreground",
						children: jiraModal.source
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2 pt-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: copyAndOpen,
							disabled: !jiraModal.summary.trim(),
							children: "Copy and open Jira"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							onClick: () => {
								addDraft({
									issueType: jiraModal.issueType,
									summary: jiraModal.summary,
									description: jiraModal.description,
									source: jiraModal.source
								});
								toast.success("Saved as a local draft.");
								closeJira();
							},
							disabled: !jiraModal.summary.trim(),
							children: "Save draft only"
						})]
					})
				]
			})]
		})
	});
}
var nav = [
	{
		href: "/",
		label: "Process map",
		icon: GitBranch
	},
	{
		href: "/dashboard",
		label: "Dashboard",
		icon: LayoutDashboard
	},
	{
		href: "/documents",
		label: "Documents",
		icon: FileStack
	},
	{
		href: "/manual",
		label: "Quality manual",
		icon: BookOpen
	},
	{
		href: "/capa",
		label: "NCR / CAPA",
		icon: Ticket
	},
	{
		href: "/audits",
		label: "Audits",
		icon: ClipboardCheck
	},
	{
		href: "/compliance",
		label: "Compliance",
		icon: ShieldCheck
	},
	{
		href: "/integrations",
		label: "Systems",
		icon: Activity
	},
	{
		href: "/guidance",
		label: "Guidance",
		icon: LifeBuoy
	}
];
function NavLinks({ onGo }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "flex flex-col gap-0.5",
		children: nav.map((item) => {
			const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
			const Icon = item.icon;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: item.href,
				onClick: onGo,
				className: cn("flex h-10 items-center gap-3 rounded-md px-3 text-sm", active ? "bg-accent text-foreground" : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), item.label]
			}, item.href);
		})
	});
}
function AppShell({ children }) {
	const { setCommandOpen, openJira } = useBms();
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "fixed inset-y-0 left-0 z-30 hidden w-56 flex-col border-r border-border bg-card/80 px-3 py-4 md:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "mb-6 px-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkyryseWordmark, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLinks, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-auto px-3 pt-6 font-mono text-2xs uppercase tracking-mark text-muted-foreground",
						children: "AS9100D · 14 CFR 21"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-20 flex h-14 items-center gap-2 border-b border-border bg-background/90 px-3 backdrop-blur md:ml-56 md:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						className: "md:hidden",
						onClick: () => setMobileOpen(true),
						"aria-label": "Open menu",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "md:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkyryseWordmark, { compact: true })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setCommandOpen(true),
						className: "ml-auto flex h-10 min-w-0 flex-1 items-center gap-2 rounded-md border border-border bg-secondary px-3 text-sm text-muted-foreground md:max-w-sm md:flex-none",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 shrink-0" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate",
								children: "Search procedures, stages, CAPA"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
								className: "ml-auto hidden font-mono text-2xs text-muted-foreground sm:inline",
								children: "⌘K"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						className: "hidden sm:inline-flex",
						onClick: () => openJira({
							issueType: "Internal Discrepancy",
							summary: "",
							description: "",
							source: "Header"
						}),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ticket, { className: "size-4" }), "Jira"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
				open: mobileOpen,
				onOpenChange: setMobileOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
					side: "left",
					className: "w-72 p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-6 mt-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkyryseWordmark, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLinks, { onGo: () => setMobileOpen(false) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "md:ml-56",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-4 py-6 md:px-8 md:py-8",
					children
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandPalette, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JiraDialog, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Assistant, {})
		]
	});
}
var TooltipProvider = Provider;
var TooltipContent = import_react.forwardRef(({ className, sideOffset = 6, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 max-w-xs rounded-md border border-border bg-popover px-3 py-1.5 text-xs text-popover-foreground shadow-lift", className),
	...props
}) }));
TooltipContent.displayName = Content2.displayName;
var styles_default = "/assets/styles-DnsVHgYc.css";
var APP_NAME = "Skyryse BMS";
var Route$11 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "theme-color",
				content: "#070C14"
			},
			{
				name: "description",
				content: "Skyryse Business Management System — interactive QMS aligned to QM-001 Rev G, AS9100D and 14 CFR Part 21."
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Outfit:wght@400;500;600;700&display=swap"
			}
		]
	}),
	component: Root
});
function Root() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TooltipProvider, {
				delayDuration: 250,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
					theme: "dark",
					position: "bottom-left",
					richColors: true
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
var $$splitComponentImporter$10 = () => import("./routes-BnJPMNrA.mjs");
var Route$10 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./audits-Bk6xWjnR.mjs");
var Route$9 = createFileRoute("/audits")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./capa-DyshJFKn.mjs");
var Route$8 = createFileRoute("/capa")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./compliance-Dnm-wvDV.mjs");
var Route$7 = createFileRoute("/compliance")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./dashboard-BXP0goTb.mjs");
var Route$6 = createFileRoute("/dashboard")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./documents-DUNH8Art.mjs");
var Route$5 = createFileRoute("/documents")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./guidance-DYqLPGiP.mjs");
var Route$4 = createFileRoute("/guidance")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./integrations-D1oq1JIs.mjs");
var Route$3 = createFileRoute("/integrations")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./manual-CSkk_USs.mjs");
var Route$2 = createFileRoute("/manual")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./documents._docId-CYfqyFLN.mjs");
var Route$1 = createFileRoute("/documents/$docId")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./stages._stageId-DTU6jMwT.mjs");
var Route = createFileRoute("/stages/$stageId")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$10.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$11
});
var AuditsRoute = Route$9.update({
	id: "/audits",
	path: "/audits",
	getParentRoute: () => Route$11
});
var CapaRoute = Route$8.update({
	id: "/capa",
	path: "/capa",
	getParentRoute: () => Route$11
});
var ComplianceRoute = Route$7.update({
	id: "/compliance",
	path: "/compliance",
	getParentRoute: () => Route$11
});
var DashboardRoute = Route$6.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => Route$11
});
var DocumentsRoute = Route$5.update({
	id: "/documents",
	path: "/documents",
	getParentRoute: () => Route$11
});
var GuidanceRoute = Route$4.update({
	id: "/guidance",
	path: "/guidance",
	getParentRoute: () => Route$11
});
var IntegrationsRoute = Route$3.update({
	id: "/integrations",
	path: "/integrations",
	getParentRoute: () => Route$11
});
var ManualRoute = Route$2.update({
	id: "/manual",
	path: "/manual",
	getParentRoute: () => Route$11
});
var DocumentsDocIdRoute = Route$1.update({
	id: "/$docId",
	path: "/$docId",
	getParentRoute: () => DocumentsRoute
});
var StagesStageIdRoute = Route.update({
	id: "/stages/$stageId",
	path: "/stages/$stageId",
	getParentRoute: () => Route$11
});
var DocumentsRouteChildren = { DocumentsDocIdRoute };
var rootRouteChildren = {
	IndexRoute,
	AuditsRoute,
	CapaRoute,
	ComplianceRoute,
	DashboardRoute,
	DocumentsRoute: DocumentsRoute._addFileChildren(DocumentsRouteChildren),
	GuidanceRoute,
	IntegrationsRoute,
	ManualRoute,
	StagesStageIdRoute
};
var routeTree = Route$11._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { SheetTitle as A, childrenOf as C, SheetContent as D, Sheet as E, supportProcesses as F, cn as I, SkyryseMark as M, getStage as N, SheetDescription as O, stages as P, allDocuments as S, getDocument as T, guidance as _, Label as a, qmsMetrics as b, DialogContent as c, DialogTitle as d, useBms as f, complianceMatrix as g, capaRecords as h, jiraBoardUrl as i, Button as j, SheetHeader as k, DialogDescription as l, audits as m, Route as n, Input as o, allMetrics as p, Route$1 as r, Dialog as s, router_exports as t, DialogHeader as u, integrations as v, documentsForStage as w, qualityPolicy as x, mission as y };
