import {useState, React} from 'react'

export default function StickyNoteForm({formSubmitHandler}) {
    const [values, setValues] = useState({})
    
    const changeHandler = (event) => {
        const name = event.target.name;
        let value = event.target.value;
        
        setValues({
            ...values,
            [name]: value,
        })
    }

    const submitHandler = (event) => {
        event.preventDefault()
    
        formSubmitHandler(values)
    }

  return (

    <>
        <form onSubmit={submitHandler} >
            <input onChange={changeHandler} name="title" placeholder="Title"></input>
            <input onChange={changeHandler} name="content" placeholder="Content"></input>
            <input type="submit"></input>
        </form>
    </>
  )
}
