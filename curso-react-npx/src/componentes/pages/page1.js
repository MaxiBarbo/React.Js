import React, { useEffect } from "react";

export default function Listados() {
    useEffect(() => {
        const apiListados = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";

        fetch(apiListados)
        .then((res) => res.json())
        .then((res) => console.log(res))
    }, []);

    return (
        <>
           
        </>
    )
}

