import Main_Navbar from "../components-webapp/Main-Navbar";

export default function mainlayout({children}){
    return (
        <div>
            <Main_Navbar/>
            {children}
        </div>
    )
}