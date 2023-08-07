// bad approach, but fixes react strict mode multiple fiering of useEffect

import {useRef, useEffect} from "react";


function useLessMount () {
    const isMountRef = useRef(false);
    useEffect(() => {
        isMountRef.current = true
    }, []);
    return isMountRef.current
};

export default useLessMount