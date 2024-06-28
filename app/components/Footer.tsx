import Link from "next/link";

export default function Footer() {
    return (
        <footer className={"p-6 pl-0 pr-0 pb-0 flex justify-between"}>
            <h1>Chris Lam</h1>
            <div className={"flex"}>
                <a href="mailto:christpherlam365@gmail.com">
                    <p className="mr-2 lg:hidden">Email</p>
                </a>
                <Link href={"https://www.linkedin.com/in/chrislam365"}>
                    <p className="mr-2 lg:hidden">LinkedIn</p>
                </Link>
                <Link href={"https://github.com/clam365"}>
                    <p className="mr-2 lg:hidden">Github</p>
                </Link>
                <h1>© 2024</h1>
            </div>

        </footer>
    );
}