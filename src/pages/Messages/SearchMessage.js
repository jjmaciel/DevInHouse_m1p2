import React, { useEffect, useState } from 'react';
import api from '../../Services/Api';

function SearchMessage() {

    // const [trigger, setTrigger] = useState('');
    // const [channel, setChannel] = useState('');
    // const [timer, setTimer] = useState('');
    // const [message, setMessage] = useState('');
    const [listMessages, setListMessages] = useState([]);

    const hadleGetMessages = async () => {
        try{
            const res = await api.get('/messages');
            setListMessages(res.data);
        } catch (error) {
            console.log('Erros econtrados no json-server');
            console.log(error);
        }
        
    };

    useEffect(() => {
        hadleGetMessages();
    }, []);

    return (
        <>
            <form>
                <div className="row">
                    <div className="col-md-4">
                        Gatilho
                    </div>
                    <div className="col-md-4">
                        Canal
                    </div>
                    <div className="col-md-4">
                        Timer
                    </div>

                    <div className="col-md-4">
                        <input class="form-control" type="text" />
                    </div>

                    <div className="col-md-4">
                        <input class="form-control" type="text" />
                    </div>

                    <div className="col-md-4">
                        <input class="form-control" type="text" />
                    </div>
                </div>
            </form>

            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Gatilho</th>
                        <th scope="col">Canal</th>
                        <th scope="col">Tempo</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {listMessages.map(i => 
                        <tr>
                            <th>{i.trigger}</th>
                            <th>{i.channel}</th>
                            <th>{i.timer}</th>
                            <th>Ação</th>
                            <th scope="row">1</th>
                        </tr>
                    )}
                    
                </tbody>

            </table>

        </>
    )
};

export default SearchMessage;