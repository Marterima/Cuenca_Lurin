
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OpenStreetMap_0": {
            "type": "raster",
            "tiles": ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "CuencaLurn_1": {
            "type": "geojson",
            "data": json_CuencaLurn_1
        }
                    ,
        "UnidadesFiscalizablesMinera_2": {
            "type": "geojson",
            "data": json_UnidadesFiscalizablesMinera_2
        }
                    ,
        "CentrosPobaldos_3": {
            "type": "geojson",
            "data": json_CentrosPobaldos_3
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_OpenStreetMap_0_0",
            "type": "raster",
            "source": "OpenStreetMap_0"
        },
        {
            "id": "lyr_CuencaLurn_1_0",
            "type": "fill",
            "source": "CuencaLurn_1",
            "layout": {},
            "paint": {'fill-opacity': 0.3, 'fill-color': '#e5b636'}
        }
,
        {
            "id": "lyr_UnidadesFiscalizablesMinera_2_0",
            "type": "fill",
            "source": "UnidadesFiscalizablesMinera_2",
            "layout": {},
            "paint": {'fill-opacity': 1.0}
        }
,
        {
            "id": "lyr_UnidadesFiscalizablesMinera_2_1",
            "type": "line",
            "source": "UnidadesFiscalizablesMinera_2",
            "layout": {},
            "paint": {'line-width': 1.738582677186, 'line-opacity': 1.0, 'line-color': '#e80000'}
        }
,
        {
            "id": "lyr_UnidadesFiscalizablesMinera_2_2",
            "type": "symbol",
            "source": "UnidadesFiscalizablesMinera_2",
            "layout": {'text-offset': [0.0, 0.0], 'text-field': ['get', 'UNIDAD_FISCALIZABLE'], 'text-size': 10.0, 'text-font': ['Open Sans Regular']},
            "paint": {'text-halo-width': 2.0, 'text-halo-color': '#ffebeb', 'text-color': '#000000'}
        }
,
        {
            "id": "lyr_CentrosPobaldos_3_0",
            "type": "circle",
            "source": "CentrosPobaldos_3",
            "layout": {},
            "paint": {'circle-radius': ['case', ['==', ['get', 'F2000'], 'Rural'], ['/', 12.09448818912, 2], ['==', ['get', 'F2000'], 'Rural'], ['/', 2.64566929137, 2], ['==', ['get', 'F2000'], 'Sin población particular - Rural'], ['/', 12.09448818912, 2], ['==', ['get', 'F2000'], 'Sin población particular - Rural'], ['/', 2.64566929137, 2], ['==', ['get', 'F2000'], 'Urbano'], ['/', 12.09448818912, 2], ['==', ['get', 'F2000'], 'Urbano'], ['/', 2.64566929137, 2], 1], 'circle-color': ['case', ['==', ['get', 'F2000'], 'Rural'], '#33a02c', ['==', ['get', 'F2000'], 'Rural'], '#33a02c', ['==', ['get', 'F2000'], 'Sin población particular - Rural'], '#1f78b4', ['==', ['get', 'F2000'], 'Sin población particular - Rural'], '#1f78b4', ['==', ['get', 'F2000'], 'Urbano'], '#ffff03', ['==', ['get', 'F2000'], 'Urbano'], '#ffff03', '#ffffff'], 'circle-opacity': ['case', ['==', ['get', 'F2000'], 'Rural'], 1.0, ['==', ['get', 'F2000'], 'Rural'], 1.0, ['==', ['get', 'F2000'], 'Sin población particular - Rural'], 1.0, ['==', ['get', 'F2000'], 'Sin población particular - Rural'], 1.0, ['==', ['get', 'F2000'], 'Urbano'], 1.0, ['==', ['get', 'F2000'], 'Urbano'], 1.0, 1], 'circle-stroke-width': ['case', ['==', ['get', 'F2000'], 'Rural'], 0.75590551182, ['==', ['get', 'F2000'], 'Rural'], 1.51181102364, ['==', ['get', 'F2000'], 'Sin población particular - Rural'], 0.75590551182, ['==', ['get', 'F2000'], 'Sin población particular - Rural'], 1.51181102364, ['==', ['get', 'F2000'], 'Urbano'], 0.75590551182, ['==', ['get', 'F2000'], 'Urbano'], 1.51181102364, 1], 'circle-stroke-color': ['case', ['==', ['get', 'F2000'], 'Rural'], '#000000', ['==', ['get', 'F2000'], 'Rural'], '#000000', ['==', ['get', 'F2000'], 'Sin población particular - Rural'], '#000000', ['==', ['get', 'F2000'], 'Sin población particular - Rural'], '#000000', ['==', ['get', 'F2000'], 'Urbano'], '#000000', ['==', ['get', 'F2000'], 'Urbano'], '#000000', '#000000']}
        }
],
}