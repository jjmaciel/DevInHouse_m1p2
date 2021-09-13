import React, { useState } from 'react';
import { Container } from '@material-ui/core';

import NewMessage from './NewMessage';
import SearchMessage from './SearchMessage';
import useStyles from './style';

function Messages() {

    const classes = useStyles();

    const [viewForm, setViewForm] = useState(true);

    return (
        <Container className={classes.container}>
            
            <div class="row justify-content-md-center">
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-6">
                            Mensagem
                        </div>
                        <div className="col-md-3">
                            <button type="button" class="btn btn-outline-secondary" onClick={() => setViewForm(true)} >Pequisar</button>
                        </div>
                        <div className="col-md-3">
                            <button type="button" class="btn btn-outline-secondary" onClick={() => setViewForm(false)}>Nova Mensagem</button>
                        </div>
                    </div>
                    <hr/>
                    {viewForm === true &&
                        <SearchMessage/>
                    }

                    {viewForm === false &&
                        <NewMessage/>
                    }
                    
                    
                </div>
            </div>
        </Container>
    )
};

export default Messages;