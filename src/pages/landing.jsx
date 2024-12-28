import Header from "../components/header";
import ToDoContainer from "../components/todocontainer";
import Card from "../components/card";


import { useLocation } from "react-router-dom";

function Landing() {
    const data = useLocation()
    console.log(data)
    return (
        <>
            <div className="bg-black p-16">
                <div className="bg-[#EFEFEF] p-10 border rounded-md">
                    <Header name={data.state.user} />
                    <div className="flex  justify-between flex-wrap my-5 gap-7">
                        <Card bgColor={"#8272DA"} title={23} subtitle={"Chennai"} />
                        <Card bgColor={"#FD6663"} title={"December"} subtitle={"14:23:08"} />
                        <Card bgColor={"#FCA201"} title={"Build using"} subtitle={"React"} />
                    </div>
                    <ToDoContainer />
                </div>
            </div>
        </>
    )
}
export default Landing