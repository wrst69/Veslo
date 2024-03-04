import { useEffect } from "react";

export function EquipmentItem({
    equipment
}: {
    equipment
}) {
    useEffect(() => console.log(equipment.id))
    return (
        <div className="flex flex-row max-w-screen">
            <div className="m-10">
                {equipment.serialNumber}  
            </div>
            <div className="m-10">
                {equipment.nodeTitle}  
            </div>
            <div className="m-10">
                {equipment.calibrationInterval}  
            </div>
        </div>
    )
}
