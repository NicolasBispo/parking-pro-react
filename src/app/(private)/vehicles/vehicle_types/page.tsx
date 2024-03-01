"use client"
import { capitalize } from "@/app/helpers";
import { Button } from "@/components";
import {Table, TableHead, TableRow, TableHeader, TableBody, TableColumn } from "@/components/table";
import { VehicleTypeContext } from "@/contexts/vehicleTypeContext";
import { Pen } from "lucide-react";
import { useContext, useEffect } from "react";

export default function VehicleTypes(){
  const tableHeadOptions = ["ID", "Name", "Actions"];

  const {vehicleTypes, getVehicleTypes} = useContext(VehicleTypeContext)

  useEffect(()=> {
    getVehicleTypes()
  }, [])

  return (
    <Table>
      <TableHead>
        <TableRow>
          {tableHeadOptions.map((option, index) => (
            <TableHeader key={index}>{option}</TableHeader>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {vehicleTypes &&
          vehicleTypes.map((vehicleType, index) => (
            <TableRow key={index} bold={index % 2 === 1}>
              <TableColumn>{vehicleType.id}</TableColumn>
              <TableColumn>{capitalize(vehicleType.name)}</TableColumn>
              <TableColumn
                style={{
                  gap: "4px",
                  display: "flex",
                  flexDirection: "column",
                  padding: "5px"
                }}
              >
                <Button
                  label="Editar"
                  iconColor="#FFF"
                  variant="warning"
                  Icon={Pen}
                  position="left"
                />
                <Button
                  label="Excluir"
                  iconColor="#FFF"
                  variant="danger"
                  Icon={Pen}
                  position="left"
                />
              </TableColumn>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  )
}