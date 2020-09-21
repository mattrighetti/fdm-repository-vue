import api from '@/services/api'

export default {
    getModels() {
        return api().get('/models')
    }
}