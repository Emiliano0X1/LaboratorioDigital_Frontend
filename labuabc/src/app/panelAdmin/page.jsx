"use client";

import RoleAssign from "../rolesView/page"
import Suggestions from "../suggestions/page"
import SideBar from "../compoments/SideBar"
import { usePages } from "../context"
import { useUser } from "../contextUser";


export default function PanelAdmin(){

    const pageDash = usePages();

    const pages = [
        { label : <RoleAssign></RoleAssign> , value : "rolesView"},
        { label : <Suggestions></Suggestions> , value : "suggestions"}
    ]


    return (
         <div className="bg-slate-300 flex flex-row">
            <SideBar></SideBar>
            <div className="flex-1 flex flex-col">
                {pages.find((page) => page.value === String(pageDash.pageDash))?.label}
            </div>    
        </div>
    )
}