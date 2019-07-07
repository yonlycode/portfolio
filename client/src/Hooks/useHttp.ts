import {useState , useEffect, useCallback} from 'react';
import axios from 'axios';
import GetToken from '../Auth/GetToken';


const useHttpGetOnMount = (url :string , dependencies :string[], admin :boolean = false):any[] =>{

    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({});
    const [error, setError] = useState("");

    useEffect(()=>{
        setIsLoading(true);
        let headers = () => {
            if(admin){
                return {"headers":{'Authorization':"Bearer "+GetToken()}}
            }
        }
        axios.get(url,headers())
        .then(res=>{
            if(res.status){
                setData(res.data)
            }            
        })
        .catch(e=>{
            setError("can't fetch")
        })
        .then(()=>{
            setIsLoading(false)            
        })
    },[dependencies])

    return [isLoading, data, error]
}


const useHttpGet = (url :string, dependencies :any[] ,admin :boolean = false) =>{
    const [isSending, setIsSending] = useState(false);
    const [response, setResponse] = useState({});
    const [error, setError] = useState("");

    let headers = () => {
        if(admin){
            return {"headers":{'Authorization':"Bearer "+GetToken()}}
        }
    }
    const sendRequest = useCallback( async () => {
        // don't send again while we are sending
        if (isSending) return

        //update state
        setIsSending(true) 

        // send the actual request
        await axios.get(url,headers())
        .then(res=>{
            console.log(res);
            setResponse(res.data);
            return res;
        })
        .catch(e=>{
            console.log(e);
            setError("can't fetch");
            return e;
        })
        .then(()=>{
            setIsSending(false)            
        })

    },[])
    return [ isSending, sendRequest, response, error]
}


const useHttpPost = (url :string, payload :object , dependencies :any[] ,admin :boolean = false) :any[] =>{

    const [isSending, setIsSending] = useState(false);
    const [response, setResponse] = useState({});
    const [error, setError] = useState("");

    let headers = () => {
        if(admin){
            return {"headers":{'Authorization':"Bearer "+GetToken()}}
        }
    }
    const sendRequest = useCallback(async () => {
        // don't send again while we are sending
        if (isSending) return

        //update state
        setIsSending(true) 

        // send the actual request
        await axios.post(url,payload , headers())
        .then(res=>{
            console.log(res);
            setResponse(res.data);
            return res;
        })
        .catch(e=>{
            console.log(e);
            setError("can't fetch");
            return e;
        })
        .then(()=>{
            setIsSending(false)            
        })

    },[payload])
    return [ isSending, sendRequest, response, error]
}


/* 
    hook handle http post request 
*/
const useHttpPut = (url :string, payload :object , dependencies :any[] ,admin :boolean = false) :any[] =>{

    const [isSending, setIsSending] = useState(false);
    const [response, setResponse] = useState({});
    const [error, setError] = useState("");

    let headers = () => {
        if(admin){
            return {"headers":{'Authorization':"Bearer "+GetToken()}}
        }
    }
    const sendRequest = useCallback(async () => {
        // don't send again while we are sending
        if (isSending) return

        //update state
        setIsSending(true) 
        console.log({"sending payload": payload})
        // send the actual request
        await axios.put(url,payload , headers())
        .then(res=>{
            setResponse(res.data)
        })
        .catch(e=>{
            setError("can't fetch")
        })
        .then(()=>{
            setIsSending(false)            
        })

    }, [isSending, payload, ...dependencies])
    return [ isSending, sendRequest, response, error]
}





export { useHttpGet, useHttpPost, useHttpPut, useHttpGetOnMount };