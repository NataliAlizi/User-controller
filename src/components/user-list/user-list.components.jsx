//import { Component } from 'react';
import { useState, useEffect } from 'react';
import User from '../user/user.components';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './user-list.style.css';

const UserList = (props) => {
    const { usersList } = props;

    return (
        <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table" id="usersListTable">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Picture&nbsp;</TableCell>
                        <TableCell align="right">Full name&nbsp;</TableCell>
                        <TableCell align="right">Email&nbsp;</TableCell>
                        <TableCell align="right">Gender&nbsp;</TableCell>
                        <TableCell align="right">Age&nbsp;</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {usersList.map((data) => (
                <User user={data} />
               
              ))}
                </TableBody>
            </Table>
        </TableContainer>
    );


}

export default UserList;