export default function (instance) {
    return (data) => instance.get('ref', {
        params: {
            vk_id: store.getParams('userId'),
            type_id: 1
        }
    })
}
