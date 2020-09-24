import api from '@/services/api'

export function getModels() {
    return api().get('/models')
}

export function getModel(id) {
    return api().get(`/models/${id}`)
}