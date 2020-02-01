import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from '@material-ui/core/styles'
import commonStyles from '../theme/commonStyles'
import {
    Card,
    CardContent,
    CardHeader,
    IconButton,
} from '@material-ui/core/'
import { Icon } from './'
import mapboxgl from 'mapbox-gl'

const useStyles = makeStyles(theme => ({
    content: {
    },
    map: {
        display: 'block',
        borderRadius: theme.spacing(0.5),
        height: 210,
    }
}));

// dark: `mapbox://styles/listingslab/ck4c1er100to21co6sd5kl563`
// light: `mapbox://styles/listingslab/ck4uugpxf13y11cqp72z8snc4`

export default function Map() {
    const classesCommon = commonStyles();
    const classes = useStyles()
    const [map, setMap] = useState(null)
    const mapContainer = useRef(null)
    useEffect(() => {
        mapboxgl.accessToken = process.env.REACT_APP_MAPBOX;
        const initializeMap = ({ setMap, mapContainer }) => {
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: `mapbox://styles/listingslab/ck4c1er100to21co6sd5kl563`,
                // style: `mapbox://styles/listingslab/ck4uugpxf13y11cqp72z8snc4`,
                center: [153.107658, -27.211579],
                zoom: 6
            });

            map.on("load", () => {
                setMap(map);
                map.resize();
            });
        };

        if (!map) initializeMap({ setMap, mapContainer });
    }, [map])

    return (
        <Card className={classesCommon.card} variant="outlined">
            <CardHeader
                title={`Map`}
                avatar={<Icon icon={`map`} />}
                action={<IconButton
                    color={`inherit`}
                    onClick={(e) => {
                        e.preventDefault()
                        console.log('camera fullscreen')
                    }}
                >
                    <Icon icon={`fullscreen`} />
                </IconButton>}
            />
            <CardContent className={classes.content}>
                <div
                    className={classes.map}
                    ref={el => (mapContainer.current = el)}
                />
            </CardContent>
        </Card>
    );
}