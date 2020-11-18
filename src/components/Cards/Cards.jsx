import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';


const Cards = ({ confirmed, recovered, deaths, lastUpdate }) => {
    console.log(props);

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infectados</Typography>
                        <Typography variant="h5">Dados Reais</Typography>
                        <Typography color="textSecondary">Dados Reais</Typography>
                        <Typography variant="body2">Número de casos ativos de COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recuperados</Typography>
                        <Typography variant="h5">Dados Reais</Typography>
                        <Typography color="textSecondary">Dados Reais</Typography>
                        <Typography variant="body2">Número de casos recuperados de COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Mortes</Typography>
                        <Typography variant="h5">Dados Reais</Typography>
                        <Typography color="textSecondary">Dados Reais</Typography>
                        <Typography variant="body2">Número de mortes causados por COVID-19</Typography>
                    </CardContent>
                </Grid>

            </Grid>
        </div>
    )
}

export default Cards;