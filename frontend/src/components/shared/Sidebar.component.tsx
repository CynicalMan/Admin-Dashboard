import { LineStyle, Timeline, TrendingUp }from "@mui/icons-material"

const Sidebar = () => {
    return (
        <>
            <div className="flex-1 h-[calc(100vh-50px)] bg-[#fbfbff] sticky top-[50px]">
                <div className="p-5 text-gray-600">
                    <div className="mt-2">
                        <h3 className="text-xs text-gray-400">
                            Dashboard
                        </h3>
                        <ul className="p-1 list-none">
                            <li className="p-1 cursor-pointer flex items-center rounded-lg">
                                <LineStyle  />
                                Home
                            </li>
                            <li className="p-1 cursor-pointer flex items-center rounded-lg">
                                <Timeline  />
                                Analytics
                            </li>
                            <li className="p-1 cursor-pointer flex items-center rounded-lg">
                                <TrendingUp  />
                                Sales
                            </li>
                        </ul>
                    </div>
                    <div className="mt-2">
                        <h3 className="text-xs text-gray-400">
                            Dashboard
                        </h3>
                        <ul className="p-1 list-none">
                            <li className="p-1 cursor-pointer flex items-center rounded-lg">
                                <LineStyle  />
                                Home
                            </li>
                            <li className="p-1 cursor-pointer flex items-center rounded-lg">
                                <Timeline  />
                                Analytics
                            </li>
                            <li className="p-1 cursor-pointer flex items-center rounded-lg">
                                <TrendingUp  />
                                Sales
                            </li>
                        </ul>
                    </div>
                    <div className="mt-2">
                        <h3 className="text-xs text-gray-400">
                            Dashboard
                        </h3>
                        <ul className="p-1 list-none">
                            <li className="p-1 cursor-pointer flex items-center rounded-lg">
                                <LineStyle  />
                                Home
                            </li>
                            <li className="p-1 cursor-pointer flex items-center rounded-lg">
                                <Timeline  />
                                Analytics
                            </li>
                            <li className="p-1 cursor-pointer flex items-center rounded-lg">
                                <TrendingUp  />
                                Sales
                            </li>
                        </ul>
                    </div>
                    <div className="mt-2">
                        <h3 className="text-xs text-gray-400">
                            Dashboard
                        </h3>
                        <ul className="p-1 list-none">
                            <li className="p-1 cursor-pointer flex items-center rounded-lg">
                                <LineStyle  />
                                Home
                            </li>
                            <li className="p-1 cursor-pointer flex items-center rounded-lg">
                                <Timeline  />
                                Analytics
                            </li>
                            <li className="p-1 cursor-pointer flex items-center rounded-lg">
                                <TrendingUp  />
                                Sales
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar