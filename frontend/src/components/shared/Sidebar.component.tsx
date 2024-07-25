import {  FormatListBulleted, PostAdd }from "@mui/icons-material"
import React from "react"
import { Link } from "react-router-dom"
import ThemePicker from "./ThemePicker"

const Sidebar : React.FC = () => {
    
    return (
        <>
            <div className={`md:h-[calc(100vh-48px)] w-full md:max-w-[15rem] bg-primary sticky bottom-0 md:top-[48px]`}>
                <div className="p-2 lg:p-5 md:p-0 text-secondary">
                    <div className="mt-2">
                        <h3 className="text-xs hidden md:block text-secondary">
                            Items
                        </h3>
                        <ul className="p-1 w-full flex flex-row justify-center md:justify-normal md:grid gap-2  list-none">
                            <li>
                                <Link to="/items" className=" border-solid border border-secondary p-1 cursor-pointer flex items-center justify-center md:justify-start rounded-lg">
                                    <div className="rounded-lg p-1 ">
                                        <FormatListBulleted  />
                                    </div>
                                    <span className="ml-1 hidden md:block">
                                        All Items
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/items/add-item" className=" border-solid border border-secondary p-1 cursor-pointer flex items-center justify-center md:justify-start rounded-lg">
                                    <div className="rounded-lg p-1 ">
                                        <PostAdd  />
                                    </div>
                                    <span className="ml-1 hidden md:block">
                                        Add Item
                                    </span>
                                </Link>
                            </li>
                            <li className=" border-solid border border-secondary p-1 cursor-pointer  rounded-lg">
                                <ThemePicker />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar