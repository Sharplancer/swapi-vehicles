import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import PopUpComponent from "../PopUpComponent"
import SearchBox from "../SearchBox";
import { fetchUsers } from "../../store/users-slice";
import { UserTableStyle } from "./index.style";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Pagination,
  Button
} from '@mui/material'

const columns = [
  {
    value: "name"
  },
  {
    value: "height"
  },
  {
    value: "mass"
  },
  {
    value: "gender"
  },
  {
    value: "edited"
  },
  {
    value: "action"
  },
]

const formatDate = (date) => {
  const nDate = new Date(date)
  const YYYY = nDate.getFullYear()
  const MM = nDate.getMonth() + 1
  const DD = nDate.getDate()
  const HH = nDate.getHours()
  const mm = nDate.getMinutes()
  return `${YYYY}-${MM}-${DD} ${HH}:${mm}`
}

const UsersTable = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.users.status);
  const count = useSelector((state) => state.users.count);
  const users = useSelector((state) => state.users.users);

  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState(null);
  const [vehicles, setVehicles] = useState([])
  const [open, setOpen] = useState(false);

  const rows = React.useMemo(
    () => users || [],
    [users, currentPage],
  )

  const onPageChange = (event, page) => {
    setCurrentPage(page)
  }

  useEffect(() => {
    dispatch(fetchUsers(search, currentPage));
  }, [dispatch, currentPage, search]);

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      setCurrentPage(1);
      setSearch(e.target.value);
    }
  }

  const handleOpen = (e, index) => {
    setVehicles(rows[index].vehicles)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <UserTableStyle>
      <SearchBox onKeyDown={onKeyDown}/>
      <TableContainer className="data-table">
        <Table sx={{ minWidth: 650 }} aria-label="UserTable">
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
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Typography>{row.name}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{row.height}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{row.mass}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{row.gender}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{formatDate(row.edited)}</Typography>
                </TableCell>
                <TableCell>
                  <Button variant="outlined" size="small" onClick={(e) => handleOpen(e, index)}>Show vehicles</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PopUpComponent
        open={open}
        handleClose={handleClose}
        vehicleUrls={vehicles}
      />
      {!!currentPage && !!count && onPageChange && (
        <Pagination
          className="table-pagination"
          count={Math.ceil(count / 10)}
          page={currentPage}
          onChange={onPageChange}
        />
      )}
    </UserTableStyle>
  )
}

export default React.memo(UsersTable);