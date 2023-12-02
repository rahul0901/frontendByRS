import { useNavigate } from "react-router-dom";

function Homepage(){

    const route = useNavigate();

    function goToLogin(){
        route('/login')
    }

    return(
        <>
            <div>HomePage</div>
            <button onClick={()=>route('/register')}>Register Here</button>
            <button onClick={goToLogin}>Login Here</button>
        </>
    )
}

export default Homepage;