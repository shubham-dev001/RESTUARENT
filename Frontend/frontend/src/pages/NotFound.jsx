import React from "react";
import {Link} from "react-router-dom"
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function NotFound() {
    return(
        <>
        <section className="notFound"> 
          <div className="container">
            <img src="/notFound.svg" alt="notFound" />
            <p>Looks Like you are Lost</p>
            <Link to = {"/"}>
             Back to Home {""}
             <span>
                <HiOutlineArrowNarrowRight/>
             </span>
            </Link>
          </div>
        </section>
        </>
    )
}
