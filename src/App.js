import React, { useState, useEffect } from "react";
import ImagesCard from "./components/ImagesCard";

function App() {
	// Defining App Level State

	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [term, setTerm] = useState("");

	// The URL API key
	const apiKey = "27572687-09e79ca90aa7188dc30f8c0dd";

	// Adding UseEffect Hook For API call when our component did mount
	// UseEffect runs after evrery render of our component

	useEffect(() => {
		fetch(`https://pixabay.com/api/?key=${apiKey}&q=${term}&image_type=photo&pretty=true`)
			.then((res) => res.json())
			.then((data) => {
				setImages(data.hits);
				setIsLoading(false);
			})
			.catch((err) => console.log(err.message));
	});

	return (
		<div className="container mx-auto">
			{isLoading ? (
				<h1 className="text-6xl text-center mx-auto mt-32">Images Are Loading!</h1>
			) : (
				<div className="grid grid-cols-3 gap-4">
					{/* Display ImageCard Component as we map through images-state array */}
					{images.map((image) => (
						<ImagesCard key={image.id} image={image} />
					))}
				</div>
			)}
		</div>
	);
}

export default App;
