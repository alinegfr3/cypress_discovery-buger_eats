var faker = require('faker')

export default {

    deliver: function() {

        var firstName = faker.name.firstName()

        var data = {
            name: 'Aline Freire',
            cpf: '72810472076',
            email: 'aline@hotmail.com',
            whatsapp: '11999999999',
            address: {
                postalcode: '07144000',
                street: 'Avenida Silvestre Pires de Freitas',
                number: '1000',
                details: 'Ap 142',
                district: 'Jardim Paraíso',
                city_state: 'Guarulhos/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data 
    }

}