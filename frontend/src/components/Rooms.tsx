import { useEffect, useState } from "react"
import RoomCard from "./RoomCard"
import axios, { AxiosError } from "axios"

interface RoomProps{
    id: number
    name: string
    location: string
    capacity: number
    is_active: boolean
}

function Rooms() {
    const [rooms, setRooms] = useState([])

    async function fetchRoomsData(){
        try{
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/mock-rooms`)
            setRooms(res.data.rooms)
        }
        catch(err: any | AxiosError){
            console.log(err.response.message)
        }
    }

    useEffect(() => {
        fetchRoomsData()
    }, [])
    
    return (
        <main className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl">
                {/* ส่วนหัวของหน้า (Page Header) */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
                            ห้องประชุมทั้งหมด
                        </h1>
                        <p className="text-sm text-slate-500 mt-1">
                            เลือกห้องประชุมที่เหมาะกับจำนวนผู้เข้าร่วมและช่วงเวลาของคุณ
                        </p>
                    </div>
                </div>

                {/* ช่องค้นหา / ตัวกรองแบบโครงร่าง
                <div className="flex items-center gap-3">
                    <input
                    type="text"
                    placeholder="ค้นหาชื่อห้องหรือชั้น..."
                    className="w-full sm:w-64 px-4 py-2 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900"
                    />
                </div> */}
            </div>

            {/* Grid สำหรับวางการ์ดห้องประชุม (มือถือ 1 คอลัมน์ / แท็บเล็ต 2 / จอใหญ่ 3) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    rooms.map((room: RoomProps) => {
                        const {id, name, location, capacity, is_active} = room
                        return (
                            <RoomCard key={id} id={id} name={name} location={location} capacity={capacity} is_active={is_active} />
                        )
                    })
                }
            </div>
        </main>
    )
}

export default Rooms