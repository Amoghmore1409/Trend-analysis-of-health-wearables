import React from "react";
import { Link } from "react-router-dom";

const SentimentalAnalysis = () => {
  const graphData = [
    {
      src: "src/assets/Images/sentiment_by_state.png",
      title: "Sentiment Analysis by State",
      description:
        "The sentiment analysis graph represents how people in different states feel about watches, categorized into positive, neutral, and negative sentiments. By analyzing customer reviews, social media mentions, and online discussions, this data provides insights into regional preferences and trends in the watch industry.",
    },
    {
      src: "src/assets/Images/sentiment_by_occupation.png",
      title: "Sentiment Analysis by Occupation",
      description:
        "The sentiment analysis graph showcases how individuals from different occupations perceive watches, categorized into positive, neutral, and negative sentiments. This data helps in understanding how professionals, workers, and other job categories react to various watch brands, features, and pricing.",
    },
    {
      src: "src/assets/Images/sentiment_by_gender.png",
      title: "Sentiment Analysis by Gender",
      description:
        "The sentiment analysis graph represents how different genders perceive watches, categorized into positive, neutral, and negative sentiments. This data provides insights into gender-based preferences, helping brands understand market trends and consumer satisfaction levels.",
    },
    {
      src: "src/assets/Images/sentiment_by_age.png",
      title: "Sentiment Analysis by Age",
      description:
        "The sentiment analysis graph highlights how different age groups perceive watches, categorized into positive, neutral, and negative sentiments. This data provides valuable insights into generational preferences, helping brands tailor their watch designs and marketing strategies accordingly.",
    },
  ];

  const brands = [
    "Boat",
    "Google",
    "Apple",
    "Fitbit",
    "Samsung",
    "Redmi",
    "Firebolt",
    "Boult",
    "Fossil",
    "Amazfit",
  ];

  return (
    <div className="p-6 flex flex-col md:flex-row gap-8 bg-gray-900 text-white min-h-screen">
      <div className="md:w-3/4">
        <h1 className="text-3xl font-bold mb-4 text-center md:text-left text-blue-400">
          Sentimental Analysis
        </h1>
        <p className="text-gray-400 mb-6 text-center md:text-left">
          Analyze customer sentiments and feedback insights.
        </p>

        <div className="space-y-12">
          {graphData.map((graph, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""} items-center gap-6 bg-gray-800 p-6 rounded-lg shadow-lg`}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={graph.src}
                  alt={graph.title}
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-2xl font-semibold text-blue-400">
                  {graph.title}
                </h2>
                <p className="text-gray-300 mt-2">{graph.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:w-1/4 bg-gray-800 text-white p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-3 text-blue-400">
          More Brand Sentiment Insights
        </h2>
        <p className="text-gray-400 mb-4">Check sentiment trends for each brand:</p>
        <ul className="space-y-2">
          {brands.map((brand, index) => (
            <li key={index} className="hover:bg-gray-700 p-2 rounded-md">
              <Link
                to={`/${brand.toLowerCase()}`}
                className="text-blue-400 hover:text-blue-300"
              >
                {brand} Sentiment →
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SentimentalAnalysis;
