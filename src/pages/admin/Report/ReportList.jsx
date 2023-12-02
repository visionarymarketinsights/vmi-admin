import React, { useState, useEffect } from 'react'
import { notifySuccess, notifyError } from '../../../App';
import axios from 'axios';
import "jodit";
import "jodit/build/jodit.min.css";
import { apiUrl, toCapitalCase } from '../../../constants';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';

export default function ReportList() {


    const [reportList, setReportList] = useState([]);
    const [markedId, setMarkedId] = useState(0);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const getAllReportOnce = () => {
            axios.get(`${apiUrl}/reports/`)
                .then(response => {
                    console.log(response);
                    let repList = response.data.data.map(res => {
                        res.abr = 'XXX';
                        return res;
                    })
                    setReportList(repList)
                })
                .catch(error => {
                    console.error('Error:', error);
                    notifyError('Something went wrong, please try again!');
                });
        }
        getAllReportOnce();
    }, []);

    const getAllReport = () => {
        axios.get(`${apiUrl}/reports/`)
            .then(response => {
                console.log(response);
                let repList = response.data.data.map(res => {
                    res.abr = 'XXX';
                    return res;
                })
                setReportList(repList)
            })
            .catch(error => {
                console.error('Error:', error);
                notifyError('Something went wrong, please try again!');
            });
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const openConfirmationModal = (id) => {
        setMarkedId(id);
        handleClickOpen();
    };

    const deleteReport = () => {
        axios.delete(`${apiUrl}/reports/${markedId}`)
            .then(response => {
                handleClose();
                getAllReport();
                notifySuccess("Report deleted successfully!");
            })
            .catch(error => {
                console.error('Error:', error);
                notifyError('Something went wrong, please try again!');
            });
    }

    return (
        <div>
            <div className="px-4 py-2 mx-auto md:py-12 max-w-7xl md:pt-8 sm:px-6 min-h-[90vh]">
                <div className='flex items-baseline justify-between pb-4 '>
                    <div className='text-xl font-semibold'>Reports</div>
                    <Link to='/report/add'>
                        <button type="submit" className="inline-flex items-center justify-center gap-4 px-6 py-2 font-semibold text-white transition-all bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2">
                            Add
                        </button>
                    </Link>
                </div>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 border dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr className='border '>
                                <th scope="col" className="px-6 py-3 w-[10%]">
                                    ID
                                </th>
                                <th scope="col" className="w-1/5 px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" className="w-[60%] px-6 py-3">
                                    Short Title
                                </th>
                                <th scope="col" className="w-[10%] px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {reportList.map((res, key) => {
                                return (
                                    <tr key={key} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td className="px-6 py-4">
                                            CGNRP{res.abr}{res.id}
                                        </td>
                                        <td className="px-6 py-4">
                                            {res.category_name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {toCapitalCase(res.url)}
                                        </td>
                                        <td className="flex gap-4 px-6 py-4">
                                            <Link to={`/report/edit/${res.id}`}>
                                                <IconButton>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                                                        <path d="M13.5 6.5l4 4" />
                                                    </svg>
                                                </IconButton>
                                            </Link>
                                            <IconButton onClick={() => openConfirmationModal(res.id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#597e8d" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M4 7l16 0" />
                                                    <path d="M10 11l0 6" />
                                                    <path d="M14 11l0 6" />
                                                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                                </svg>
                                            </IconButton>

                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    {reportList.length === 0 && <div className='flex justify-center p-4 border'>Loading</div>}
                </div>

            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Warning"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete this?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={deleteReport} autoFocus>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
