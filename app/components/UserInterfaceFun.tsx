import Link from "next/link";

export default function UserInterfaceFun() {
    return (
        <div className={"flex flex-col"}>
            <h1 className="font-semibold text-[#D5B895] text-sm mt-3 tracking-widest mb-10">
                USER INTERFACE FUN
            </h1>
            <div className={"flex gap-2 mb-20"}>
                <Link href={"/kanban-board"}>
                    <div>
                        <h1 className={"text-2xl font-semibold"}>Kanban Board</h1>
                    </div>
                </Link>

            </div>
            <hr/>
        </div>
    );
}
