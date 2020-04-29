import React, { useState, useEffect,useCallback, useRef } from 'react';
// import logo from './logo.svg';
import Panel from './components/Panel';
import './App.css';

function App() {

    const [settings, setSettings] = useState({
        rows: 50,
        cols: 50,
        update_mSec: 1000,
        init_cell_number: 3,
        generation: 0
    });

    const startGenerationRef = useRef(false);

    let id = null;
    const MAX_COUNT = 1000;

    const startPlay = useCallback(() => {

        if (!startGenerationRef.current) return;

        if (settings.generation > MAX_COUNT) clearTimeout(id);

        console.log('startPlay -> settings', settings);
        setSettings(prev => ({...prev, generation: prev.generation + 1}));

        setTimeout(startPlay, settings.update_mSec);

    }, [settings.generation]);

    useEffect(() => {
        console.log('settings.generation',settings.generation);
    },[settings]);


    return (
        <div className="App">
            <header style={ {
                position: 'relative',
                margin: '0 20%'
            } }>
                {console.log('render header')}
                <Panel {...settings} />
            </header>

            { JSON.stringify(settings)}

            <section style={{margin: '0 20% 20px  20%'}}>
                <div style={ {display: 'flex', justifyContent: 'space-around'} } >
                    <label htmlFor='rows'>Rows</label>
                    <input type="number" name="rows" placeholder="rows" defaultValue='50' onChange={e => setSettings({...settings, rows: Number(e.target.value)})} />

                    <label htmlFor='columns'>Columns</label>
                    <input type="number" name="columns" placeholder="columns" defaultValue='50' onChange={e => setSettings({...settings, cols: Number(e.target.value)})} />

                    <label htmlFor='updateSeconds'>Update Seconds</label>
                    <input type="number" name="updateSeconds" placeholder="update seconds" defaultValue='500' onChange={e => setSettings({...settings, update_mSec: Number(e.target.value)})} />

                    <label htmlFor='initialNumberOfCells'>Initial Number Of Cells</label>
                    <input type="number" name="initialNumberOfCells" placeholder=" initial number of cells" defaultValue='3' onChange={e => setSettings({...settings, init_cell_number: Number(e.target.value)})} />

                    <button onClick={() => (startGenerationRef.current = !startGenerationRef.current) && startPlay()}>reset</button>
                </div>
            </section>
        </div>
    );
}

export default App;
