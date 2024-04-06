// import React from 'react';
// class Home extends React.Component{
//     render(){
//         return(
//             <div>
//             <h1 style={{color:'red',backgroundColor:'pink'}}>This is home component </h1>
//             </div>
//         )
//     }
// }
// export default Home;

export default function Home(){
    return(
        <div style={{width:'50%',backgroundColor:'black',border:'1px solid blue',display:'flex',flexDirection:'row'}}>
            <div className="card" style={{height:'300px',width:'100%',border:'1px solid blue',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
                <h1>Title</h1>
                <img style={{height:'150px',width:'150px'}} src="https://cdn.pixabay.com/photo/2024/01/15/04/30/woman-8509281_640.jpg"></img><br></br>
                <button>click here</button>
            </div>
            <div className="card1"style={{height:'300px',width:'100%',border:'1px solid blue',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
                <h1>img</h1>
                <img style={{height:'150px',width:'150px'}}src="https://cdn.pixabay.com/photo/2023/10/15/11/38/street-8316703_640.jpg"></img><br></br><button>click here</button>
            </div>
        </div>
    )
}