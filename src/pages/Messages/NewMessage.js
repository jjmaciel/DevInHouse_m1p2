import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import api from '../../Services/Api';
import Swal from 'sweetalert2';


function NewMessage() {

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

    const schema = yup.object().shape({
        channel : yup.string().required('Selecione um Canal'),
        trigger : yup.string().required('Selecione um Gatilho'),
        timer: yup.string().required('Você precisa digitar um Timer').min(4, 'Tempo deve ter mo mínimo 5 caracteres'),
        newMessage: yup.string().required('Você precisa digitar uma mensagem').min(2, 'Mensagem deve ter mais de 2 caracteres'),
    });

    const handleAddMessage = async (event) => {
        event.preventDefault();
        setDisable(true);
                
        try {
            await schema.validate({channel: channel, trigger: trigger, timer: timer, newMessage: newMessage});

            const req = await api.post('/messages', {
                channel: channel,
                trigger: trigger,
                timer: timer,
                message: newMessage
            });

            setId(req.data.id);
            setDisable(false);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Mensagem Salva com Sucesso',
                showConfirmButton: false,
                timer: 1500
              })
            setTrigger('');
            setChannel('');
            setTimer('');
            setNewMessage('');     
        } catch (error) {
            setDisable(false);
            Swal.fire(error.errors[0]);
        }

    }

    return (
        <>
            
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
                        <select className="form-select" value={trigger} onChange={(e) => setTrigger(e.target.value)}>
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
                        <select className="form-select" value={channel} onChange={(e) => setChannel(e.target.value)}>
                            <option></option>   
                            {listchannels.map((i) => (
                                <option value={i.name} key={i.id}>{i.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="col-md-4">
                        <input
                            className="form-control"
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
                            className="form-control"
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