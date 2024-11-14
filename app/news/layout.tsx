import Hero from "@/app/_components/Hero";
import Sheet from "../_components/Sheet";

type Props = {
    children: React.ReactNode;
};

export default function NewLayout({ children }: Props) {
    return (
        <>
        <Hero title="News" sub="ニュース"/>
        <Sheet>{children}</Sheet>
        </>
    );
}