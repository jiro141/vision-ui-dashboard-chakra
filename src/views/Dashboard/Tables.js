import React from "react";
import { useEffect, useState } from "react";
// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Icon,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
//data endpoint
import { Clientes } from "api/controllers/Clients";
// Table Components
import TablesProjectRow from "components/Tables/TablesProjectRow";
import TablesTableRow from "components/Tables/TablesTableRow";

// Data
import { tablesProjectData, tablesTableData } from "variables/general";

// Icons
import { AiFillCheckCircle } from "react-icons/ai";

function Tables() {
  const [clientes, setClientes] = useState();
  const clients = async () => {
    const salveClients = await Clientes();
    setClientes(salveClients);
  };
  useEffect(() => {
    clients();
  }, []);
  console.log(clientes);
  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      {/* Authors Table */}
      <Card overflowX={{ sm: "scroll", xl: "hidden" }} pb="0px">
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="lg" color="#fff" fontWeight="bold">
            Clientes
          </Text>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color="#fff">
            <Thead>
              <Tr my=".8rem" ps="0px" color="gray.400">
                <Th
                  ps="0px"
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Nombre
                </Th>
                <Th
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Inscripción
                </Th>
                <Th
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Vencimiento
                </Th>
                <Th
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Asistencia
                </Th>
                <Th borderBottomColor="#56577A"></Th>
              </Tr>
            </Thead>
            <Tbody>
              {clientes?.map((row, index, arr) => {
                const fecha = new Date(row?.inscripcion); // Convertimos la cadena a un objeto Date
                const options = {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                }; // Definimos el formato de fecha que queremos
                const fechaFormateada = fecha.toLocaleDateString(
                  "es-ES",
                  options
                );
                const vence = new Date(row?.vencimiento); // Convertimos la cadena a un objeto Date
                const opt = {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                }; // Definimos el formato de fecha que queremos
                const VenceFormateada = vence.toLocaleDateString("es-ES", opt);
                return (
                  <TablesTableRow
                    name={row?.name}
                    logo={row?.avatar}
                    date={fechaFormateada}
                    vence={VenceFormateada}
                    email={row?.email}
                    status={row?.membrecia}
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default Tables;
