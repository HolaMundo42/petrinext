import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube, faDiscord, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const LandingPage: React.FC = () => {
    return (
    <div className="flex flex-col min-h-screen">
        <header className="bg-gray-600 py-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <img src="https://cdn.icon-icons.com/icons2/2379/PNG/512/petri_dish_experimentation_biology_education_petri_dish_icon_143934.png" alt="Petri Dish Icon" className="w-12 h-auto mr-2 ml-[1rem]"/>
                    <h1 className="text-4xl font-semibold text-white ml-1">
                        <Link href="/"> PetriLab </Link>
                    </h1>
                </div>
                <div className="flex items-center space-x-4">
                    <Link href="/login" className="text-white mr-2">
                        <p className="hover:text-[rgb(211,211,211)]"> Login </p>
                    </Link>
                    <Link href="/signup" className="text-blue-500">
                        <span className="bg-sky-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-[1rem]">
                            Sign Up
                        </span>
                    </Link>
                </div>
            </div>
        </header>

        <section className="flex-1 py-12">
            <div className="container mx-auto text-left">
                <h1 className="text-5xl font-semibold mb-2">Welcome to PetriLab</h1>
                <p className="text-gray-600 mb-2">Unlock the secrets of science in the comfort of your lab.</p>
                <Link href="/signup">
                    <button className="mt-2 px-8 py-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 shadow-md">
                        Get Started
                    </button>
                </Link>
                <p className="mt-4 text-gray-600 text-sm">Start your journey with PetriLab and explore and analyze your dishes.</p>
                
                <hr className="border-t-2 border-gray-400 mb-8 mx-auto w-16" />
                
                <h2 className="text-3xl font-semibold my-8 text-center">Features</h2> {/* Aligned Features to the middle */}
                <div className="flex flex-col md:flex-row gap-8"><div className="bg-white p-6 rounded shadow-md hover:shadow-lg transition duration-300 transform hover:translate-y-[-5px]">
                <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
                <p className="text-gray-600">Our web page is fully responsive, ensuring it looks great on all devices.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-md hover:shadow-lg transition duration-300 transform hover:translate-y-[-5px]">
                <h3 className="text-xl font-semibold mb-2">Simple and Minimalistic</h3>
                <p className="text-gray-600">We believe in the beauty of simplicity, making the user experience smooth and clutter-free.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-md hover:shadow-lg transition duration-300 transform hover:translate-y-[-5px]">
                <h3 className="text-xl font-semibold mb-2">Built with Modern Tools</h3>
                    <p className="text-gray-600">This landing page is powered by Next.js, TypeScript, and Tailwind CSS.</p>
                </div>
                </div>
            </div>
            </section>
        
    <footer className="bg-gray-200 py-6">
    <div className="container mx-auto text-center flex flex-col items-center sm:flex-row sm:justify-between">
        <div className="mb-4 sm:mb-0 flex items-center">
        <Link href="/terms-of-service" className="text-gray-600 hover:text-gray-800">
            Terms of Service
        </Link>
        <span className="text-gray-600 mx-2">•</span>
        <Link href="/contact" className="text-gray-600 hover:text-gray-800">
            Contact
        </Link>
        </div>
        <div className="flex items-center space-x-2">
        <span className="text-gray-600 hidden sm:inline">Follow Us</span>
        <span className="text-gray-600 hidden sm:inline">•</span>
        <button
            id="instagram"
            className="border-2 hover:border-0 border-pink-500 bg-gradient-to-b text-2xl hover:from-indigo-600 hover:via-pink-600 hover:to-yellow-500 hover:text-white bg-white text-pink-600 w-10 h-10 transform hover:-translate-y-3 rounded-full duration-500"
        >
            <FontAwesomeIcon icon={faInstagram} />
        </button>
        <button
            id="youtube"
            className="bg-white transform hover:-translate-y-3 border-2 w-10 h-10 rounded-full duration-500 text-red-500 border-red-500 hover:bg-red-500 hover:text-white text-2xl"
        >
            <FontAwesomeIcon icon={faYoutube} />
        </button>
        <button
            id="discord"
            className="bg-white transform hover:-translate-y-3 border-2 w-10 h-10 rounded-full duration-500 text-indigo-500 border-indigo-500 hover:bg-indigo-500 hover:text-white text-2xl"
        >
            <FontAwesomeIcon icon={faDiscord} />
        </button>
        <button
            id="linkedin"
            className="bg-white transform hover:-translate-y-3 border-2 w-10 h-10 rounded-full duration-500 text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white text-2xl"
        >
            <FontAwesomeIcon icon={faLinkedinIn} />
        </button>
        </div>
    </div>
    </footer>
    </div>
);
};

export default LandingPage;