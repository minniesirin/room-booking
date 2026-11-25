import type { AxiosError } from "axios"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

interface RoomProps{
    id: number
    name: string
    location: string
    capacity: number
    is_active: boolean
}

function Booking() {
    const { id } = useParams()
    const [room, setRoom] = useState<RoomProps | null>(null)

    async function fetchRoomDetail(){
        try{
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/mock-rooms/${id}`)
            setRoom(res.data.room)
        }
        catch(err: any | AxiosError){
            console.log(err.response.message)
        }
    }

    useEffect(() => {
        fetchRoomDetail()
    }, [])

    if (!room) {
        return <div className="p-8 text-slate-500">กำลังโหลดข้อมูลห้อง...</div>;
    }

    return (
        <main className="min-h-screen w-full bg-slate-50 grid grid-cols-1 lg:grid-cols-2">
            {/* ฝั่งซ้าย: พื้นที่ใส่รูปภาพเต็มครึ่งหน้า */}
            <div className="min-h-[360px] lg:min-h-screen bg-slate-200 flex items-center justify-center text-slate-400 text-base font-medium border-b lg:border-b-0 lg:border-r border-slate-200/80">
                รูปภาพห้องประชุม
            </div>

            {/* ฝั่งขวา: รายละเอียดห้องและปุ่มกดจอง */}
            <div className="bg-white p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
                <div>
                    <div className="flex items-center justify-between gap-4 mb-6">
                        <span className="text-sm font-medium text-slate-500">
                            รหัสห้อง #{room.id}
                        </span>
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                            พร้อมใช้งาน
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
                        {room.name}
                    </h1>

                    <div className="mt-8 pt-8 border-t border-slate-100 space-y-5 text-base text-slate-600">
                        <div>
                            <div className="text-sm text-slate-400">สถานที่ตั้ง</div>
                            <div className="mt-1 font-medium text-slate-900">
                                {room.location}
                            </div>
                        </div>

                        <div>
                            <div className="text-sm text-slate-400">ความจุ</div>
                            <div className="mt-1 font-medium text-slate-900">
                                {room.capacity} คน
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-slate-100">
                    <button
                        type="button"
                        className="w-full py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-base font-medium transition cursor-pointer"
                    >
                        จองห้องนี้
                    </button>
                </div>
            </div>
        </main>
    )
}

export default Booking