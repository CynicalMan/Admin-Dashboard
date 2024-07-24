import { DeleteOutline } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Item } from "../../models/Item.model";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../../api/itemsApi";

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

    const handleDelete = (id:number) => {
        dispatch(deleteItem(id))
        setData(data.filter((item: Item) => item.id !== id));
    }
    
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'userId', headerName: 'UserId', width: 150 },
        { field: 'title', headerName: 'Title', width: 150 },
        { field: 'completed', headerName: 'Completed', width: 200 },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params: { row: { id: number ; }; }) => {
                return (
                <>
                    <Link to={"/items/update-item/" + params.row.id}>
                        <button className="border-none bg-blue-700 rounded-lg px-2.5 py-1 text-white cursor-pointer mr-5">Edit</button>
                    </Link>
                    <DeleteOutline onClick={() => handleDelete(params.row.id)} />
                </>
                );
            },
        }
    ];

    return (
        <div className="flex-1">
            <DataGrid
                rows={data}
                disableRowSelectionOnClick
                columns={columns}
                checkboxSelection
                initialState={{
                    pagination: { paginationModel: { pageSize: 5 } },
                }}
                pageSizeOptions={[5, 10, 25]}
            />
            <p>loading items</p>
        </div>
    );
};

export default ItemsList;
