class Visibility extends React.Component {

    constructor(props){
        super(props);
        this.showMe = this.showMe.bind(this);
        this.state = {
            visibility: false
        }
    }


    showMe(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })

    }

    render(){


        return (

            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.showMe}>{this.state.visibility ? "Hide Details" : "Show Details"}</button>
            {this.state.visibility && (
                <div>
                <p>Here is some information for you to show</p>
                </div>
            )}

                
            
            </div>


        )
    }
}

ReactDOM.render(<Visibility />, document.getElementById("app"));
// console.log("App.js is running!");

// const appRoot = document.getElementById("app");

// let show = false;

// const showMe = () => {

    

//     show = !show;
    
//     renderApp();

// }


// const template = (

//     <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={showMe}>Show Details</button>
        
//     </div>


// )




// const renderApp = () => {

//     const template = (

//         <div>
        
            
        
//         </div>


//     )

//     ReactDOM.render(template, appRoot);
// }





// renderApp();

// ReactDOM.render(template, appRoot);