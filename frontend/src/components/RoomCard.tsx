interface RoomCardProps {
    name: string
    location: string
    capacity: number
}

function RoomsCard(props: RoomCardProps) {
    const { name, location, capacity } = props

    return (
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition overflow-hidden flex flex-col">
            {/* ส่วนรูปภาพ / Placeholder ด้านบน */}
            <div className="h-44 bg-slate-200 flex items-center justify-center text-slate-400 text-sm">
                รูปภาพห้องประชุม
            </div>

            {/* เนื้อหาในการ์ด */}
            <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                    {/* แถวชื่อห้อง + สถานะ */}
                    <div className="flex items-start justify-between gap-2">
                        <h2 className="text-lg font-semibold text-slate-900">
                            {name}
                        </h2>
                        <span className="shrink-0 px-2.5 py-0.5 text-xs font-medium rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                            พร้อมใช้งาน
                        </span>
                    </div>

                    {/* รายละเอียดสถานที่และความจุ */}
                    <div className="mt-3 space-y-1.5 text-sm text-slate-600">
                        <div>ตำแหน่ง: {location}</div>
                        <div>ความจุ: {capacity} คน</div>
                    </div>
                </div>

                {/* ปุ่มด้านล่างการ์ด */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-end">
                    <div className="w-full text-center py-2 px-4 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition cursor-pointer">
                        ดูรายละเอียด / จองห้อง
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomsCard