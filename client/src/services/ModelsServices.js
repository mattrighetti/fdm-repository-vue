import Api from '@/services/Api'

export default {
    getModels() {
        return Api().get('/models')
    },
    getModel(id) {
        return Api().get('/models/' + id)
    },
    async getDynamicFilters() {
        const eisFilters = await Api().get('/filters/eis')
        const countryFilters = await Api().get('/filters/country')

        return { eisFilters , countryFilters }

    }
}