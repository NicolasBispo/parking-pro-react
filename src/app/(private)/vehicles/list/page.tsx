"use client";

import { capitalize } from "@/app/helpers";
import { Button } from "@/components";
import {
  Table,
  TableBody,
  TableColumn,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";
import { VehicleContext } from "@/contexts";
import { Pen } from "lucide-react";
import { useContext, useEffect } from "react";

export default function List() {
  const tableHeadOptions = ["ID", "Plate", "Vehicle Type", "Actions"];

  const { getVehicles, vehicles } = useContext(VehicleContext);

  useEffect(() => {
    getVehicles();
  }, []);

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
        {vehicles &&
          vehicles.map((vehicle, index) => (
            <TableRow key={index} bold={index % 2 === 1}>
              <TableColumn>{vehicle.id}</TableColumn>
              <TableColumn>{vehicle.plate}</TableColumn>
              <TableColumn>{capitalize(vehicle.vehicle_type.name)}</TableColumn>
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
  );
}
