import React from 'react';
import Card from './Card'
import ProjectData from './ProjectData'


const Projects = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Projects</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                ProjectData.map((val,ind) => {
                                    return <Card key={ind} imgsrc={val.imgsrc} title={val.title} content={val.content} vlink={val.link}/>
                                })
                            }                           
                        </div>                        
                    </div>
                </div>
            </div>
        </>
    );

};

export default Projects;