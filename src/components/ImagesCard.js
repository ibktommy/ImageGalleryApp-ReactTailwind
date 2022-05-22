import React from "react";

const ImagesCard = ({ image }) => {
	// onverting the images "tag" value to an Array so we can map through its values
	const imageTagValues = image.tags.split(",");

	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg">
			<img src={image.webformatURL} alt="" className="w-full" />
			<div className="px-6 py-4">
				<div className="font-bold text-pink-500 text-xl mb-2">Photo by {image.user}</div>
				<ul>
					<li>
						<strong>Views: </strong>
						{image.views}
					</li>
					<li>
						<strong>Downloads: </strong>
						{image.downloads}
					</li>
					<li>
						<strong>Likes: </strong>
						{image.likes}
					</li>
				</ul>
			</div>
			<div className="px-6 py-4">
				{imageTagValues.map((eachTagValue, index) => (
					<span
						key={index}
						className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 m-2"
					>
						#{eachTagValue}
					</span>
				))}
			</div>
		</div>
	);
};

export default ImagesCard;
