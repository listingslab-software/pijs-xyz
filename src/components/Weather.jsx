import React from 'react';
import { getStore } from '../';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
    Avatar,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
} from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Icon } from './';

const useStyles = makeStyles(theme => ({
    heading: {
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(0.25),
        color: 'white',
    },

}));

function Weather() {
    const store = getStore();
    const classes = useStyles();
    const { weather } = useSelector(state => state);
    const {
        expanded,
        error,
        windSpeed,
        windDirection,
        temperature,
        humidity,
        overview,
        outlookIcon,
        // sunrise,
        // sunset
    } = weather;
    return (
        <React.Fragment>
            <ExpansionPanel
                expanded={expanded}
                onChange={(e) => {
                    store.dispatch({ type: `WEATHER/TOGGLE_EXPAND` })
                }}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="Weather"
                    id="weather">
                    <Icon icon={'weather'} color={`primary`} />
                    <Typography className={classes.heading}>
                        Weather
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.screen}>

                    {error ?
                        <Typography
                            variant={`body1`} className={classes.error}>
                            Weather {error}
                        </Typography>
                        : null}
                    <Avatar src={outlookIcon} alt={`weather outlook`} />
                    <Typography
                        variant={`body1`} className={classes.chinese}>

                        <strong>Overview</strong>&nbsp;{overview}<br />
                        <strong>Wind Speed</strong>&nbsp;{windSpeed}<br />
                        <strong>Wind Direction</strong>&nbsp;{windDirection}<br />
                        <strong>Temperature</strong>&nbsp;{temperature}<br />
                        <strong>Humidity</strong>&nbsp;{humidity}<br />

                        {/* <strong>Sunrise</strong>&nbsp;{sunrise}<br />
                        <strong>Sunset</strong>&nbsp;{sunset}<br /> */}


                    </Typography>




                </ExpansionPanelDetails>
            </ExpansionPanel>
        </React.Fragment>
    );
}

const MemodFuncComponent = React.memo(Weather);
export default MemodFuncComponent;
