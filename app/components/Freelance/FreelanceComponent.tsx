import Image from "next/image";
import Link from "next/link";

interface FreelanceComponentProps {
    text: string;
    imagePath: string;
    linkTo: string;
}

export const FreelanceComponent:React.FC<FreelanceComponentProps> = ({text, imagePath, linkTo}) => {
    return(
        <Link href={linkTo}>
            <div className={"flex gap-x-4 items-center "}>
                <h1 className={"text-black text-2xl font-semibold"}>{text}</h1>
                <Image src={imagePath} alt={"freelanceImage"} width={150} height={100}/>
            </div>
        </Link>

    )
}