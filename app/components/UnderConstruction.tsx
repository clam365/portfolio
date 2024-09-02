import React from "react";

interface UnderConstructionProps {
    text: string;
}

export const UnderConstruction: React.FC<UnderConstructionProps> = ({text}) => {
    return (
        <div className={"bg-orange-100 rounded-lg p-3 border border-orange-500"}>
            <h1 className="text-sm font-semibold text-orange-500">
                {text}
            </h1>
        </div>
    )
}