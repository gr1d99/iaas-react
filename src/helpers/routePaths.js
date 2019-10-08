export default {
    openings: {
        create: '/o/create',
        all: '/o',
        detail: function(id) { return `${this.all}/${id}` },
        edit: function(id) { return `${this.all}/${id}/edit` }
    }
}
