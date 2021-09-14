import React, { useEffect, useState } from 'react';
import api from '../../Services/Api';
import TransitionsModal from '../../components/theme/modal';

function SearchMessage() {

    const [viewModal, setViewModal] = useState(false);

    const [listMessages, setListMessages] = useState([]);
    const [listTriggers, setListTriggers] = useState([]);
    const [listchannels, setListChannels] = useState([]);

    const [channel, setChannel] = useState('');
    const [trigger, setTrigger] = useState('');
    const [timer, setTimer] = useState('');
    const [message, setMessage] = useState('');


    useEffect(() => {
        async function hadleGetMessages(){
            try{
                let res = await api.get('/messages');
                setListMessages(res.data);
            } catch (error) {
                console.log('Erros econtrados no json-server');
                console.log(error);
            }
        };

        async function listTrigger(){
            let res = await api.get('/triggers');
            setListTriggers(res.data);
        }

        async function listchannel(){
            let res = await api.get('./channels');
            setListChannels(res.data);
        }

        hadleGetMessages();
        listTrigger();
        listchannel();

    }, [])

    useEffect(() => {
        var urlTrigger = '';
        var urlChannel = '';
        var urlTimer = '';
        if (trigger){
           urlTrigger = `trigger=${trigger}`;
        }
        if (channel){
           urlChannel = `channel=${channel}`;
        }
        if (timer){
           urlTimer = `timer=${timer}`;
        }

        async function getFilters(){
            let filter = `?${urlTrigger}&${urlChannel}&${urlTimer}`;
            let res = await api.get('/messages'+filter);
            setListMessages(res.data);
        }

        setTimeout(function(){getFilters()}, 2000);
        
    }, [trigger, channel, timer]);

    function handleModal(mes){
        setMessage(mes);
        setViewModal(true);
    }




    return (
        <>
            {viewModal == true &&
            <div onClick={() => setViewModal(false)}>
                <TransitionsModal 
                    textOn=''
                    textTwo={message}
                />
            </div>
            }
            
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
                        <select value={trigger} onChange={(e) => setTrigger(e.target.value)}>
                            <option></option>
                            {listTriggers.map((i) => 
                                <option 
                                    value={i.name} 
                                    key={i.id}
                                    >
                                    {i.name}
                                </option>
                            )}
                        </select>
                    </div>

                    <div className="col-md-4">
                        <select value={channel} onChange={(e) => setChannel(e.target.value)}>
                            <option></option>   
                            {listchannels.map((i) => (
                                <option value={i.name} key={i.id}>{i.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="col-md-4">
                        <input class="form-control" type="text" value={timer} onChange={(e) => setTimer(e.target.value)} />
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
                            <th><button type="button" class="btn btn-outline-dark btn-sm" onClick={() => handleModal(i.message)}>Mensagem</button></th>
                        </tr>
                    )}
                    
                </tbody>

            </table>

        </>
    )
};

export default SearchMessage;