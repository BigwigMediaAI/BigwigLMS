import styled from 'styled-components';
import '../App.css';

const Hero = () => {
    return (
        <div className="bg-blue-50 pt-20 md:pt-24">
            <HeroContainer>
                {/* Left Section - Text Content */}
                <TextContent>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Manage Real Estate Leads Efficiently
                    </h1>
                    <p className="text-lg text-gray-600 mb-6">
                        Our system helps you track, manage, and convert real estate leads with ease. Maximize your efficiency and grow your business today!
                    </p>
                    <CallToAction href="#features" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                        Learn More
                    </CallToAction>
                </TextContent>

                {/* Right Section - Form */}
                <FormContainer>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get Started Now</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-600 text-sm font-medium mb-1" htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                className=" p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-600 text-sm font-medium mb-1" htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-600 text-sm font-medium mb-1" htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                className="w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter your phone number"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </FormContainer>
            </HeroContainer>
        </div>
    );
};

const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 3rem 2rem 3rem;
    gap: 2rem;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

const TextContent = styled.div`
    flex: 1;
    text-align: center;

    @media (min-width: 768px) {
        text-align: left;
    }
`;

const FormContainer = styled.div`
    flex: 1;
    max-width: 400px;  /* Decrease form width */
    background-color: #ffffff;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);

    @media (min-width: 768px) {
        max-width: 450px;  /* Ensure the form has a reasonable max width on larger screens */
    }
`;

const CallToAction = styled.a`
    display: inline-block;
    text-decoration: none;
`;

export default Hero;
