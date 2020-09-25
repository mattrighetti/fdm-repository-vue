import api from '@/services/api'

export function getModels() {
    return api().get('/models')
}

export function getModel(id) {
    return api().get(`/models/${id}`)
}

export function getModelMarkdown(id) {
    return api().get(`/models/${id}/markdown`)
}

export function getMissingModels() {
    return api().get('/missing_models')
}