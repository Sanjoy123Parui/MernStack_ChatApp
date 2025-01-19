import { useEffect } from "react";

// here declare content function component
const Content = () => {

    useEffect(() => {
        return () => { }
    }, []);

    return (
        <>
            <h1>Hello</h1>
        </>
    )
}
// export content functional component
export default Content;