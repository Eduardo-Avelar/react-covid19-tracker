import React from 'react';

import { Cards, Chart, CoutryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api'

class App extends React.Component {

    state = {
        data: {},
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        //console.log(data);
        this.setState({ data: fetchedData })
    }

    render() {
        const { data } = this.state;

        return (
            <div className={styles.container}>
                <Cards data={data}/>
                <CoutryPicker/>
                <Chart/>
            </div>
        )
    }
}

export default App;