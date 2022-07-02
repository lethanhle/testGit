import React from "react";
import ChildComponent from "./ChildComponent";
import Addcomponent from "./Addcomponent"

class MyComponent extends React.Component {
    state = {

        arrJobs: [
            { id: 'abcJob1', title: 'Developer', salary: '500' },
            { id: 'abcJob2', title: 'Testers', salary: '300' },
            { id: 'abcJob3', title: 'Project managers', salary: '800' },
        ]
    }

    addNewJob = (job) => {

        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
        // let currenJobs = this.state.arrJobs;
        // currenJobs.push(job)
        // this.setState({
        //     arrJobs: currenJobs
        // })

    }

    deleteAJob = (job) => {


        let currenJobs = this.state.arrJobs;

        currenJobs = currenJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currenJobs
        })


    }
    // deletaAJob = (job) => {
    //     this.setState({
    //         currenJobs: [...this.state.arrJobs.filter(item => item.id !== job.id)]
    //     })
    // }

    render() {
        console.log('>>>>> call render: ', this.state)
        return (

            <>
                <Addcomponent
                    addNewJob={this.addNewJob}
                />

                <ChildComponent

                    arrJobs={this.state.arrJobs}
                    deleteAjob={this.deleteAJob}
                />
            </>

        )

    }
}

export default MyComponent;