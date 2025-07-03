import heroBackground from '../../../assets/images/background.png';
const Hero = () => {
    return (
        <div>

            <section className="relative h-[70vh] flex items-center justify-center text-white">
              
                <img
                    src={heroBackground}
                    alt="Library"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />

                <div className="absolute inset-0 bg-black/70  z-10" />

   
                <div className="relative z-20 text-center px-4 max-w-3xl">
                    <h1 className="text-3xl md:text-6xl font-bold mb-4">
                        Welcome to the Future of Library Management
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        Explore, borrow, and manage books with ease using our modern digital library system.
                    </p>
                    <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition">
                        Get Started
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Hero;


