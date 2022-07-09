import React, { useState, useEffect, useRef } from 'react'


import Feed from './Feed'

// import './instaFeeds.css'

const InstaFeeds = () => {
    const [feeds, setFeedsData] = useState([])
    //     id:'',
    //     username:'',
    //     media_type:'',
    //     media_url:'',
    //     captain:''
    // })
    //use useRef to store the latest value of the prop without firing the effect
    // const tokenProp = useRef(token);
    // tokenProp.current = token;

    useEffect(() => {
        // this is to avoid memory leaks
        const abortController = new AbortController();

        async function fetchInstagramPost () {
          try{
             const resp=await fetch(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&access_token=IGQVJYMlprTVBpUjRNTWFQdGVvMkFFTnY3VE50Y2pRS3R4cGlvYW5YcndIRUZAtaTV6ZAjZAhN1pFZA3QyblFaOC0xTlpGdUFFTU5IWDVnNXNZAQURxbnVnRTJiWFEwem04NHFTS29ONEt5R0FiNkEzOTZAESQZDZD%27`)
             const json=await resp.json();
            // let parsedData=await data.json()
            console.log(json); 
            setFeedsData(json);
            // setFeedsData({
            //     id:json.id,
            //     username:json.username,
            //     media_type:json.media_type,
            //     media_url:json.media,
            //     captain:json.captain
            //     });
            // .then(response => setFeedsData(response.json()))
           
            // .then(response => response.json())
            
            // .then(data => console.log(data));
            // .then(response=> setFeedsData(response.json()));
        //     .then((resp) => {
        //         setFeedsData(resp.data.data)
        //     })

          } catch (err) {
              console.log('error', err)
          }
        }
        
        // manually call the fecth function 
        fetchInstagramPost();
  
        return () => {
            // cancel pending fetch request on component unmount
            abortController.abort(); 
        };
    },)

    return (
        <div className="container">
            {console.log(feeds)}
            {/* {feeds.map((feed) => (
                <Feed key={feed.id} feed={feed} />
            ))} */}
        </div>
        
    );
}

export default InstaFeeds;