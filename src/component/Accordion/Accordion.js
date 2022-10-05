import React from 'react';

const Accordion = () => {
    return (
        <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    How Does React Work?
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <strong>React:</strong> <u>is a free and open-source front-end JavaScript library for building user interfaces based on UI components.</u>

                <p>
                <strong>React work by reading these objects and uses them to create HTML elements on the virtual DOM, after which it gets synced with the real DOM. </strong>
                 So, we'll have trees of objects on the virtual DOM and trees of objects on the real DOM. React automatically updates the associated DOM element when we change data on a React element.
                </p>
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Difference Between State and Props.
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <strong>State:</strong> is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. 
                <p><strong>Props:</strong> on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</p>
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    About UseEffect.
                </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>UseEffect  Hook allows us to perform side effects in your components. </strong>
                    <p>syntax: useEffect(function)

                        useEffect accepts a function as an argument which will run after every render cycle by default. This default behavior can be adjusted by user by passing a second argument to useEffect that is the array of values that the effect depends on.</p>
                        
                        <strong>
                        We can tell React that component needs to do something after render if needed we can render whenever we want by depending on anything using UseEffect Dependency. 
                        </strong>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Accordion;