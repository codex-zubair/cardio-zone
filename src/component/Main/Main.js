import React, { useEffect, useState } from 'react';
import { sumTime } from '../../utilities/calculation';
import Accordion from '../Accordion/Accordion';
import Aside from '../Aside/Aside';
import Card from '../Card/Card';
import Header from '../Header/Header';
import './Main.css';

const Main = () => {

    // stored Data in use State Start
    const [exercises, setExercises] = useState([]);
    // stored Data in use State End



    // loading Data From the Database Start.
    useEffect(() => {
        fetch('cardioDB.json')
            .then(response => response.json())
            .then(data => setExercises(data))
    }, [])
    // loading Data From the Database End.



    const [addedTime, setAddedTime] = useState([]);



    // Exercise Time adding Function start.
    const addExerciseTime = (time) => {
        setAddedTime([...addedTime, time])
    }
    // Exercise Time adding Function end.


    const totalTime = sumTime(addedTime);


    // IF TIME IS NOT ZERO TIME WILL STORE
    useEffect(() => {
        if (totalTime !== 0) {
            localStorage.setItem('time', totalTime);
        }
    }, [totalTime]);




    return (
        <main>



            {/* main Section Start */}
            <section className='main-child-section'>
                <Header></Header>

                {/* Card Section Start */}
                <section className='card-section'>

                    {exercises.map(exercise => <Card addExerciseTime={addExerciseTime} key={exercise.id} exercise={exercise}></Card>)}

                </section>
                {/* Card Section End */}


                {/* quiz section start */}
                <div className='quiz-div'>
                <Accordion></Accordion> 
                </div>
                {/* quiz section End */}


            </section>
            {/* main Section End */}




            {/* Aside Section Start */}
            <section className='aside-section'>

                <Aside totalTime={totalTime}></Aside>

            </section>
            {/* Aside Section End */}
        </main>
    );
};

export default Main;