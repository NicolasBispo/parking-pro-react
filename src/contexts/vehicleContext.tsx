'use client'
import { createVehicleRequest, deleteVehicleRequest, getAllVehiclesRequest, getVehicleRequest, updateVehicleRequest } from "@/requests"
import { Vehicle } from "@/types/vehicle"
import React, { PropsWithChildren, SetStateAction, createContext, useState } from "react"


type VehicleContextType = {
 vehicle: Vehicle | undefined
 setVehicle: React.Dispatch<SetStateAction<Vehicle | undefined>>
 vehicles: Vehicle[] | undefined
 setVehicles: React.Dispatch<SetStateAction<Vehicle[] | undefined>>
 getVehicles: () => Promise<void>
 getVehicle: (id: number) => Promise<void>
 createVehicle: (vehicle : Vehicle) => Promise<void>
 updateVehicle: (vehicle : Vehicle) => Promise<void>
 deleteVehicle: (id : number) => Promise<void>
}

export const VehicleContext = createContext({} as VehicleContextType)

export function VehicleProvider({ children }: PropsWithChildren) {

    const [vehicle, setVehicle] = useState<Vehicle | undefined>(undefined)
    const [vehicles, setVehicles] = useState<Vehicle[] | undefined>(undefined)
    

    async function getVehicles(){
        try{
        const data = await getAllVehiclesRequest()
        setVehicles(data)
        }
        catch(error){
            console.error(error)
        }
    }

    async function getVehicle(id: number){
        try{
        const data = await getVehicleRequest(id)
        setVehicle(data)
        }
        catch(error){
            console.error(error)
        }
    }

    async function createVehicle(vehicle: Vehicle){
        try{
            const data = await createVehicleRequest(vehicle)
            setVehicle(data)
        }
        catch(error){
            console.error(error)
        }
    }

    async function updateVehicle(vehicle: Vehicle){
        try{
            const data = await updateVehicleRequest(vehicle)
            setVehicle(data)
        }
        catch(error){
            console.error(error)
        }
    }

    async function deleteVehicle(id: number){
        try{
            await deleteVehicleRequest(id)
        }
        catch(error){
            console.error(error)
        }
    }




    return<VehicleContext.Provider 
    value={
        {
    vehicle, 
    setVehicle,
    vehicles,
    setVehicles,
    getVehicles,
    getVehicle,
    createVehicle,
    updateVehicle,
    deleteVehicle
    }}>
        {children}
    </VehicleContext.Provider>
}