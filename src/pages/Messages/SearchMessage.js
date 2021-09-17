import React, { useEffect, useState } from 'react';
import api from '../../Services/Api';
import Swal from 'sweetalert2';

function SearchMessage() {

    const [listMessages, setListMessages] = useState([]);
    const [listTriggers, setListTriggers] = useState([]);
    const [listchannels, setListChannels] = useState([]);

    const [channel, setChannel] = useState('');
    const [trigger, setTrigger] = useState('');
    const [timer, setTimer] = useState('');


    async function hadleGetMessages() {
        try {
            let res = await api.get('/messages');
            setListMessages(res.data);
        } catch (error) {
            console.log('Erros econtrados no json-server');
            console.log(error);
        }
    };

    async function listTrigger() {
        let res = await api.get('/triggers');
        setListTriggers(res.data);
    }

    async function listchannel() {
        let res = await api.get('./channels');
        setListChannels(res.data);
    }

    useEffect(() => {

        hadleGetMessages();
        listTrigger();
        listchannel();

    }, [])

    useEffect(() => {
        var urlTrigger = '';
        var urlChannel = '';
        var urlTimer = '';
        if (trigger) {
            urlTrigger = `trigger=${trigger}`;
        }
        if (channel) {
            urlChannel = `channel=${channel}`;
        }
        if (timer) {
            urlTimer = `timer_like=${timer}`;
        }

        async function getFilters() {
            let filter = `?${urlTrigger}&${urlChannel}&${urlTimer}`;
            let res = await api.get('/messages' + filter);
            setListMessages(res.data);
        }

        setTimeout(function () { getFilters() }, 2000);

    }, [trigger, channel, timer]);


    const handleModal = (mes) => {
        Swal.fire(mes);
    }

    const handleClearFilter = () => {
        setTimer('');
        setTrigger('');
        setChannel('');
    }

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

                    <div className="col-md-2">
                        <input className="form-control" type="text" value={timer} onChange={(e) => setTimer(e.target.value)} />
                    </div>

                    <div className="col-md-2">
                      <button type="button" className="btn btn-outline-warning" onClick={() => handleClearFilter()} >Limpar Filtro</button>
                    </div>

                </div>
            </form>
            <br />

            <table className="table table-light" >
                <thead>
                    <tr>
                        <th scope="col">Gatilho</th>
                        <th scope="col">Canal</th>
                        <th scope="col">Tempo</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {listMessages.map((i, k) =>
                            <tr key={k}>
                                <th>{i.trigger}</th>
                                <th>{i.channel}</th>
                                <th>{i.timer}</th>
                                <th><button type="button" className="btn btn-outline-dark btn-sm" onClick={() => handleModal(i.message)}>Mensagem</button></th>
                            </tr>
                    )}

                </tbody>

            </table>

        </>
    )
};

export default SearchMessage;