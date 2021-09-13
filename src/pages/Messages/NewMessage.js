import React, { useEffect, useState } from 'react';
import api from '../../Services/Api';
import TransitionsModal from '../../components/theme/modal';


function NewMessage() {

    const [viewModal, setViewModal] = useState(false);
    const [disable, setDisable] = useState(false)

    const [id, setId] = useState('1312132');
    const [channel, setChannel] = useState('');
    const [trigger, setTrigger] = useState('');
    const [timer, setTimer] = useState('')
    const [newMessage, setNewMessage] = useState('');
        
    console.log(viewModal);

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
                        <input
                            class="form-control"
                            type="text"
                            disabled={disable}
                            value={trigger}
                            onChange={e => {setTrigger(e.target.value)}}
                        />
                    </div>

                    <div className="col-md-4">
                        <input
                            class="form-control"
                            type="text"
                            disabled={disable}
                            value={channel}
                            onChange={e => setChannel(e.target.value)}
                        />
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