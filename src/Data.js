export const apiKey= "AIzaSyA_z6JScblU8INqyV17PGwibF_y2pCzN24";

 export const value_converter =(value)=>{
    if(value >= 1000000000){
        return (value / 1000000000).toFixed(1) + "B"
    }
    else if (value >= 1000000){
        return (value / 1000000 ).toFixed(1) + "M"
       
    }
    else if (value >= 1000){
        return (value/1000).toFixed(1) + "K"
    }
    else{
        return value
    }
}