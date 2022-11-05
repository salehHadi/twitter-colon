import React, {createContext, useEffect, useState} from 'react'

const DataBaise = createContext(null)

function Provider(props){

    const [pureData, setPureData] = useState([])
    const [data, setData] = useState([])
    const [profilePicture, setProfilePicture] = useState([])
    const [dataWithPicture, setDataWithPicture] = useState([])

    
    useEffect(()=>{
        const search = ["money", "work", "family", "education"]
        setTimeout(()=> {
            getData(search[0])
        }, 1000)
        setTimeout(()=> {
            getData(search[1])
        }, 1500)
        setTimeout(()=> {
            getData(search[2])
        }, 2000)
        setTimeout(()=> {
            getData(search[3])
        }, 2000)
        function getData(searchKey){
            fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchKey}`)
                .then(res => res.json())
                .then(rowData => {
                    setPureData(pre => [...pre, ...rowData])
                })
        }
    },[])


    useEffect(()=> {
        const search = ["college", "happy"]
        setTimeout(()=> {
            getPicture(search[0])
        }, 1000)
        setTimeout(()=> {
            getPicture(search[1])
            
        }, 1500)
            function getPicture(searchKey) {
                fetch(`https://api.unsplash.com/search/collections?page=10&query=${searchKey}&q=1&client_id=LJZlIBtnLMZTq8uHlBRkZdtqbF3ED_kVqa0lI3Q_0RU`)
                    .then(res => res.json())
                    .then(picture => setProfilePicture(el => [...el, ...picture.results]) )
            }
    },[])


    useEffect(() => {
        // eslint-disable-next-line
        pureData.map(el => el.meanings.map(e => e.definitions.map(each => {
            setData(el => [...el, {text: each.definition}])
        })))
        setTimeout(()=> {
            for (let i = 0; i < profilePicture.length && data.length; i++) {
                setDataWithPicture(el => [...el, { photo:profilePicture[i].cover_photo.urls.regular, content: data[i]}])
            }
        }, 3000)
        // eslint-disable-next-line
    },[pureData])


    function addTweet(value) {
        const text = {text:value}
        const content = text
        setDataWithPicture(el => [{photo:"https://upcdn.io/FW25awy/raw/277784206_2158174651023478_5857800306420580049_n-79Cx.jpg", content}, ...el])
    }

    return (
        <DataBaise.Provider value={{dataWithPicture, addTweet}}>
            {props.children}
        </DataBaise.Provider>
    )
}

export {Provider, DataBaise}