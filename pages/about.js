import { useEffect } from "react";
import AboutComponent from "../components/AboutComponent";

const About = () => {
	useEffect(() => {
		console.log("About page loaded");
	});
	return (
		<div>
			<AboutComponent />
		</div>
	);
};

export default About;
