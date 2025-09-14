import React, { useState } from "react";

export default function Departemen() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [startX, setStartX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const departments = [
        {
            id: 1,
            name: "Teknologi Informasi dan Komunikasi (TIK)",
            shortName: "TIK",
            image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80",
            description: "Departemen TIK membekali siswa dengan keterampilan di bidang teknologi informasi, meliputi pemrograman, desain web, jaringan komputer, dan manajemen data.",
            color: "blue"
        },
        {
            id: 2,
            name: "Pemesinan",
            shortName: "Pemesinan",
            image: "https://images.unsplash.com/photo-1581094288338-231b058b38b8?auto=format&fit=crop&w=800&q=80",
            description: "Departemen Pemesinan mempersiapkan siswa menguasai teknik pengoperasian mesin konvensional maupun CNC, membaca gambar teknik, dan proses manufaktur.",
            color: "green"
        },
        {
            id: 3,
            name: "Kelistrikan",
            shortName: "Kelistrikan",
            image: "https://images.unsplash.com/photo-1581093458791-9d33f465dea5?auto=format&fit=crop&w=800&q=80",
            description: "Departemen Kelistrikan mengajarkan keterampilan instalasi, perawatan, dan perbaikan sistem kelistrikan, baik untuk bangunan maupun industri.",
            color: "yellow"
        },
        {
            id: 4,
            name: "Otomotif",
            shortName: "Otomotif",
            image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80",
            description: "Departemen Otomotif berfokus pada pembelajaran teknologi kendaraan bermotor, perawatan, dan perbaikan mesin.",
            color: "orange"
        }
    ];

    const colorMap = {
        blue: "bg-blue-100 text-blue-800",
        green: "bg-green-100 text-green-800",
        yellow: "bg-yellow-100 text-yellow-800",
        orange: "bg-orange-100 text-orange-800"
    };

    const handleNext = () => setCurrentIndex((prev) => (prev + 1) % departments.length);
    const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + departments.length) % departments.length);

    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
        setIsDragging(true);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const diffX = e.touches[0].clientX - startX;
        if (Math.abs(diffX) > 50) {
            if (diffX > 0) handlePrev();
            else handleNext();
            setIsDragging(false);
        }
    };

    const toJurusan = () => {
        window.location.href = "/jurusan";
    };

    const handleTouchEnd = () => setIsDragging(false);

    return (
        <section className="w-full py-8 bg-gray-50 flex justify-start">
            <div className="w-full max-w-7xl px-4 md:px-6">
                {/* Header */}
                <div className="mb-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-1">
                        4 Departemen Unggulan
                    </h2>
                    <div className="text-4xl md:text-5xl font-bebas text-orange-500">
                        SKARIGA
                    </div>
                </div>

                {/* Card Stack */}
                <div className="relative h-[420px] md:h-[500px] flex justify-start items-center">
                    {departments.map((dept, index) => {
                        const position = (index - currentIndex + departments.length) % departments.length;
                        const isActive = position === 0;
                        const isNext = position === 1;
                        const isPrevious = position === departments.length - 1;

                        let translateX = 0, translateY = 0, scale = 1, opacity = 1, zIndex = 0, rotate = 0;

                        if (isActive) zIndex = 40;
                        else if (isNext) { translateX = 300; translateY = -20; scale = 0.9; opacity = 0.7; zIndex = 30; rotate = 4; }
                        else if (isPrevious) { translateX = -300; translateY = -20; scale = 0.9; opacity = 0.7; zIndex = 30; rotate = -4; }
                        else { translateX = position > departments.length / 2 ? -600 : 600; translateY = -40; scale = 0.7; opacity = 0; zIndex = 20; }

                        return (
                            <div
                                key={dept.id}
                                className={`absolute w-[90%] md:w-[70%] max-w-4xl h-[380px] md:h-[350px] bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 ease-in-out ${isActive ? "cursor-grab active:cursor-grabbing" : "pointer-events-none"}`}
                                style={{ transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale}) rotate(${rotate}deg)`, opacity, zIndex }}
                                onTouchStart={isActive ? handleTouchStart : undefined}
                                onTouchMove={isActive ? handleTouchMove : undefined}
                                onTouchEnd={isActive ? handleTouchEnd : undefined}
                            >
                                <div className="flex flex-col md:flex-row h-full">
                                    {/* Image */}
                                    <div className="w-full md:w-2/5 h-1/2 md:h-full">
                                        <img src={dept.image} alt={dept.name} className="w-full h-full object-cover" />
                                    </div>

                                    {/* Content */}
                                    <div className="w-full md:w-3/5 p-4 md:p-6 flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="text-xl md:text-2xl font-bold text-gray-900">{dept.shortName}</h3>
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${colorMap[dept.color]}`}>
                                                    {dept.name}
                                                </span>
                                            </div>
                                            <p className="text-gray-600 text-sm md:text-base">{dept.description}</p>
                                        </div>
                                        <button onClick={toJurusan} className="self-start bg-orange-500 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition-colors">
                                            Selengkapnya →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Controls */}
                <div className="flex justify-start mt-2 space-x-4 flex-wrap md:flex-nowrap">
                    <button onClick={handlePrev} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full transition-colors">
                        ← Prev
                    </button>
                    <div className="flex items-center space-x-2">
                        {departments.map((_, index) => (
                            <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-orange-500" : "bg-gray-300"}`} />
                        ))}
                    </div>
                    <button onClick={handleNext} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full transition-colors">
                        Next →
                    </button>
                </div>

                <div className="text-left mt-2 text-gray-500">
                    Geser kartu untuk melihat departemen lainnya
                </div>
            </div>
        </section>
    );
};
