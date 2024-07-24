import {  LineStyle, LocalAtm, PermIdentity, Storefront }from "@mui/icons-material"
import React from "react"
import { Link } from "react-router-dom"

const Sidebar : React.FC = () => {
    return (
        <>
            <div className=" h-[calc(100vh-50px)] border-blue-600 border-4 bg-[#fbfbff] sticky top-[50px]">
                <div className="p-5 text-gray-600">
                    <div className="mt-2">
                        <h3 className="text-xs hidden md:block text-gray-400">
                            Dashboard
                        </h3>
                        <ul className="p-1 list-none">
                            <li>
                                <Link to="/" className="p-1 cursor-pointer flex items-center rounded-lg">
                                    <LineStyle  />
                                    <span className="ml-1 hidden md:block">
                                        Home
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-2">
                        <h3 className="text-xs hidden md:block text-gray-400">
                            Items
                        </h3>
                        <ul className="p-1 list-none">
                            <li>
                                <Link to="/items" className="p-1 cursor-pointer flex items-center rounded-lg">
                                    <PermIdentity  />
                                    <span className="ml-1 hidden md:block">
                                        All Items
                                    </span>
                                </Link>
                            </li>
                            <li className="p-1 cursor-pointer flex items-center rounded-lg">
                                <Link to="/items/add-item" className="p-1 cursor-pointer flex items-center rounded-lg">
                                    <Storefront  />
                                    <span className="ml-1 hidden md:block">
                                        Add Item
                                    </span>
                                </Link>
                            </li>
                            <li className="p-1 cursor-pointer flex items-center rounded-lg">
                                <LocalAtm  />
                                <span className="ml-1 hidden md:block">
                                    Transactions
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar