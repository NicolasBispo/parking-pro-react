import { apiClient } from "@/config/apiClient";
import { VehicleType } from "@/types"; // Modificado para VehicleType

export async function getAllVehicleTypesRequest(){
    const { data } = await apiClient.get("/vehicle_types"); // Alterado para /vehicle_types
    return data;
}

export async function getVehicleTypeRequest(id: number){
    const { data } = await apiClient.get(`/vehicle_types/${id}`); // Alterado para /vehicle_types
    return data;
}

export async function createVehicleTypeRequest(vehicleType : VehicleType) { // Alterado para VehicleType
    const formData = new FormData();
    for (const [key, value] of Object.entries(vehicleType)) { // Alterado para vehicleType
        formData.append(`vehicle_type[${key}]`, value.toString()); // Alterado para vehicle_type
    }
    const { data } = await apiClient.post("/vehicle_types", formData); // Alterado para /vehicle_types
    return data;
}

export async function updateVehicleTypeRequest(vehicleType : VehicleType) { // Alterado para VehicleType
    const formData = new FormData();
    for (const [key, value] of Object.entries(vehicleType)) { // Alterado para vehicleType
        formData.append(`vehicle_type[${key}]`, value.toString()); // Alterado para vehicle_type
    }
    const { data } = await apiClient.patch(`/vehicle_types/${vehicleType.id}`, formData); // Alterado para /vehicle_types
    return data;
}

export async function deleteVehicleTypeRequest(id : number) {
    const { data } = await apiClient.delete(`/vehicle_types/${id}`); // Alterado para /vehicle_types
    return data;
}
