import { useEffect, useState } from "react";

const Route = ({path, children}) => {

    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    useEffect(() => {


        const onPathChange = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', onPathChange);

        return (() => {
            window.removeEventListener('popstate', onPathChange);
        });
    }, []);


    return currentPath === path ? children : null;
}

export default Route;