console.log("App.js is running!");



const appObj = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer.",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;

    if (option){
        appObj.options.push(option);
        e.target.elements.option.value = "";
        renderApp();
        console.log(appObj.options)
    }

}

const removeAll = () => {
    
    appObj.options = [];
    renderApp();
}


const template = (
    <div>
        <h1>{appObj.title}</h1>
        {appObj.subtitle && <p>{appObj.subtitle}</p>}
        <p>{appObj.options.length > 0 ? "Here are your options" : "No options"}</p>
        <p>{appObj.options.length}</p>
        <button onClick={removeAll}>Remove All</button>
        
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"></input>
            <button>Add Option</button>
            
        </form>
       
    </div>
);

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random()* appObj.options.length);
    const option = appObj.options[randomNum];
    alert(option);
    
}


const appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);

const numbers = [55,101,1000];

const renderApp = () => {
    const template = (
        <div>
            <h1>{appObj.title}</h1>
            {appObj.subtitle && <p>{appObj.subtitle}</p>}
            <p>{appObj.options.length > 0 ? "Here are your options" : "No options"}</p>
            <button disabled={appObj.options.length ===0} onClick={onMakeDecision}>What should I do?</button>

            <button onClick={removeAll}>Remove All</button>
           
            
            <ol>
               {appObj.options.map((option) =>{
                   return <li key={option}>{option}</li>
               })}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
                
            </form>
           
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderApp();