import React from "react";

// class ChildComponent extends React.Component {
//     state = {
//         firstName: '',
//         lastName: '',
//     }
//     handleChangeFirstName = (event) => {
//         this.setState({
//             firstName: event.target.value
//         })
//     }
//     handleChangeLirstName = (event) => {
//         this.setState({
//             lastName: event.target.value
//         })
//     }
//     handlesubmit = (event) => {
//         event.preventDefault()
//         alert('click')
//     }

//     render() {
//         //let name = this.props.name;
//         //let age = this.props.age;

//         let { name, age, address, arrJobs } = this.props;

//         return (
//             <>
//                 {/* <div>
//                 ChildComponent name: {this.props.name} -  {this.props.age}
//                 </div> */}
//                 <div className="job-lists">
//                     {
//                         arrJobs.map((item, index) => {
//                             if (item.salary >= 500)
//                                 return (
//                                     <div key={item.id}>
//                                         {item.title} - {item.salary}$
//                                     </div>
//                                 )
//                         })
//                     }
//                 </div>
//             </>


//         )

//     }
// }
class ChildComponent extends React.Component {


    state = {
        showJobs: false
    }
    handleShowhide = (status) => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    handleOnclickDelete = (job) => {
        console.log('>>>handleOnclickDelete', job)
        console.log('>>>check data input: ', this.state)
        this.props.deleteAJob(job)
    }
    render() {

        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        console.log('>>check', check)

        return (
            <>
                {showJobs === false ? <div>
                    <button onClick={() => this.handleShowhide()}>show</button>
                </div>
                    :
                    <>
                        <div className="job-lists">
                            {
                                arrJobs.map((item, index) => {
                                    //if (item.salary >= 500)
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}
                                            <></> <span onClick={() => this.handleOnclickDelete(item)}>x</span>
                                        </div>
                                    )

                                })
                            }
                        </div>
                        <div><button onClick={() => this.handleShowhide()}> Hide</button></div>
                    </>
                }

            </>


        )

    }
}

export default ChildComponent;