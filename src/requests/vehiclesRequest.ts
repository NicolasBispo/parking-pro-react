import { apiClient } from "@/config/apiClient";
import { Vehicle } from "@/types/vehicle";

export async function getAllVehiclesRequest(){
    const {data} = await apiClient.get("/vehicles")
    return data
}

export async function getVehicleRequest(id: number){
    const {data} = await apiClient.get(`/vehicles/${id}`)
    return data
}

export async function createVehicleRequest(vehicle : Vehicle) {
    const formData = new FormData();
    for (const [key, value] of Object.entries(vehicle)) {
        formData.append(`vehicle[${key}]`, value.toString());
    }
    const { data } = await apiClient.post("/vehicles", formData);
    return data;
}

export async function updateVehicleRequest(vehicle : Vehicle) {
    const formData = new FormData();
    for (const [key, value] of Object.entries(vehicle)) {
        formData.append(`vehicle[${key}]`, value.toString());
    }
    const { data } = await apiClient.patch(`/vehicles/${vehicle.id}`, formData);
    return data;
}

export async function deleteVehicleRequest(id : number) {
    const { data } = await apiClient.delete(`/vehicles/${id}`);
    return data;
}
