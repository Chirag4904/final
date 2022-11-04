import React, { useEffect, useState } from "react";
import axios from "axios";
import sendHelpData from "../services/sendHelpData";
import sendFaqData from "../services/sendFaqData";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function CreateForm() {
	const [schemas, setSchemas] = useState();
	const [tab, setTab] = useState("helpSchema");

	const fetchSchema = () => {
		axios.get("http://localhost:5000/api/get-schemas").then((response) => {
			console.log(response.data);
			setSchemas(response.data);
		});
	};

	useEffect(() => {
		fetchSchema();
	}, []);

	return (
		<div className="form">
			<Typography variant="h3" gutterBottom sx={{ marginTop: "80px" }}>
				Forms
			</Typography>
			{schemas && (
				<section>
					<Box sx={{ width: "500px" }}>
						<Box
							sx={{
								borderBottom: 1,
								borderColor: "divider",
								display: "flex",
								justifyContent: "center",
								flexDirection: "column",
							}}
						>
							<Tabs value={tab} aria-label="tabs" sx={{ marginLeft: "130px" }}>
								<Tab
									label="Help Form"
									value="helpSchema"
									onClick={() => setTab("helpSchema")}
								/>
								<Tab
									label="Faq Form"
									value="faqSchema"
									onClick={() => setTab("faqSchema")}
								/>
							</Tabs>
							<Form tab={tab} schemas={schemas} />
						</Box>
					</Box>
				</section>
			)}
		</div>
	);
}

function Form({ tab, schemas }) {
	const [schema, setSchema] = useState(schemas[tab]);
	const [formData, setFormData] = useState();
	const [submit, setSubmit] = useState(false);

	// console.log(typeof schema);
	useEffect(() => {
		let data = {};
		// for (const property in schemas[tab]) {
		// 	console.log(property.pro);
		// }
		Object.keys(schemas[tab]).map((key, i) => {
			// console.log(key);
			return (data[`${key}`] = "");
		});
		setFormData(data);
		setSubmit(false);
		setSchema(schemas[tab]);
	}, [schemas, tab, submit]);

	const handleInput = (e) => {
		const field = e.target.attributes.id.value;
		console.log(field);
		let data = schema;
		if (field === "imageURL" || field === "imageAlt") {
			data["image"][field] = e.target.value;
		} else {
			data[field] = e.target.value;
		}

		setSchema(data);
	};

	const submitHelpForm = (e) => {
		e.preventDefault();
		console.log(schema);

		// if (tab === "helpSchema") {
		// 	sendHelpData(schema);
		// } else {
		// 	sendFaqData(schema);
		// }
		tab === "helpSchema" ? sendHelpData(schema) : sendFaqData(schema);
		setFormData({});
		setSubmit(true);
	};
	return (
		<Card
			sx={{
				color: "seagreen",
				padding: "20px",
			}}
		>
			{formData && (
				<div>
					<Typography
						variant="h5"
						sx={{ fontWeight: "bold", marginLeft: "140px" }}
					>
						{tab.toUpperCase()}
					</Typography>
					<form id="form">
						{Object.keys(formData).map((key, i) => {
							// const ar = [];
							// console.log(key);
							if (key === "image" && tab === "helpSchema") {
								// for (const n in schemas[tab][key]) {
								// 	ar.push(schemas[tab][key]);
								// }

								return (
									<div>
										<label htmlFor={key}>{key.toUpperCase()}</label>
										{Object.keys(schemas[tab][key]).map((a, j) => {
											return (
												<Box
													key={j}
													sx={{
														margin: "10px",
														padding: "10px",
														display: "flex",
														flexDirection: "column",
														justifyContent: "center",
														alignContent: "center",
													}}
												>
													<label
														style={{ marginBottom: "8px" }}
														htmlFor={a.toString()}
													>
														{a.toUpperCase()}
													</label>
													<input
														style={{ height: "30px", borderRadius: "8px" }}
														onChange={handleInput}
														text
														id={a.toString()}
														required
													/>
												</Box>
											);
										})}
									</div>
								);
							} else {
								return (
									<Box
										key={i}
										sx={{
											margin: "10px",
											padding: "10px",
											display: "flex",
											flexDirection: "column",
											justifyContent: "center",
											alignContent: "center",
										}}
									>
										<label
											style={{ marginBottom: "8px" }}
											htmlFor={key.toString()}
										>
											{key.toUpperCase()}
										</label>
										<input
											style={{ height: "30px", borderRadius: "8px" }}
											onChange={handleInput}
											text
											id={key.toString()}
											required
										/>
									</Box>
								);
							}
						})}
						<div>
							<Button variant="contained" onClick={submitHelpForm}>
								Submit
							</Button>
						</div>
					</form>
				</div>
			)}
		</Card>
	);
}

export default CreateForm;
