
interface SectionWrapperProps {
    children: React.ReactNode;
}

export const SectionWrapper = ({children}: SectionWrapperProps) => {
        return (
            <section className="flex flex-col gap-6 mt-6 sm:grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                {children}
            </section>
        )
}