import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaTools } from "react-icons/fa";

const teamMembers = [
    {
        name: "Alice Johnson",
        role: "Interior Designer/Design Consultant",
        image: "https://randomuser.me/api/portraits/men/44.jpg",
        socials: {
            facebook: "https://www.facebook.com/alice.johnson",
            linkedin: "https://www.linkedin.com/in/alice-johnson",
            twitter: "https://twitter.com/alicejohnson",
            instagram: "https://www.instagram.com/alice.johnson",
        },
    },
    {
        name: "Bob Smith",
        role: "Soft Furnishings Specialist",
        image: "https://randomuser.me/api/portraits/women/48.jpg",
        socials: {
            facebook: "https://www.facebook.com/bob.smith",
            linkedin: "https://www.linkedin.com/in/bob-smith",
            twitter: "https://twitter.com/bobsmith",
            instagram: "https://www.instagram.com/bob.smith",
        },
    },
    {
        name: "Catherine Lee",
        role: "Master Seamstress/Curtain and Blind Maker",
        image: "https://randomuser.me/api/portraits/men/22.jpg",
        socials: {
            facebook: "https://www.facebook.com/catherine.lee",
            linkedin: "https://www.linkedin.com/in/catherine-lee",
            twitter: "https://twitter.com/catherinelee",
            instagram: "https://www.instagram.com/catherine.lee",
        },
    },
    {
        name: "David Brown",
        role: "Motorization/Smart Home Specialistr",
        image: "https://randomuser.me/api/portraits/women/50.jpg",
        socials: {
            facebook: "https://www.facebook.com/david.brown",
            linkedin: "https://www.linkedin.com/in/david-brown",
            twitter: "https://twitter.com/davidbrown",
            instagram: "https://www.instagram.com/david.brown",
        },
    },
];

const ExpertTeam = () => {
    return (
        <div className="py-20 bg-gradient-to-b from-cyan-50 to-white">
            <div className="max-w-7xl mx-auto text-center space-y-6 px-4">
                <p className="text-cyan-700 font-semibold flex items-center justify-center gap-2 text-lg md:text-xl">
                    <FaTools className="text-2xl animate-bounce" /> Meet Our Team{" "}
                    <FaTools className="text-2xl animate-bounce" />
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">Our Expert Team</h2>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 pt-12">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-xl shadow-xl border-t-4 border-cyan-600 hover:shadow-2xl transition-shadow duration-500 bg-white"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-80 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>

                            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white py-4 px-5 flex flex-col items-start">
                                <h3 className="text-lg sm:text-xl font-semibold">{member.name}</h3>
                                <p className="text-sm sm:text-base uppercase text-gray-300">{member.role}</p>
                            </div>

                            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <div className="flex flex-col space-y-3 bg-cyan-600 text-white p-3 rounded-xl shadow-lg">
                                    <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer">
                                        <FaFacebookF className="hover:text-black cursor-pointer text-lg sm:text-xl" />
                                    </a>
                                    <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
                                        <FaLinkedinIn className="hover:text-black cursor-pointer text-lg sm:text-xl" />
                                    </a>
                                    <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer">
                                        <FaTwitter className="hover:text-black cursor-pointer text-lg sm:text-xl" />
                                    </a>
                                    <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer">
                                        <FaInstagram className="hover:text-black cursor-pointer text-lg sm:text-xl" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExpertTeam;
