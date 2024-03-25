import "./SectionTitle.scss";
import classNames from "classnames";

interface SectionTitleProps {
    title: string;
    type?: "primary" | "secondary",
}

function SectionTitle({ title, type="secondary" }: SectionTitleProps): JSX.Element {

    return (
        <h2 
            className={
                classNames(
                    "section-title",
                    {"uppercase": type === "primary"},
                    {"capitalize": type === "secondary"}
                )
            }>
            {title}
        </h2>
    );
}

export default SectionTitle;
