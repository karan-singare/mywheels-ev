interface SectionProps {
    id: string;
    title?: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
    return (
        <section
            id={id}
            className="px-6 md:px-[60px] py-16 md:py-[80px] mx-auto"
        >
            {title && (
                <h3 className="text-primary text-3xl font-semibold text-center mb-10">
                    {title}
                </h3>
            )}
            {children}
        </section>
    );
};

export default Section;
