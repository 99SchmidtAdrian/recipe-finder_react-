import loading from "../../images/refresh.svg";

const Fetching = (props) => {
    return <div className={'h-20 w-20 mx-auto animate-spin ' + props.className}><img src={loading} className="scale-x-[-1]" alt="loading icon"/></div>
}

export default Fetching;