"use client"
import React, { createContext, PropsWithChildren, SetStateAction, useContext, useState } from "react";
import { createVehicleTypeRequest, deleteVehicleTypeRequest, getAllVehicleTypesRequest, getVehicleTypeRequest, updateVehicleTypeRequest } from "@/requests";
import { VehicleType } from "@/types";

type VehicleTypeContextType = {
    vehicleType: VehicleType | undefined;
    setVehicleType: React.Dispatch<SetStateAction<VehicleType | undefined>>;
    vehicleTypes: VehicleType[] | undefined;
    setVehicleTypes: React.Dispatch<SetStateAction<VehicleType[] | undefined>>;
    getVehicleTypes: () => Promise<void>;
    getVehicleType: (id: number) => Promise<void>;
    createVehicleType: (vehicleType: VehicleType) => Promise<void>;
    updateVehicleType: (vehicleType: VehicleType) => Promise<void>;
    deleteVehicleType: (id: number) => Promise<void>;
};

export const VehicleTypeContext = createContext({} as VehicleTypeContextType);

export function useVehicleTypeContext() {
    return useContext(VehicleTypeContext);
}

export function VehicleTypeProvider({ children }: PropsWithChildren<{}>) {
    const [vehicleType, setVehicleType] = useState<VehicleType | undefined>(undefined);
    const [vehicleTypes, setVehicleTypes] = useState<VehicleType[] | undefined>(undefined);

    async function getVehicleTypes() {
        try {
            const data = await getAllVehicleTypesRequest();
            setVehicleTypes(data);
        } catch (error) {
            console.error(error);
        }
    }

    async function getVehicleType(id: number) {
        try {
            const data = await getVehicleTypeRequest(id);
            setVehicleType(data);
        } catch (error) {
            console.error(error);
        }
    }

    async function createVehicleType(vehicleType: VehicleType) {
        try {
            const data = await createVehicleTypeRequest(vehicleType);
            setVehicleType(data);
        } catch (error) {
            console.error(error);
        }
    }

    async function updateVehicleType(vehicleType: VehicleType) {
        try {
            const data = await updateVehicleTypeRequest(vehicleType);
            setVehicleType(data);
        } catch (error) {
            console.error(error);
        }
    }

    async function deleteVehicleType(id: number) {
        try {
            await deleteVehicleTypeRequest(id);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <VehicleTypeContext.Provider
            value={{
                vehicleType,
                setVehicleType,
                vehicleTypes,
                setVehicleTypes,
                getVehicleTypes,
                getVehicleType,
                createVehicleType,
                updateVehicleType,
                deleteVehicleType
            }}
        >
            {children}
        </VehicleTypeContext.Provider>
    );
}
