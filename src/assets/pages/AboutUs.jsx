import React from "react";

const developers = [
  {
    name: "Amogh More",
    role: "Frontend Developer",
    image: "src/assets/Images/WhatsApp Image 2025-02-07 at 05.58.43_eb548567.jpg", // Replace with actual image
    bio: "Passionate about UI/UX and creating responsive designs.",
    linkedin: "https://www.linkedin.com/in/amogh-more-2a1066298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/Amoghmore1409",
  },
  {
    name: "Harsh Tanwani",
    role: "Backend Developer",
    image: "src/assets/Images/WhatsApp Image 2025-02-06 at 22.26.36_b6af4451.jpg",
    bio: "Specialized in building secure and scalable backend systems.",
    linkedin: "https://www.linkedin.com/in/harsh-tanwani-63711928b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/HARSH125327U",
  },
  {
    name: "Nitika Nagdevani",
    role: "Backend Developer",
    image: "src/assets/Images/WhatsApp Image 2025-02-07 at 05.49.59_31d1a69d.jpg",
    bio: "Experienced in backend technologies.",
    linkedin: "https://www.linkedin.com/in/nitika-nagdevani-985230259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/nitikanagdevani",
  },
  {
    name: "Samruddhi Jatkar",
    role: "Frontend developer",
    image: "src/assets/Images/WhatsApp Image 2025-02-07 at 05.49.59_f884f9aa.jpg",
    bio: "Expert in data visualization .",
    linkedin: "https://www.linkedin.com/in/samruddhi-jatkar-200a242a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/Samruddhi1208",
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-6">Meet Our Team</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {developers.map((dev, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <img
              src={dev.image}
              alt={dev.name}
              className="w-full h-48 object-cover rounded-lg mb-4 border-4 border-gray-700"
            />
            <h2 className="text-xl font-semibold">{dev.name}</h2>
            <p className="text-gray-400">{dev.role}</p>
            <p className="mt-2 text-gray-300">{dev.bio}</p>
            <div className="flex justify-center gap-4 mt-4">
              <a href={dev.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
                LinkedIn
              </a>
              <a href={dev.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;