export function EquipmentItem({
    equipment
}: {
    equipment
}) {
    //console.log(equipment);

    return (
        <div className="flex flex-row max-w-screen">
            <div className="m-10">
                {equipment.id}  
            </div>
            <div className="m-10">
                {equipment.serialNumber}  
            </div>
        </div>
    )
}
