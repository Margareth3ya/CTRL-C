import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";

const slides = [
    {
        image: "https://i.ibb.co.com/rnqDtFb/image1.png",
    },
    {
        image: "https://i.ibb.co.com/2YjNQnTF/image2.png",
    },
];

// IMAGE KANAN TEXT KIRI
export default function Hero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative w-full h-screen max-h-[600px] overflow-hidden bg-gradient-to-r from-blue-50 to-gray-100 flex flex-col md:flex-row items-center justify-center px-6 md:px-12 lg:px-24">
            <div className="w-full md:w-1/2 text-left md:pr-10 z-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 tracking-wide">
                    SUCCESS BY
                    <span className="block font-bold text-gray-900 mt-1">DISCIPLINE</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-md">
                    Membentuk siswa cerdas, terampil, dan berkarakter.
                </p>
                <button className="mt-8 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full flex items-center space-x-2 shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-fit">
                    <span>Profil</span>
                    <ChevronRight size={20} />
                </button>
            </div>

            <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
                <div className="w-full max-w-md overflow-hidden relative">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${current * 100}%)` }}>
                        {slides.map((slide, index) => (
                            <div key={index} className="w-full flex-shrink-0">
                                <img
                                    src={slide.image}
                                    alt={`slide-${index}`}
                                    className="w-full h-auto object-cover rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

// IMAGE KIRI TEXT KANAN
// export default function Hero() {
//     const [current, setCurrent] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrent((prev) => (prev + 1) % slides.length);
//         }, 4000);
//         return () => clearInterval(interval);
//     }, []);

//     const nextSlide = () => {
//         setCurrent((prev) => (prev + 1) % slides.length);
//     };

//     const prevSlide = () => {
//         setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
//     };

//     return (
//         <div className="relative w-full h-screen max-h-[600px] overflow-hidden bg-gradient-to-r from-blue-50 to-gray-100 flex flex-col md:flex-row items-center justify-center px-6 md:px-12 lg:px-24">
//             <div className="w-full md:w-1/2 flex justify-center md:justify-start relative order-1">
//                 <div className="w-full max-w-md overflow-hidden relative">
//                     <div
//                         className="flex transition-transform duration-700 ease-in-out"
//                         style={{ transform: `translateX(-${current * 100}%)` }}>
//                         {slides.map((slide, index) => (
//                             <div key={index} className="w-full flex-shrink-0">
//                                 <img
//                                     src={slide.image}
//                                     alt={`slide-${index}`}
//                                     className="w-full h-auto object-cover rounded-lg"
//                                 />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//             <div className="w-full md:w-1/2 text-left md:pl-10 z-10 order-2">
//                 <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 tracking-wide">
//                     SUCCESS BY
//                     <span className="block font-bold text-gray-900 mt-1">DISCIPLINE</span>
//                 </h1>
//                 <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-md">
//                     Membentuk siswa cerdas, terampil, dan berkarakter.
//                 </p>
//                 <button className="mt-8 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full flex items-center space-x-2 shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-fit">
//                     <span>Profil</span>
//                     <ChevronRight size={20} />
//                 </button>
//             </div>
//         </div>
//     );
// }