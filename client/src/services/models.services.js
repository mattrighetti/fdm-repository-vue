import api from '@/services/api'

export function getModels() {
    return api().get('/models')
}