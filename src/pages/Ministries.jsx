import { Outlet } from "react-router-dom";
import Ministry from "../components/Ministry";
import ministryPhoto from "../assets/health-sanitation.jpg"


export default function Ministries(){
    return (
        <>
            {/* <div>
                <Ministry to="ministries/children" photo={ministryPhoto} ministryName="Children Ministry"/>
                <Ministry to="ministries/children" photo={ministryPhoto} ministryName="Children Ministry"/>
                <Ministry to="ministries/children" photo={ministryPhoto} ministryName="Children Ministry"/>
            </div> */}
            <Outlet />
        </>
    )
}