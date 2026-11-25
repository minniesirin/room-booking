import axios, { AxiosError } from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router"
import RoomCardSmall from "./RoomCardSmall"

interface RoomProps{
    id: number
    name: string
    location: string
    capacity: number
    is_active: boolean
}

function Home() {
    const [rooms, setRooms] = useState([])

    async function fetchRoomsData(){
        try{
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/mock-rooms`, {
                params: {
                    limit: 3
                }
            })   
            setRooms(res.data.rooms)    
        }
        catch(err: any | AxiosError){
            console.log(err.response.message);
        }
    }

    useEffect(() => {
        fetchRoomsData()
    }, [])

    return (
        <main className="min-h-screen flex flex-col">
            {/* Hero Section: เต็มหน้าจอ (100vh) จัดข้อความอยู่ตรงกลาง */}
            <section className="h-screen w-full flex items-center justify-center bg-slate-900 text-white px-4">
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-center tracking-tight">
                Meeting Room Booking System
                </h1>
            </section>

            {/* Content Section: ส่วนรายละเอียดด้านล่างเมื่อเลื่อนลงมา */}
            <section className="py-20 px-6 bg-white text-slate-800">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h2 className="text-2xl font-semibold">รายละเอียดเพิ่มเติม</h2>
                    <p className="text-slate-500">
                        พื้นที่สำหรับใส่ข้อมูลห้องประชุม ปฏิทินการจอง หรือปุ่มเริ่มต้นใช้งาน
                    </p>

                    {
                        rooms.map((room: RoomProps) => {
                            const { id, name, location, capacity, is_active } = room
                            return (
                                <RoomCardSmall key={id} id={id} name={name} location={location} capacity={capacity} is_active={is_active} />
                            )
                        })
                    }

                    <Link
                        to="/rooms"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 active:scale-[0.99] transition cursor-pointer"
                    >
                        <span>ดูเพิ่มเติม</span>
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default Home