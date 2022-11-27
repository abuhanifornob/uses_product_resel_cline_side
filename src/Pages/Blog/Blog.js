import React from 'react';
import prototype from "../../assets/icons/Untitled-Diagram108.png"

const Blog = () => {
    return (
        <div className='m-32'>
            <h3 className='text-3xl font-extrabold text-primary my-4 text-center font-serif'>Our Blog Section & Some Question and Solve</h3>
            
            <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">

                    <h3 className="text-xl font-bold">How Does Prototypical Inheritance Work ?</h3>
                </div>
                <div className="collapse-content">
                    <div className="hero  bg-base-200">
                        <div className="hero-content flex-col lg:flex-row">
                            <div>
                                <h1 className="text-2xl font-bold">Prototypical Inheritance Work</h1>
                                <p className="py-6">
                                    Image result for Prototypical Inheritance Work <br />
                                    The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                                </p>

                            </div>
                            <img src={prototype} alt="" className="max-w-sm rounded-lg shadow-2xl" />

                        </div>
                    </div>
                </div>
            </div>
            <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">

                    <h3 className="text-xl font-bold">What is a Unit Test ? Why should we write unit tests.</h3>
                </div>
                <div className="collapse-content">
                    <h3 className="text-xl">What is a Unit Test?</h3>
                    <p><br /><br /> Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.<br /><br />

                        Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.<br /><br />

                        Unit testing is a component of test-driven development (TDD), a pragmatic methodology that takes a meticulous approach to building a product by means of continual testing and revision. This testing method is also the first level of software testing, which is performed before other testing methods such as integration testing. Unit tests are typically isolated to ensure a unit does not rely on any external code or functions. Testing can be done manually but is often automated.<br /><br />
                    </p>
                    <br /><br />
                    <h3 className="text-xl">Why should we write unit tests?</h3>
                    <br /><br />
                    <p>
                        <strong> Types of unit testing</strong>  <br /><br />
                        Unit tests can be performed manually or automated. Those employing a manual method may have an instinctual document made detailing each step in the process; however, automated testing is the more common method to unit tests. Automated approaches commonly use a testing framework to develop test cases. These frameworks are also set to flag and report any failed test cases while also providing a summary of test cases. <br /><br />

                        <strong> Advantages and disadvantages of unit testing</strong><br />
                        Advantages to unit testing include: <br /><br />

                        1. The earlier a problem is identified, the fewer compound errors occur. <br />
                        2. Costs of fixing a problem early can quickly outweigh the cost of fixing it later. <br />
                        3. Debugging processes are made easier. <br />
                        4. Developers can quickly make changes to the code base. <br />
                        5. Developers can also re-use code, migrating it to new projects. <br />
                    </p>

                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">

                    <h3 className="text-xl font-bold">What are the different ways to manage a state in a React Application?</h3>
                </div>
                <div className="collapse-content">
                    <p> <br /><strong>Different ways to handle state in React applications</strong> <br /><br />

                        In React apps, there are at least seven ways to handle the state. Let us briefly explore a few of them in this part. <br /><br />

                        URL <br />
                        <strong> We can use URL to store some data e.g.</strong><br />

                       1. The id of the current item, being viewed <br></br>
                        2.Filter parameters <br />
                        3.Pagination offset and limit <br />
                        4.Sorting data <br />

                    </p>
                </div>
            </div>
            <div tabIndex={3} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">

                    <h3 className="text-xl font-bold">React Vs Angular Vs Vue?</h3>
                </div>
                <div className="collapse-content">
                    <p><br /><br />The family of JavaScript frameworks is huge. Each has been built to solve different tasks, but their functionality can be extended by using various third-party solutions, which require different levels of expertise. They are all different. <br /><br />
                        Angular, React and Vue are the top players among JavaScript frameworks for frontend development. They can all be used for any requirement. However, each framework offers something it is extremely good at.<br /><br />

                        You don’t need React to build a static blog, but this technology will make a dynamic website work flawlessly. Its sibling, React Native, enables native mobile apps to be built using JavaScript!<br /><br />

                        Angular is helpful for building apps with extensive structures. This framework will  impress mobile users with first-class progressive web apps and hybrid mobile apps.<br /><br />

                        Vue combines the best features of Angular and React, and is continually expanding its position in the world of web development. With its performance benefits, Vue is already beating its competitors.<br /><br />
                        JavaScript frameworks perform magic when building user interfaces. They offer solutions for quick and robust development, enabling you to build more sophisticated interfaces, and extends the possibilities on the client side of the web application.<br /><br />

                        Like this article? We have more interesting tips to share! Subscribe to our blog and don't miss our newest articles!<br /><br />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;