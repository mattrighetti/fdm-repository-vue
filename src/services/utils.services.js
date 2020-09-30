import api from '@/services/api'

export function getDropdownConfig() {
    return api().get('/filters').then(response => {
        var dropdown_config = {
            cod: { name: "Country" , values: response.data.cod, selected: null },
            soa: { name: "Scale" , values: response.data.soa, selected: null },
            floodtypei: { name: "Flood Type I" , values: response.data.floodtypei, selected: null },
            floodtypeii: { name: "Flood Type II" , values: response.data.floodtypeii, selected: null },
            modeltypei: { name: "Model Type I" , values: response.data.modeltypei, selected: null },
            modeltypeii: { name: "Model Type II" , values: response.data.modeltypeii, selected: null },
            modeltypeiii: { name: "Model Type III" , values: response.data.modeltypeiii, selected: null },
            eis: { name: "Exposed Items" , values: response.data.eis, selected: null }
        }

        return dropdown_config
    })
}