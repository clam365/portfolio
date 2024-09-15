export default function RoleDurationTeam() {
    return (
        <div className={"grid-cols-3 sm:grid-cols-2 mt-6 flex justify-between"}>
            <div>
                <h1 className={"font-semibold  text-sm "}>Role</h1>
                <p className={"text-sm"}>UI/UX Designer/Researcher</p>
                <p className={"text-sm"}>Frontend Developer</p>
            </div>
            <div>
                <h1 className={"font-semibold text-sm "}>Duration</h1>
                <p className={"text-sm"}>May - Oct, 2024</p>

            </div>
            <div>
                <h1 className={"font-semibold  text-sm "}>Team</h1>
                <p className={"text-sm"}>Chris Lam</p>
                <p className={"text-sm"}>Hunter Poulin</p>
                <p className={"text-sm"}>Gus Montana</p>
                <p className={"text-sm"}>James Walden</p>
                <p className={"text-sm"}>Nate Schneider</p>
            </div>
        </div>
    );
}