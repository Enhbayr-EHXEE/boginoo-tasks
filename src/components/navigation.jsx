import React, { useContext, useState, useRef, useEffect } from 'react';
import { Button } from './';
import M from 'materialize-css'
import { useHistory, useLocation } from "react-router-dom";
import { AuthContext, AuthProvider } from '../provider/provider'
import { firebase, db, storage, auth } from '../firebase'
export const Navigation = (props) => {
    let history = useHistory();
    let location = useLocation();
    let auth = useContext(AuthContext);
    const ref = useRef();
    useEffect(() => {
        M.Dropdown.init(ref.current, {
        })
    }, [ref])
    return (
        <div className='w100 flex justify-end items-center'>
            <div className='font-ubuntu fs-20 lh-23 bold c-primary'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
            {
                (!auth.userReady) ? <Button className="btn font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary " onClick={() => { history.push("/login"); }}>Нэвтрэх</Button> :
                    <div>
                        <ul id='dropdown1' className='dropdown-content'>
                            <li><a href="#!">one</a></li>
                        </ul>
                        <div className="flex flex-center"><a className="flex justify-center items-center dropdown-trigger ml-4 font-ubuntu fs-20 lh-23 bold black-text" href="#" data-target="dropdown1" ref={ref}>{auth.email}<i className="material-icons c-primary">keyboard_arrow_down</i></a></div>

                    </div>
            }
        </div>
    );
};