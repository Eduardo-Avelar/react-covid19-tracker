import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUP from 'react-countup';
import cx from 'classnames'


const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    if (!confirmed) {
        return 'Carregando dados...';
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infectados</Typography>
                        <Typography variant="h5">
                            <CountUP
                                start={20000}
                                end={confirmed.value}
                                duration={2.5}
                                separator=","
                            ></CountUP>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toISOString().substr(0, 10).split('-').reverse().join('/')}</Typography>
                        <Typography variant="body2">Número de casos ativos de COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recuperados</Typography>
                        <Typography variant="h5">
                            <CountUP
                                start={20000}
                                end={recovered.value}
                                duration={2.5}
                                separator=","
                            ></CountUP>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toISOString().substr(0, 10).split('-').reverse().join('/')}</Typography>
                        <Typography variant="body2">Número de casos recuperados de COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Mortes</Typography>
                        <Typography variant="h5">
                            <CountUP
                                start={20000}
                                end={deaths.value}
                                duration={2.5}
                                separator=","
                            ></CountUP>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toISOString().substr(0, 10).split('-').reverse().join('/')}</Typography>
                        <Typography variant="body2">Número de mortes causados por COVID-19</Typography>
                    </CardContent>
                </Grid>

            </Grid>
        </div>
    )
}

export default Cards;