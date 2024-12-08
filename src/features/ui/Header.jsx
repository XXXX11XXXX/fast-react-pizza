import { Link } from "react-router-dom";
import SearchOrder from "../order/SearchOrder";
import Username from "../user/Username";
function Header(){
    return(
        <header className="bg-yellow-500 p-8 uppercase px-4 py-4 border-b-2
         border-stone-300 flex items-center justify-between gap-4">
            <Link to="/" className="tracking-widest">Fast React Pizza Co.</Link>
            <SearchOrder />
            <Username />
        </header>
    )
}
export default Header;