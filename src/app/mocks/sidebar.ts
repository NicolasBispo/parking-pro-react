import { CarFront, ParkingMeter, Users } from "lucide-react";

export const sidebarOptions = [
    {
        label: "Vehicle",
        type: "dropdown",
        Icon: CarFront,
        options: [
            {
                label: "Registered Vehicles",
                type: "anchor",
                link: "/vehicles/list"
            },
            {
                label: "Vehicle Types",
                type: "anchor",
                link: "/vehicles/vehicle_types"
            }
        ]
    },
    {
        label: "Parking control",
        type: "dropdown",
        Icon: ParkingMeter,
        options: [
            {
                label: "Parking records",
                type: "anchor",
                link: "/parking/parking_records"
            },
            {
                label: "Parking lots",
                type: "anchor",
                link: "/parking/lots"
            }
        ]
    },
    {
        label: "Clients",
        Icon: Users,
        type: "anchor",
        path: "/clients"
    }
]