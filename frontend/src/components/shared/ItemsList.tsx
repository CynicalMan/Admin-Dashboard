import { Check, Close, Edit,Delete } from "@mui/icons-material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Item } from "../../models/Item.model";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../api/itemsApi";
import { toast } from "react-toastify";


interface ItemsListProps {
    items: Item[];
    error: string | null;
}

const ItemsList: React.FC<ItemsListProps> = ({ items, error }) => {
    const [data, setData] = useState(items);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        setData(items);
    }, [items]);

    const handleDelete = (id: number) => {
        dispatch(deleteItem(id));
        setData(data.filter((item: Item) => item.id !== id));
        toast.success(`Item with id : ${id} deleted!`)
    };

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'userId', headerName: 'UserId', width: 100 },
        { field: 'title', headerName: 'Title', flex: 1, minWidth: 200 },
        { 
            field: 'completed', 
            headerName: 'Completed', 
            width: 100,
            
            renderCell: (params) => {
                return(
                    <div className="h-full flex justify-center items-center">
                        {params.value ? <Check className="text-primary" /> : <Close className="text-primary" />}
                    </div>
                )
            }
        },
        {
            field: "update",
            headerName: "Update",
            width: 80,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/items/update-item/${params.row.id}`} className="border-none bg-primary rounded-lg px-2 py-2 text-tPrimary cursor-pointer mr-5">
                            <Edit/>
                        </Link>
                    </>
                );
            },
        },
        {
            field: "delete",
            headerName: "Delete",
            width: 60,
            renderCell: (params) => {
                return (
                    <button>
                        <Delete className="cursor-pointer text-primary" onClick={() => handleDelete(params.row.id)} />
                    </button>
                );
            },
        },
    ];

    return (
        <div className="p-4 sm:p-6 lg:p-2">
            <div className="bg-white rounded-lg shadow-md h-full max-h-screen overflow-hidden">
                <div className="h-full max-h-[calc(100vh-10rem)] overflow-y-auto">
                <DataGrid
                    rows={data}
                    disableRowSelectionOnClick
                    columns={columns}
                    checkboxSelection
                    initialState={{
                    pagination: { paginationModel: { pageSize: 10 } },
                    }}
                    pageSizeOptions={[10, 15, 25]}
                    autoHeight={false}
                />
                </div>
            </div>
        </div>
    );
};

export default ItemsList;
