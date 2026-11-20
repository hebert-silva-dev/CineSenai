import { useState } from "react";

export const Constador = () => {
    
    const [curtidas , setCurtidas] = useState(0);

    return(
        <button className="btn btn-primary" onClick={() => setCurtidas(curtidas + 1)}>
            Curtidas: {curtidas}
        </button>
    );
};