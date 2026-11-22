interface RoomCardProps{
    name: string
    location: string
    capacity: number
}

function RoomsCardSmall(props: RoomCardProps) {
    const { name, capacity, location } = props
    return (
        <div className="p-6 border rounded-lg bg-slate-50">
            <div className="font-medium">{name}</div>
            <div className="text-sm text-slate-400 mt-1">ความจุ {capacity} คน</div>
            <div className="text-sm text-slate-400 mt-1">สถานที่ {location}</div>
        </div>
    )
}

export default RoomsCardSmall