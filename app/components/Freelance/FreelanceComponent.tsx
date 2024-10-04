import Image from "next/image";
import Link from "next/link";

interface FreelanceComponentProps {
    text: string;
    imagePath: string;
    linkTo: string;
    imageWidth: number;
    imageHeight: number;
}

export const FreelanceComponent:React.FC<FreelanceComponentProps> = ({text, imagePath, linkTo,imageHeight, imageWidth}) => {
    return(
        <Link href={linkTo}>
            <div className={"flex gap-x-4 items-center "}>
                <h1 className={"text-black text-2xl font-semibold"}>{text}</h1>
                <Image src={imagePath} alt={"freelanceImage"} width={imageWidth} height={imageHeight}/>
            </div>
        </Link>

    )
}