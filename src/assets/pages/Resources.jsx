import React from "react";

const Resources = () => {
  const resources = [
    { name: "Research Paper 1", link: "https://core.ac.uk/download/pdf/268084862.pdf" },
    { name: "Research Paper 2", link: "https://www.researchgate.net/profile/Mamta-Chawla-3/publication/356831582_Landscape_of_Wearable_Technology_in_India/links/61af2292b3c26a1e5d8ed824/Landscape-of-Wearable-Technology-in-India.pdf" },
    
    { name: "Research Paper 3", link: "Collection and Processing of Data from Wrist Wearable Devices in Heterogeneous and Multiple-User Scenarios" },
    { name: "Research Paper 4", link: "https://www.researchgate.net/publication/375759194_An_analysis_of_the_consumer_attention_span_with_respect_to_digital_advertisements_in_the_consumer_wearable_industry" },
    { name: "Research Paper 5", link: "https://ieeexplore.ieee.org/document/9508969?denied=" },
    { name: "Research Paper 6", link: "https://drive.google.com/drive/folders/1HFnnwsDmWsdSNUuxZ47PCb3t8s84QKDx?usp=drive_link" },
    { name: "Research Paper 7", link: "https://www.kaggle.com/datasets/harshitaaswani/fitness-consumer-survey-data" },
    { name: "Research Paper 8", link: "Factors that influence an individual's intention to adopt a wearable healthcare device: The case of a wearable fitness tracker" },
    { name: "Website 1", link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9740494/" },
    { name: "Website 2", link: "https://www.praxisga.com/insights/healthcare-and-lifesciences/rise-of-wearable-medical-devices-market-in-india" },
    { name: "Website 3", link: "https://openbiomedicalengineeringjournal.com/VOLUME/15/PAGE/213/ABSTRACT/" },
    { name: "Website 4", link: "https://www.researchgate.net/publication/372236977_Wearable_Health_Monitoring_System_Latest_Trends_and_Challenges" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center mb-6">Resources</h2>
        <ul className="list-disc list-inside text-gray-300">
          {resources.map((resource, index) => (
            <li key={index} className="mb-2">
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {resource.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resources;
