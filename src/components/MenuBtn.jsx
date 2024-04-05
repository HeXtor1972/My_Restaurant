import React from "react";
import { Link } from "react-router-dom";

export function MenuBtn() {
    return(
        <div>
            <Link>
                <button type="button" className="btn btn-success btn-lg">Nuestro Menu</button>
            </Link>
        </div>
    )

}