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
    const [categoryList, setCategoryList] = useState([]);
    const [categoryId, setCategoryId] = useState(0);
    const [markedId, setMarkedId] = useState(0);
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(1);
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        getAllCategories();
    }, []);

    useEffect(() => {
        getAllReport();
    }, [page, categoryId]);

    const getAllReport = () => {
        let url = `${apiUrl}/reports/search?page=${page}&per_page=2000&keyword=${keyword}${categoryId > 0 ? '&category_id=' + categoryId : ''}`;
        axios.get(url)
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
    const getAllCategories = () => {
        axios.get(`${apiUrl}/category/`)
            .then(response => {
                console.log(response.data.data);
                setCategoryList(response.data.data)
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
            {/* <button type="submit" className="inline-flex items-center justify-center gap-4 px-6 py-2 font-semibold text-white transition-all bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2">
                                Add
                            </button> */}
            <div className="px-4 py-2 mx-auto md:py-12 max-w-7xl md:pt-8 sm:px-6 min-h-[90vh]">
                <div className='flex items-baseline justify-between pb-4 '>
                    <div className='flex items-center gap-4 text-xl font-semibold'>
                        <div>
                            Reports ({reportList.length})
                        </div>
                        <Link to='/report/add'>
                            <svg id="Capa_1" enableBackground="new 0 0 24 24" height={18} viewBox="0 0 24 24" width={18} xmlns="http://www.w3.org/2000/svg"><g id="_x33_"><path d="m18 2c2.206 0 4 1.794 4 4v12c0 2.206-1.794 4-4 4h-12c-2.206 0-4-1.794-4-4v-12c0-2.206 1.794-4 4-4zm0-2h-12c-3.314 0-6 2.686-6 6v12c0 3.314 2.686 6 6 6h12c3.314 0 6-2.686 6-6v-12c0-3.314-2.686-6-6-6z" /></g><g id="_x32_"><path d="m12 18c-.552 0-1-.447-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10c0 .553-.448 1-1 1z" /></g><g id="_x31_"><path d="m6 12c0-.552.447-1 1-1h10c.552 0 1 .448 1 1s-.448 1-1 1h-10c-.553 0-1-.448-1-1z" /></g></svg>

                        </Link>
                    </div>
                    <div className='flex items-center gap-8 '>

                        <div className='flex items-center gap-2 p-2 border rounded-md border-slate-300'>
                            <select name="cat" id="catid" value={categoryId} onChange={(e)=>setCategoryId(e.target.value)} className='outline-none w-60'>
                                <option value={0}>All</option>
                                {categoryList.map((r, i) => {
                                    return <option key={i} value={r.id}>{r.name}</option>
                                })}
                            </select>
                        </div>
                        <div className='flex items-center gap-2 p-2 border rounded-md border-slate-300'>
                            <input type="text" placeholder='Search' value={keyword} onChange={(e) => setKeyword(e.target.value)} onKeyDown={(e) => { if (e.key == 'Enter') getAllReport() }} className='outline-none text-slate-500' />
                            <svg id="Capa_1" onClick={getAllReport} enableBackground="new 0 0 512 512" height={18} viewBox="0 0 512 512" width={18} xmlns="http://www.w3.org/2000/svg"><g><g id="layer1_00000072963618680574873660000015406673454742146451_" transform="translate(-201.994 -372.644)"><g id="g18115" transform="translate(200 80)"><path id="path17034" d="m210.785 292.644c-115.018 0-208.79 93.772-208.79 208.79s93.772 208.79 208.79 208.79c48.319 0 92.86-16.566 128.313-44.287l131.212 131.213c9.994 9.992 26.196 9.992 36.19 0 9.992-9.994 9.992-26.196 0-36.19l-131.212-131.212c27.732-35.443 44.337-79.994 44.337-128.313 0-115.018-93.822-208.791-208.84-208.791zm0 51.186c87.355 0 157.655 70.249 157.655 157.605 0 87.355-70.299 157.605-157.655 157.605s-157.606-70.25-157.605-157.605c0-87.356 70.249-157.605 157.605-157.605z" /></g></g></g></svg>

                        </div>
                    </div>
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
