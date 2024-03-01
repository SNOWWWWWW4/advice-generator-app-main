import wisdom from "../Interface/interface";

const getData = async () => {
    const promise = await fetch('https://api.adviceslip.com/advice');
    const data = await promise.json();
    console.log(data.slip);
    return data.slip;
}

export default getData