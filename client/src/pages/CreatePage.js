import React, { useEffect, useState, useContext } from "react"
import { useHttp } from "../hooks/http.hooks"
import { AuthContext } from "../context/AuthContext"
import { useHistory } from "react-router-dom"

export const CreatePage = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const [link, setLink] = useState()
    const {request} = useHttp()

    useEffect( () => {
        window.M.updateTextFields()
    }, [])

    const pressHandler = async event => {
        if (event.key === 'Enter') {
            try {
                const data = await request('/api/link/generate', 'POST', {from: link}, {
                    Authorization: `Bearer ${auth.token}`
                })

                history.push(`/detail/${data.link._id}`)
                console.log(data)
            } catch (e) { }
        }


    }

    return (
        <div className="row">
            <div className="col s8 offset-s2" style={{ paddingTop: '2rem' }}>
                <div className="input-field">
                    <input placeholder="Put your link here"
                        id="link"
                        type="text"
                        value={link}
                        onChange={e => setLink(e.target.value)}
                        onKeyPress={pressHandler}
                    />
                    <label htmlFor="link">Enter your link</label>
                </div>
            </div>
        </div>
    )
}

