import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import {
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'  
import { PopUpStyle } from "./index.style"
import SearchIcon from '@mui/icons-material/Search'
import { userActions, fetchVehicles } from "../../store/vehicle-slice"

const columns = [
  {
    value: "name"
  },
  {
    value: "model"
  },
  {
    value: "manufacturer"
  },
  {
    value: "vehicle_class"
  }
]

const PopUpComponent = ({open, handleClose, vehicleUrls}) => {
  const dispatch = useDispatch()

  const rows = useSelector((state) => state.vehicles.vehicles)

  const onClose = () => {
    handleClose()
  }
  useEffect(() => {
    dispatch(userActions.initVehicles())
    if(vehicleUrls) {
      dispatch(fetchVehicles(vehicleUrls))
    }
  }, [dispatch, userActions, vehicleUrls])

  useEffect(() => {
    console.log(rows) 
  }, [rows])

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <PopUpStyle>
        <TableContainer className="vehicle-table">
          <Table sx={{ minWidth: 650 }} aria-label="VehicleTable">
            <TableHead>
              <TableRow>
                {columns.map((col, index) => (
                  <TableCell key={index} align={col.align} width={`${100 / columns.length}%`}>
                    {col.value}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {!!rows && rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Typography>{row.name}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{row.model}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{row.manufacturer}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{row.vehicle_class}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </PopUpStyle>
    </Modal>
  )
}

export default PopUpComponent