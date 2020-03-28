import Api from '@/services/Api'

export default {
    getModels() {
        return Api().get('/models')
    }
}