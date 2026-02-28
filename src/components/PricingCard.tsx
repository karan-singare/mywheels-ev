interface PricingCardProps {
    title: string;
    price: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price }) => {
    return (
        <div className="bg-white p-8 rounded-xl text-center">
            <h4 className="text-lg font-semibold mb-4">{title}</h4>
            <div className="text-3xl font-bold text-primary">
                ₹{price}
            </div>
        </div>
    );
};

export default PricingCard;
