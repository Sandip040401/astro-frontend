import React from 'react';

interface CardProps {
    src: string;
    text: string;
}

const Card: React.FC<CardProps> = ({ src, text }) => (
    <div className="mx-2 h-24 w-36 rounded-lg bg-white flex flex-col items-center p-2 shadow-md hover:shadow-xl transition-shadow duration-500 hover:scale-110 transition-transform ease-in-out">
        <img className="h-12 mb-2" src={src} alt={text} />
        <div className="text-xs font-semibold text-gray-700">{text}</div>
    </div>
);

export const BannerComponent: React.FC = () => {
    const cardsData = [
        { src: "/comments.png", text: "Chat With Astrologer" },
        { src: "/telephone.png", text: "talk With Astrologer" },
        { src: "/parchment.png", text: "Free Kundli" },
        { src: "/kalasha.png", text: "Book a Pooja" },
    ];

    return (
        <div className="min-h-96 w-full bg-slate-800 flex justify-center">
            <div className="w-auto">
                <div className="mt-10 flex justify-center">
                    <img className="rounded-lg object-cover max-h-96" src="/banner.png" alt="Banner" />
                </div>
                <div className="min-h-36 mt-6 flex justify-between cursor-pointer ">
                    {cardsData.map((card, index) => (
                        <Card key={index} src={card.src} text={card.text} />
                    ))}
                </div>
            </div>
        </div>
    );
}
