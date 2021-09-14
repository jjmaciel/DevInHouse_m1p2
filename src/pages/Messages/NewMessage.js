import React, { useEffect, useState } from 'react';
import api from '../../Services/Api';
import TransitionsModal from '../../components/theme/modal';


function NewMessage() {

    const [viewModal, setViewModal] = useState(false);
    const [disable, setDisable] = useState(false)

    const [listTriggers, setListTriggers] = useState([]);
    const [listchannels, setListChannels] = useState([]);

    const [id, setId] = useState('');
    const [channel, setChannel] = useState('');
    const [trigger, setTrigger] = useState('');
    const [timer, setTimer] = useState('')
    const [newMessage, setNewMessage] = useState('');
        
    useEffect(() => {
        async function listTrigger(){
            let res = await api.get('/triggers');
            setListTriggers(res.data);
        }

        async function listchannel(){
            let res = await api.get('./channels');
            setListChannels(res.data);
        }

        listTrigger();
        listchannel();
        
    }, [])

    const handleAddMessage = async (event) => {
        event.preventDefault();
        setDisable(true);
                
        try {
            const req = await api.post('/messages', {
                channel: channel,
                trigger: trigger,
                timer: timer,
                message: newMessage
            });

            setId(req.data.id);
            setViewModal(true);
            setDisable(false);
            setTrigger('');
            setChannel('');
            setTimer('');
            setNewMessage('');     
        } catch (error) {
            console.log("Erro durante o armazenamento");
            console.log(error);
        }

    }

    return (
        <>
            {viewModal == true &&
            <div onClick={() => setViewModal(false)}>
                <TransitionsModal 
                    textOn={"Mensagem Salva com Sucesso!"} 
                    textTwo={`Mensagem salva no ID: ${id}`}
                />
            </div>
            }

            <form onSubmit={handleAddMessage}>
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
                        <input
                            class="form-control"
                            type="text"
                            disabled={disable}
                            value={timer}
                            onChange={e => setTimer(e.target.value)}
                        />
                    </div>

                </div>{/**row */}

                <div className="row">

                    <div className="col-md-12">
                        Mensagem:
                    </div>
                    <div className="col-md-12">
                        <textarea
                            class="form-control"
                            disabled={disable}
                            value={newMessage}
                            onChange={e => setNewMessage(e.target.value)}
                        ></textarea>
                    </div>
                </div>{/*row */}

                <br />
                <div className="row">
                    <div className="col-md-12">
                        <button type="submit" className="form-control btn btn-secondary">Salvar</button>
                    </div>
                </div>
            </form>
        </>
    )
};

export default NewMessage;