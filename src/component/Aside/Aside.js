import React, { useEffect, useState } from 'react';
import './Aside.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLocation} from '@fortawesome/free-solid-svg-icons';







const Aside = ({ totalTime }) => {

    useEffect(() => {
        setTime(totalTime);
    }, [totalTime]);


    // use state for break time Start ...
    const [breakTime, setBreakTime] = useState(0);
    // use state for break time end ...



    // Set Break Time ON Local Storage Start.
    useEffect(()=> {
        if(breakTime !== 0)
        {
            localStorage.setItem('break-time', breakTime);
        }
    },[breakTime])
    // Set Break Time ON Local Storage End.




    // Get Break Time ON Local Storage Start.
    useEffect(()=> {
       const storedTime = localStorage.getItem('break-time');
       if(storedTime)
       {
        setBreakTime(storedTime);
       }
    },[])
    // Get Break Time ON Local Storage End.




    // IF Time ON Load is getting Zero initial Value... by this Error handling.
    const [timeDB, setTime] = useState(0);

    useEffect(() => {
        const timeDB = totalTime ? 0 : localStorage.getItem('time');
        if(timeDB)
        {
            setTime(parseInt(timeDB));
        }
        else
        {
            setTime(0);
        }
    }, [])






    // Toast Notification!
    const notify = () => toast.success("Congratulations!!!", {position: toast.POSITION.TOP_CENTER});





    return (
        <div className='aside'>
            {/* about me start */}
            <div className='profile-div'>
                <img src="https://scontent.fdac7-1.fna.fbcdn.net/v/t39.30808-6/305074090_1735002286863583_5117392947452006470_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mG5AUcODt6MAX_b36Z3&tn=S6zt8QSt2IRtr7Qi&_nc_ht=scontent.fdac7-1.fna&oh=00_AT_pUP_y3WKJK2aWr040Ijhmck73_OsyR1QIQ86l9pT6pg&oe=633A3313" alt="img" />
                <div className='profile-info'>
                <h5> NM Zubair Alam</h5>
                <p><FontAwesomeIcon icon={faLocation}></FontAwesomeIcon> Dhaka, Bangladesh</p>
                </div>
            </div>

            <div className='physical-info'>
                <div className='physical-info-child-div'>
                <h4>74<sub style={{fontWeight:'400'}}><small>kg</small></sub></h4>
                <small style={{fontWeight:'500'}}>Weight</small>
                </div>

                <div className='physical-info-child-div'>
                <h4>5.9</h4>
                <small style={{fontWeight:'500'}}>Height</small>
                </div>

                <div className='physical-info-child-div'>
                <h4>27<sub style={{fontWeight:'400'}}><small>yrs</small></sub></h4>
                <small style={{fontWeight:'500'}}>Age</small>
                </div>

            </div>

            {/* about me start*/}


            <h5>Add A Break</h5>
            <div className='button-div'>
                <button onClick={() => setBreakTime(10)}>10<span>s</span></button>
                <button onClick={() => setBreakTime(20)}>20<span>s</span></button>
                <button onClick={() => setBreakTime(30)}>30<span>s</span></button>
                <button onClick={() => setBreakTime(40)}>40<span>s</span></button>
                <button onClick={() => setBreakTime(50)}>50<span>s</span></button>
            </div>



            {/* Exercise Details Section Start */}
            <h5>Exercise Details</h5>
            <div className='exercise-time-div'>
                <div>
                <span className='exercise-title'>Exercise time</span>
                </div> 

                <div>
                <span>{timeDB} <span>seconds</span></span>
                </div>
            </div>

            <div className='break-time-div'>
                <div>
                <span className='break-title'>Break time:</span>
                </div> 

                <div>
                <span> {breakTime}<span> seconds</span></span>
                </div>
            </div>
            {/* Exercise Details Section End */}

            <button onClick={notify} className='activity-button'>Activity Completed</button>
            <ToastContainer />




        </div>
    );
};

export default Aside;