interface CardProps {
    title: string;
    children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
    return (
        <div className="bg-white p-8 rounded-xl text-center">
            <h4 className="text-lg font-semibold mb-3">{title}</h4>
            <div className="text-muted text-sm">{children}</div>
        </div>
    );
};

export default Card;
